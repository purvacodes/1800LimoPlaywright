import { BookingFormGetters } from '../utility/BookingFormGetters';

export class RateDistribution extends BookingFormGetters {
    constructor(page, locatorsObj) {
        super(page, locatorsObj);
    }

    async getBookingRates(options = {}) {
        const bookingType = options.bookingType || "NORMAL";
        const results = {};

        const sections = [
            "vehicleBaseRates",
            "tollsTaxes",
            "extraChargeAmenities",
            "additionalMiscCharges"
        ];

        for (const sectionName of sections) {
            const section = this.rates[sectionName];
            results[sectionName] = {};

            for (const key of Object.keys(section)) {
                if (key === "section" || key.endsWith("Amount")) continue;

                const rateLocator = section[key];
                const amountLocator = section[`${key}Amount`];

                const rate = await this.getRateValue(rateLocator, section.section);
                const amount = amountLocator
                    ? await this.getRateValue(amountLocator, section.section, true)
                    : null;

                const rateData = {
                    rate: Number(rate || 0),
                    amount
                };

                if (sectionName === "tollsTaxes") {
                    const checked = await this.rates.toggles[key].getAttribute("aria-checked");
                    rateData.type = checked === "true" ? "%" : "$";
                }

                results[sectionName][key] = rateData;

                console.log(`${sectionName} -> ${key}:`, rateData);
            }
        }
        // Get Distribution values
        results.distribution = {};

        const distributionKeys = [
            "subTotal",
            "grandTotal",
            "adminShare"
        ];

        if (bookingType === "FARMOUT") {
            distributionKeys.push("farmoutShare");
        }

        if (bookingType === "TRAVEL_AGENT") {
            distributionKeys.push("taShare");
        }

        for (const key of distributionKeys) {
            const locator = this.rates.getDistribution[key];
            const value = await locator.innerText();

            results.distribution[key] = Number(
                value.replace(/[$,%\s,]/g, "") || 0
            );

            console.log(`distribution -> ${key}:`, results.distribution[key]);
        }
        return results;
    }

    async calculateRateDistribution(options) {
        const rates = await this.getBookingRates(options);

        const air = this.calculateAIR(rates.vehicleBaseRates, options);
        const tt = this.calculateTaxes(rates.tollsTaxes, air);
        const ea = this.sumSection(rates.extraChargeAmenities);
        const mc = this.sumSection(rates.additionalMiscCharges);

        const gratuity = rates.additionalMiscCharges.extraGratuity?.rate || 0;

        const shares = this.calculateShares(air, ea, gratuity, options.bookingType);
        const subtotal = this.calculateSubtotal(air, tt, ea, mc, shares, options.bookingType);
        const grandTotal = this.round(
            subtotal * Number(options.vehicles || 1)
        );
        const affiliatePayout = this.calculateAffiliatePayout(grandTotal, shares, options.bookingType);
        console.log("Rate Distribution Calculation:", {
            AIR: this.round(air),
            TT: this.round(tt),
            EA: this.round(ea),
            MC: this.round(mc),
            Admin: shares.admin,
            Farmout: shares.farmout,
            TA: shares.ta,
            Subtotal: subtotal,
            GrandTotal: grandTotal,
            AffiliatePayout: affiliatePayout
        });

        return {
            AIR: this.round(air),
            TT: this.round(tt),
            EA: this.round(ea),
            MC: this.round(mc),
            Admin: shares.admin,
            Farmout: shares.farmout,
            TA: shares.ta,
            Subtotal: subtotal,
            GrandTotal: grandTotal,
            AffiliatePayout: affiliatePayout
        };
    }

    calculateAIR(vehicleBaseRates, baseRateOptions) {
        let baseRate = vehicleBaseRates.baseRate.rate;

        if (
            baseRateOptions.tripType === "CHARTER" &&
            !baseRateOptions.minRateApplies
        ) {
            baseRate *= Number(baseRateOptions.hours || 0);
        }

        return (
            baseRate +
            vehicleBaseRates.stops.rate +
            vehicleBaseRates.wait.rate +
            vehicleBaseRates.earlyAmLatePmHoliday.rate
        );
    }

    calculateTaxes(tollsTaxes, air) {
        let total = 0;

        for (const tax of Object.values(tollsTaxes)) {
            total += tax.type === "%"
                ? (tax.rate / 100) * air
                : tax.rate;
        }

        return total;
    }

    sumSection(section) {
        return Object.values(section).reduce((sum, item) => {
            return sum + item.rate;
        }, 0);
    }
    //BASE RATE IN PREVIEW IS not just the AIR, Its AIR + 25%(AIR) + 25%(GRATUITY) + 25%(EA) WHICH HELPS in calculating shares
    calculateShares(air, ea, gratuity, bookingType) {
        let admin = 0;
        let farmout = 0;
        let ta = 0;

        switch (bookingType) {
            case "NORMAL":
                admin =
                    (air * 0.25) +
                    (gratuity * 0.25) +
                    (ea * 0.25);
                break;

            case "FARMOUT":
                farmout =
                    (air * 0.10) +
                    (ea * 0.10);

                admin =
                    (air * 0.15) +
                    (gratuity * 0.25) +
                    (ea * 0.15);
                break;

            case "TRAVEL_AGENT":
                ta =
                    (air * 0.10) +
                    (ea * 0.10);

                admin =
                    (air * 0.15) +
                    (gratuity * 0.25) +
                    (ea * 0.15);
                break;
        }

        return {
            admin: this.round(admin),
            farmout: this.round(farmout),
            ta: this.round(ta)
        };
    }

    calculateSubtotal(air, tt, ea, mc, shares, bookingType) {
        let subtotal =
            air +
            tt +
            ea +
            mc +
            shares.admin;

        if (bookingType === "FARMOUT") {
            subtotal += shares.farmout;
        }

        if (bookingType === "TRAVEL_AGENT") {
            subtotal += shares.ta;
        }

        return this.round(subtotal);
    }

    calculateAffiliatePayout(grandTotal, shares, bookingType) {
        let payout = grandTotal - shares.admin;

        if (bookingType === "FARMOUT") {
            payout -= shares.farmout;
        }

        if (bookingType === "TRAVEL_AGENT") {
            payout -= shares.ta;
        }

        return this.round(payout);
    }

    async getRateValue(locator, sectionLocator, isText = false) {
        try {
            return isText
                ? await locator.innerText()
                : await locator.inputValue();
        } catch {
            await sectionLocator.click();

            try {
                await locator.waitFor({
                    state: "visible",
                    timeout: 2000
                });
            } catch {
                // ignore
            }

            return isText
                ? await locator.innerText()
                : await locator.inputValue();
        }
    }
    round(value) {
        return Number(Number(value).toFixed(2));
    }
}