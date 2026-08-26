import { BookingFormGetters } from '../utility/BookingFormGetters';
export class GetBookingDetails extends BookingFormGetters {
    constructor(page, locatorsObj) {
        super(page, locatorsObj);
    }

    async getServiceType() {
        return await this.fetchBookingDetails.serviceType.textContent();
    }

    async getTransferType() {
        return await this.fetchBookingDetails.transferType.textContent();
    }

    async getClientAccountValue() {
        const clientAccountType = await this.fetchBookingDetails.clientAccountType.getAttribute('value');

        const clientAccount = await this.fetchBookingDetails.clientAccount.innerText();

        if (clientAccountType === 'travel_planner') {
            const travelClient =
                await this.fetchBookingDetails.travelClient.innerText();

            return {
                clientAccount,
                travelClient
            };
        }

        return {
            clientAccount
        };
    }

    async getPassengerInfo() {
    const {passengerName,passengerEmail,passengerPhone,totalPax,luggageCount,} = this.passengerInfo;
    const [name,email,phone,pax,luggage,
    ] = await Promise.all([
        passengerName.inputValue(),
        passengerEmail.inputValue(),
        passengerPhone.inputValue(),
        totalPax.inputValue(),
        luggageCount.inputValue(),
    ]);

    return {
        passengerName: name,
        passengerEmail: email,
        passengerPhone: phone,
        totalPax: pax,
        luggageCount: luggage,
    };
}

    async getBookingSectionDetails(transferType) {
        if (!transferType) {
            throw new Error('transferType is required');
        }

        const t = transferType.toLowerCase();

        const bookingDetails = {
            meetGreet: await this.bookingDetails.meetGreet.innerText(),
            numberOfVehicles: await this.bookingDetails.numberOfVehicles.inputValue(),
            pickupDate: await this.bookingDetails.pickupDate.inputValue(),
            pickupTime: await this.bookingDetails.pickupTime.inputValue(),
            totalDistance: await this.bookingDetails.totalDistance.textContent(),
            estimatedTime: await this.bookingDetails.estimatedTime.textContent(),
        };

        // -------------------- Pickup --------------------
        if (t.startsWith('city')) {

            bookingDetails.pickupAddress =
                await this.bookingDetails.pickupAddress.inputValue();

        } else if (t.startsWith('airport')) {

            bookingDetails.pickupAirport =
                await this.bookingDetails.pickupAirport.inputValue();

            bookingDetails.pickupAirline =
                await this.bookingDetails.pickupAirline.inputValue();

            bookingDetails.pickupFlight =
                await this.bookingDetails.pickupFlight.inputValue();

            bookingDetails.originCity =
                await this.bookingDetails.originCity.inputValue();
        }

        // -------------------- Drop-off --------------------
        if (t.endsWith('tocity')) {

            bookingDetails.dropoffAddress =
                await this.bookingDetails.dropoffAddress.inputValue();

        } else if (t.endsWith('toairport')) {

            bookingDetails.dropoffAirport =
                await this.bookingDetails.dropoffAirport.inputValue();

            bookingDetails.dropoffAirline =
                await this.bookingDetails.dropoffAirline.inputValue();

            bookingDetails.dropoffFlight =
                await this.bookingDetails.dropoffFlight.inputValue();
        }

        console.log('Booking Details:', bookingDetails);

        return bookingDetails;
    }


    async getAffiliateAccountValue() {
        const affiliateType = (await this.fetchBookingDetails.affiliateType.innerText()).trim();
        if (affiliateType === 'Loose Affiliate') {

            const looseAffiliateInfo = {
                looseAffiliateValue: await this.fetchBookingDetails.looseAffiliate.innerText(),
                looseAffiliateName: await this.affiliateAccount.looseAffiliateName.inputValue(),
                looseAffiliatePhone: await this.affiliateAccount.looseAffiliatePhone.inputValue(),
                looseAffiliateEmail: await this.affiliateAccount.looseAffiliateEmail.inputValue(),
            };

            console.log('looseAffiliateInfo:', looseAffiliateInfo);
            return looseAffiliateInfo;
        }

        const affiliateValue = await this.fetchBookingDetails.affiliate.innerText();
        console.log('affiliateValue:', affiliateValue);
        return {
            affiliateValue
        };
    }

    async getVehicleInfo() {
        const vehicleInfo = {
            vehicleType: await this.fetchBookingDetails.vehicleType.innerText(),
            vehicleMake: await this.fetchBookingDetails.vehicleMake.innerText(),
            vehicleModel: await this.fetchBookingDetails.vehicleModel.innerText(),
            vehicleYear: await this.fetchBookingDetails.vehicleYear.innerText(),
            vehicleColor: await this.fetchBookingDetails.vehicleColor.innerText(),
            licensePlate: await this.vehiclePreferences.licensePlate.inputValue(),
            seats: await this.vehiclePreferences.seats.inputValue(),
            cancellationPolicy: await this.fetchBookingDetails.cancellationPolicy.innerText(),
        };

        console.log('vehicleInfo:', vehicleInfo);
        return vehicleInfo;
    }
}