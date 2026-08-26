export class BookingFormGetters {
    constructor(page, locatorsObj) {
        this.page = page;
        this.locators = locatorsObj;
    }
    get bookingActions() {
        return {
            search: this.page.locator(this.locators.bookingActions.search),
            adminCreateBooking: this.page.locator(this.locators.bookingActions.adminCreateBooking),
            adminEditBooking: (id) => this.page.locator(this.locators.bookingActions.adminEditBooking(id)),
            adminRepeatBooking: (id) => this.page.locator(this.locators.bookingActions.adminRepeatBooking(id)),
            previewBooking: this.page.locator(this.locators.bookingActions.previewBooking),
            savePreview: this.page.locator(this.locators.bookingActions.savePreview)
        };
    }

    get previewBookingInfo() {
        return {
            baseRate: this.page.locator(this.locators.previewBookingInfo.baseRate),
            adminShare: this.page.locator(this.locators.previewBookingInfo.adminShare)
        };
    }

    get serviceType() {
        return {
            dropdown: this.page.locator(this.locators.buildbookingform.serviceType),
            options: {
                oneWay: this.page.locator(this.locators.buildbookingform.oneWay),
                roundTrip: this.page.locator(this.locators.buildbookingform.roundTrip),
                charterTour: this.page.locator(this.locators.buildbookingform.charterTour),
            }
        };
    }
    get transferType() {
        return {
            dropdown: this.page.locator(this.locators.buildbookingform.transferType),
            options: {
                cityToCity: this.page.locator(this.locators.buildbookingform.cityToCity),
                cityToAirport: this.page.locator(this.locators.buildbookingform.cityToAirport),
                airportToCity: this.page.locator(this.locators.buildbookingform.airportToCity),
                airportToAirport: this.page.locator(this.locators.buildbookingform.airportToAirport),
                airportToCruisePort: this.page.locator(this.locators.buildbookingform.airportToCruisePort),
                cityToCruisePort: this.page.locator(this.locators.buildbookingform.cityToCruisePort),
                cruisePortToAirport: this.page.locator(this.locators.buildbookingform.cruisePortToAirport),
                cruisePortToCity: this.page.locator(this.locators.buildbookingform.cruisePortToCity),
            }
        };
    }

    get passengerInfo() {
        return {
            passengerName: this.page.locator(
                this.locators.buildbookingform.passengerInfo.passengerName
            ),
            passengerEmail: this.page.locator(
                this.locators.buildbookingform.passengerInfo.passengerEmail
            ),
            passengerPhone: this.page.locator(
                this.locators.buildbookingform.passengerInfo.passengerPhone
            ),
            totalPax: this.page.locator(
                this.locators.buildbookingform.passengerInfo.totalPax
            ),
            luggageCount: this.page.locator(
                this.locators.buildbookingform.passengerInfo.luggageCount
            ),
        };
    }

    get clientAccounts() {
        return {
            dropdown: this.page.locator(
                this.locators.buildbookingform.clientAccounts.selectAccount
            ),
            selectTravelAgentClient: this.page.locator(
                this.locators.buildbookingform.clientAccounts.selectTravelAgentClient
            ),
            options: {
                individual: this.page.locator(this.locators.buildbookingform.clientAccounts.individual),
                travelAgent: this.page.locator(this.locators.buildbookingform.clientAccounts.travelAgent),
                looseCustomer: this.page.locator(this.locators.buildbookingform.clientAccounts.looseCustomer),
                travelAgentIndividual: this.page.locator(this.locators.buildbookingform.clientAccounts.travelAgentIndividual),
                travelAgentLooseCustomer: this.page.locator(this.locators.buildbookingform.clientAccounts.travelAgentLooseCustomer),
            }
        };
    }

    get looseCustomer() {
        return {
            firstName: this.page.locator(this.locators.buildbookingform.looseCustomer.first_name),
            middleName: this.page.locator(this.locators.buildbookingform.looseCustomer.middle_name),
            lastName: this.page.locator(this.locators.buildbookingform.looseCustomer.last_name),
            email: this.page.locator(this.locators.buildbookingform.looseCustomer.email),
            phone: this.page.locator(this.locators.buildbookingform.looseCustomer.phone),
            address: this.page.locator(this.locators.buildbookingform.looseCustomer.address),
            cardName: this.page.locator(this.locators.buildbookingform.looseCustomer.cardName),
            cardNumber: this.page.locator(this.locators.buildbookingform.looseCustomer.cardNumber),
            expMonth: this.page.locator(this.locators.buildbookingform.looseCustomer.expMonth),
            expYear: this.page.locator(this.locators.buildbookingform.looseCustomer.expYear),
            cvv: this.page.locator(this.locators.buildbookingform.looseCustomer.cvv),
        };
    }

    get affiliateAccount() {
        return {
            options: {
                affiliate: this.page.locator(this.locators.buildbookingform.affiliateAccount.selectAffiliate),
                looseAffiliate: this.page.locator(this.locators.buildbookingform.affiliateAccount.selectLooseAffiliate),
            },
            affiliateList: this.page.locator(this.locators.buildbookingform.affiliateAccount.affiliateList),
            looseAffiliateList: this.page.locator(this.locators.buildbookingform.affiliateAccount.looseAffiliateList),
            looseAffiliateName: this.page.locator(this.locators.buildbookingform.affiliateAccount.looseAffiliateName),
            looseAffiliatePhone: this.page.locator(this.locators.buildbookingform.affiliateAccount.looseAffiliatePhone),
            looseAffiliateEmail: this.page.locator(this.locators.buildbookingform.affiliateAccount.looseAffiliateEmail),
        };
    }

    get bookingDetails() {
        return {

            meetGreet: this.page.locator(this.locators.buildbookingform.bookingDetails.meetGreet),
            numberOfVehicles: this.page.locator(this.locators.buildbookingform.bookingDetails.numberOfVehicles),

            pickupDate: this.page.locator(this.locators.buildbookingform.bookingDetails.pickupDate),
            pickupTime: this.page.locator(this.locators.buildbookingform.bookingDetails.pickupTime),

            pickupAddress: this.page.locator(this.locators.buildbookingform.bookingDetails.pickupAddress),
            dropoffAddress: this.page.locator(this.locators.buildbookingform.bookingDetails.dropoffAddress),
            returnPickupAddress: this.page.locator(this.locators.buildbookingform.bookingDetails.returnPickupAddress),
            returnDropoffAddress: this.page.locator(this.locators.buildbookingform.bookingDetails.returnDropoffAddress),

            pickupAirport: this.page.locator(this.locators.buildbookingform.bookingDetails.pickupAirport),
            dropoffAirport: this.page.locator(this.locators.buildbookingform.bookingDetails.dropoffAirport),
            returnPickupAirport: this.page.locator(this.locators.buildbookingform.bookingDetails.returnPickupAirport),
            returnDropoffAirport: this.page.locator(this.locators.buildbookingform.bookingDetails.returnDropoffAirport),

            pickupAirline: this.page.locator(this.locators.buildbookingform.bookingDetails.pickupAirline),
            dropoffAirline: this.page.locator(this.locators.buildbookingform.bookingDetails.dropoffAirline),
            returnPickupAirline: this.page.locator(this.locators.buildbookingform.bookingDetails.returnPickupAirline),
            returnDropoffAirline: this.page.locator(this.locators.buildbookingform.bookingDetails.returnDropoffAirline),

            pickupFlight: this.page.locator(this.locators.buildbookingform.bookingDetails.pickupFlight),
            dropoffFlight: this.page.locator(this.locators.buildbookingform.bookingDetails.dropoffFlight),
            returnPickupFlight: this.page.locator(this.locators.buildbookingform.bookingDetails.returnPickupFlight),
            returnDropoffFlight: this.page.locator(this.locators.buildbookingform.bookingDetails.returnDropoffFlight),

            originCity: this.page.locator(this.locators.buildbookingform.bookingDetails.originCity),
            destinationCity: this.page.locator(this.locators.buildbookingform.bookingDetails.destinationCity),
            bookingInstructions: this.page.locator(this.locators.buildbookingform.bookingDetails.bookingInstructions),
            returnBookingInstructions: this.page.locator(this.locators.buildbookingform.bookingDetails.returnBookingInstructions),
            totalDistance: this.page.locator(this.locators.buildbookingform.bookingDetails.totalDistance),
            estimatedTime: this.page.locator(this.locators.buildbookingform.bookingDetails.estimatedTime),
            browseVehicles: this.page.locator(this.locators.buildbookingform.bookingDetails.browseVehicles),
            assignManually: this.page.locator(this.locators.buildbookingform.bookingDetails.assignManually),
        };
    }

    get vehiclePreferences() {
        return {
            vehicleType: this.page.locator(this.locators.buildbookingform.vehiclePreferences.vehicleType),
            vehicleMake: this.page.locator(this.locators.buildbookingform.vehiclePreferences.vehicleMake),
            vehicleModel: this.page.locator(this.locators.buildbookingform.vehiclePreferences.vehicleModel),
            vehicleYear: this.page.locator(this.locators.buildbookingform.vehiclePreferences.vehicleYear),
            vehicleColor: this.page.locator(this.locators.buildbookingform.vehiclePreferences.vehicleColor),
            licensePlate: this.page.locator(this.locators.buildbookingform.vehiclePreferences.licensePlate),
            seats: this.page.locator(this.locators.buildbookingform.vehiclePreferences.seats),
            cancellationPolicy: this.page.locator(this.locators.buildbookingform.vehiclePreferences.cancellationPolicy),
        };
    }

    get rates() {
        return {
            rateCategory: this.page.locator(this.locators.rates.rateCategory),
            rateBucket: this.page.locator(this.locators.rates.rateBucket),
            vehicleBaseRates: {
                section: this.page.locator(this.locators.rates.vehicleBaseRates.section),
                baseRate: this.page.locator(this.locators.rates.vehicleBaseRates.baseRate),
                stops: this.page.locator(this.locators.rates.vehicleBaseRates.stops),
                wait: this.page.locator(this.locators.rates.vehicleBaseRates.wait),
                earlyAmLatePmHoliday: this.page.locator(this.locators.rates.vehicleBaseRates.earlyAmLatePmHoliday),
                baseRateAmount: this.page.locator(this.locators.rates.vehicleBaseRates.baseRateAmount),
                stopsAmount: this.page.locator(this.locators.rates.vehicleBaseRates.stopsAmount),
                waitAmount: this.page.locator(this.locators.rates.vehicleBaseRates.waitAmount),
                earlyAmLatePmHolidayAmount: this.page.locator(this.locators.rates.vehicleBaseRates.earlyAmLatePmHolidayAmount),
            },
            tollsTaxes: {
                section: this.page.locator(this.locators.rates.tollsTaxes.section),
                airportArrivalTax: this.page.locator(this.locators.rates.tollsTaxes.airportArrivalTax),
                airportDepartureTax: this.page.locator(this.locators.rates.tollsTaxes.airportDepartureTax),
                seaPortTax: this.page.locator(this.locators.rates.tollsTaxes.seaPortTax),
                cityCongestionTax: this.page.locator(this.locators.rates.tollsTaxes.cityCongestionTax),
                cityTax: this.page.locator(this.locators.rates.tollsTaxes.cityTax),
                stateTax: this.page.locator(this.locators.rates.tollsTaxes.stateTax),
                vatTax: this.page.locator(this.locators.rates.tollsTaxes.vatTax),
                workmanCompTax: this.page.locator(this.locators.rates.tollsTaxes.workmanCompTax),
                otherTransportationTax: this.page.locator(this.locators.rates.tollsTaxes.otherTransportationTax),
                tolls: this.page.locator(this.locators.rates.tollsTaxes.tolls),
                airportArrivalTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.airportArrivalTaxAmount),
                airportDepartureTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.airportDepartureTaxAmount),
                seaPortTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.seaPortTaxAmount),
                cityCongestionTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.cityCongestionTaxAmount),
                cityTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.cityTaxAmount),
                stateTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.stateTaxAmount),
                vatTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.vatTaxAmount),
                workmanCompTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.workmanCompTaxAmount),
                otherTransportationTaxAmount: this.page.locator(this.locators.rates.tollsTaxes.otherTransportationTaxAmount),
                tollsAmount: this.page.locator(this.locators.rates.tollsTaxes.tollsAmount),
            },
            extraChargeAmenities: {
                section: this.page.locator(this.locators.rates.extraChargeAmenities.section),
                babySeat: this.page.locator(this.locators.rates.extraChargeAmenities.babySeat),
                boosterSeat: this.page.locator(this.locators.rates.extraChargeAmenities.boosterSeat),
                baggageMeetDomestic: this.page.locator(this.locators.rates.extraChargeAmenities.baggageMeetDomestic),
                baggageMeetInternational: this.page.locator(this.locators.rates.extraChargeAmenities.baggageMeetInternational),
                bikeRack: this.page.locator(this.locators.rates.extraChargeAmenities.bikeRack),
                leiGreetingHawaii: this.page.locator(this.locators.rates.extraChargeAmenities.leiGreetingHawaii),
                securityGuard: this.page.locator(this.locators.rates.extraChargeAmenities.securityGuard),
                perDiem: this.page.locator(this.locators.rates.extraChargeAmenities.perDiem),
                tourGuide: this.page.locator(this.locators.rates.extraChargeAmenities.tourGuide),
                luggageTrailer: this.page.locator(this.locators.rates.extraChargeAmenities.luggageTrailer),
                weddingPackage: this.page.locator(this.locators.rates.extraChargeAmenities.weddingPackage),
                redCarpet: this.page.locator(this.locators.rates.extraChargeAmenities.redCarpet),
                skis: this.page.locator(this.locators.rates.extraChargeAmenities.skis),
                golfBags: this.page.locator(this.locators.rates.extraChargeAmenities.golfBags),
                babySeatAmount: this.page.locator(this.locators.rates.extraChargeAmenities.babySeatAmount),
                boosterSeatAmount: this.page.locator(this.locators.rates.extraChargeAmenities.boosterSeatAmount),
                baggageMeetDomesticAmount: this.page.locator(this.locators.rates.extraChargeAmenities.baggageMeetDomesticAmount),
                baggageMeetInternationalAmount: this.page.locator(this.locators.rates.extraChargeAmenities.baggageMeetInternationalAmount),
                bikeRackAmount: this.page.locator(this.locators.rates.extraChargeAmenities.bikeRackAmount),
                leiGreetingHawaiiAmount: this.page.locator(this.locators.rates.extraChargeAmenities.leiGreetingHawaiiAmount),
                securityGuardAmount: this.page.locator(this.locators.rates.extraChargeAmenities.securityGuardAmount),
                perDiemAmount: this.page.locator(this.locators.rates.extraChargeAmenities.perDiemAmount),
                tourGuideAmount: this.page.locator(this.locators.rates.extraChargeAmenities.tourGuideAmount),
                luggageTrailerAmount: this.page.locator(this.locators.rates.extraChargeAmenities.luggageTrailerAmount),
                weddingPackageAmount: this.page.locator(this.locators.rates.extraChargeAmenities.weddingPackageAmount),
                redCarpetAmount: this.page.locator(this.locators.rates.extraChargeAmenities.redCarpetAmount),
                skisAmount: this.page.locator(this.locators.rates.extraChargeAmenities.skisAmount),
                golfBagsAmount: this.page.locator(this.locators.rates.extraChargeAmenities.golfBagsAmount),
            },
            additionalMiscCharges: {
                section: this.page.locator(this.locators.rates.additionalMiscCharges.section),
                extraGratuity: this.page.locator(this.locators.rates.additionalMiscCharges.extraGratuity),
                parking: this.page.locator(this.locators.rates.additionalMiscCharges.parking),
                barStock: this.page.locator(this.locators.rates.additionalMiscCharges.barStock),
                miscCharges: this.page.locator(this.locators.rates.additionalMiscCharges.miscCharges),
                extraGratuityAmount: this.page.locator(this.locators.rates.additionalMiscCharges.extraGratuityAmount),
                parkingAmount: this.page.locator(this.locators.rates.additionalMiscCharges.parkingAmount),
                barStockAmount: this.page.locator(this.locators.rates.additionalMiscCharges.barStockAmount),
                miscChargesAmount: this.page.locator(this.locators.rates.additionalMiscCharges.miscChargesAmount),
            },
            toggles: {
                airportArrivalTax: this.page.locator(this.locators.rates.toggles.airportArrivalTax),
                airportDepartureTax: this.page.locator(this.locators.rates.toggles.airportDepartureTax),
                seaPortTax: this.page.locator(this.locators.rates.toggles.seaPortTax),
                cityCongestionTax: this.page.locator(this.locators.rates.toggles.cityCongestionTax),
                cityTax: this.page.locator(this.locators.rates.toggles.cityTax),
                stateTax: this.page.locator(this.locators.rates.toggles.stateTax),
                vatTax: this.page.locator(this.locators.rates.toggles.vatTax),
                workmanCompTax: this.page.locator(this.locators.rates.toggles.workmanCompTax),
                otherTransportationTax: this.page.locator(this.locators.rates.toggles.otherTransportationTax),
                tolls: this.page.locator(this.locators.rates.toggles.tolls),
            },
            getDistribution: {
                subTotal: this.page.locator(this.locators.rates.distribution.subTotal),
                grandTotal: this.page.locator(this.locators.rates.distribution.grandTotal),
                adminShare: this.page.locator(this.locators.rates.distribution.admin),
                farmoutShare: this.page.locator(this.locators.rates.distribution.farmout),
                taShare: this.page.locator(this.locators.rates.distribution.ta),
            }
        };
    }

    get fetchBookingDetails() {
        return {
            serviceType: this.page.locator(this.locators.fetchBookingDetails.serviceTypeValue),
            transferType: this.page.locator(this.locators.fetchBookingDetails.transferTypeValue),
            clientAccountType: this.page.locator(this.locators.fetchBookingDetails.clientAccountType),
            clientAccount: this.page.locator(this.locators.fetchBookingDetails.clientAccountValue),
            travelClientType: this.page.locator(this.locators.fetchBookingDetails.travelClientType),
            travelClient: this.page.locator(this.locators.fetchBookingDetails.travelClientValue),
            affiliateType: this.page.locator(this.locators.fetchBookingDetails.affiliateType),
            affiliate: this.page.locator(this.locators.fetchBookingDetails.affiliateValue),
            looseAffiliate: this.page.locator(this.locators.fetchBookingDetails.looseAffiliateValue),
            vehicleType: this.page.locator(this.locators.fetchBookingDetails.vehicleTypeValue),
            vehicleMake: this.page.locator(this.locators.fetchBookingDetails.vehicleMakeValue),
            vehicleModel: this.page.locator(this.locators.fetchBookingDetails.vehicleModelValue),
            vehicleYear: this.page.locator(this.locators.fetchBookingDetails.vehicleYearValue),
            vehicleColor: this.page.locator(this.locators.fetchBookingDetails.vehicleColorValue),
            cancellationPolicy: this.page.locator(this.locators.fetchBookingDetails.cancellationPolicyValue),
        };
    }
}