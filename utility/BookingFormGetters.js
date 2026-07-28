export class BookingFormGetters {
    constructor(page, locatorsObj) {
        this.page = page;
        this.locators = locatorsObj;
    }
    get bookingActions() {
        return {
            adminCreateBooking: this.page.locator(this.locators.bookingActions.adminCreateBooking),
            adminEditBooking: (id) => this.page.locator(this.locators.bookingActions.adminEditBooking(id)),
            adminRepeatBooking: (id) => this.page.locator(this.locators.bookingActions.adminRepeatBooking(id))
        };
    }
    get serviceType() {
        return {
            dropdown: this.page.locator(this.locators.bookingForm.serviceType),
            options: {
                oneWay: this.page.locator(this.locators.bookingForm.oneWay),
                roundTrip: this.page.locator(this.locators.bookingForm.roundTrip),
                charterTour: this.page.locator(this.locators.bookingForm.charterTour),
            }
        };
    }
    get transferType() {
        return {
            dropdown: this.page.locator(this.locators.bookingForm.transferType),
            options: {
                cityToCity: this.page.locator(this.locators.bookingForm.cityToCity),
                cityToAirport: this.page.locator(this.locators.bookingForm.cityToAirport),
                airportToCity: this.page.locator(this.locators.bookingForm.airportToCity),
                airportToAirport: this.page.locator(this.locators.bookingForm.airportToAirport),
                airportToCruisePort: this.page.locator(this.locators.bookingForm.airportToCruisePort),
                cityToCruisePort: this.page.locator(this.locators.bookingForm.cityToCruisePort),
                cruisePortToAirport: this.page.locator(this.locators.bookingForm.cruisePortToAirport),
                cruisePortToCity: this.page.locator(this.locators.bookingForm.cruisePortToCity),
            }
        };
    }

    get passengerInfo() {
        return {
            passengerName: this.page.locator(
                this.locators.bookingForm.passengerInfo.passengerName
            ),
            passengerEmail: this.page.locator(
                this.locators.bookingForm.passengerInfo.passengerEmail
            ),
            passengerPhone: this.page.locator(
                this.locators.bookingForm.passengerInfo.passengerPhone
            ),
            totalPax: this.page.locator(
                this.locators.bookingForm.passengerInfo.totalPax
            ),
            luggageCount: this.page.locator(
                this.locators.bookingForm.passengerInfo.luggageCount
            ),
        };
    }

    get clientAccounts() {
        return {
            dropdown: this.page.locator(
                this.locators.bookingForm.clientAccounts.selectAccount
            ),
            selectTravelAgentClient: this.page.locator(
                this.locators.bookingForm.clientAccounts.selectTravelAgentClient
            ),

            options: {
                individual: this.page.locator(this.locators.bookingForm.clientAccounts.individual),
                travelAgent: this.page.locator(this.locators.bookingForm.clientAccounts.travelAgent),
                looseCustomer: this.page.locator(this.locators.bookingForm.clientAccounts.looseCustomer),
                travelAgentIndividual: this.page.locator(this.locators.bookingForm.clientAccounts.travelAgentIndividual),
                travelAgentLooseCustomer: this.page.locator(this.locators.bookingForm.clientAccounts.travelAgentLooseCustomer),
            }
        };
    }

    get looseCustomer() {
        return {
            firstName: this.page.locator(this.locators.bookingForm.looseCustomer.first_name),
            middleName: this.page.locator(this.locators.bookingForm.looseCustomer.middle_name),
            lastName: this.page.locator(this.locators.bookingForm.looseCustomer.last_name),
            email: this.page.locator(this.locators.bookingForm.looseCustomer.email),
            phone: this.page.locator(this.locators.bookingForm.looseCustomer.phone),
            cardName: this.page.locator(this.locators.bookingForm.looseCustomer.cardName),
            cardNumber: this.page.locator(this.locators.bookingForm.looseCustomer.cardNumber),
            expMonth: this.page.locator(this.locators.bookingForm.looseCustomer.expMonth),
            expYear: this.page.locator(this.locators.bookingForm.looseCustomer.expYear),
            cvv: this.page.locator(this.locators.bookingForm.looseCustomer.cvv),
        };
    }


    get affiliate() {
        return {
            options: {
                affiliate: this.page.locator(this.locators.bookingForm.affiliate_type.affiliate),
                looseAffiliate: this.page.locator(this.locators.bookingForm.affiliate_type.looseAffiliate),
            },
            affiliateList: this.page.locator(this.locators.bookingForm.affiliateList),
            looseAffiliateList: this.page.locator(this.locators.bookingForm.looseAffiliateList),
        };
    }

    get looseAffiliate() {
        return {
            name: this.page.locator(this.locators.bookingForm.looseAffiliate.looseAffiliateName),
            phone: this.page.locator(this.locators.bookingForm.looseAffiliate.looseAffiliatePhone),
            email: this.page.locator(this.locators.bookingForm.looseAffiliate.looseAffiliateEmail),
        };
    }

    get bookingDetails() {
        return {
            meetGreet: this.page.locator(this.locators.bookingForm.bookingDetails.meetGreet),
            numberOfVehicles: this.page.locator(this.locators.bookingForm.bookingDetails.numberOfVehicles),

            pickupDate: this.page.locator(this.locators.bookingForm.bookingDetails.pickupDate),
            pickupTime: this.page.locator(this.locators.bookingForm.bookingDetails.pickupTime),

            pickupAddress: this.page.locator(this.locators.bookingForm.bookingDetails.pickupAddress),
            dropoffAddress: this.page.locator(this.locators.bookingForm.bookingDetails.dropoffAddress),
            returnPickupAddress: this.page.locator(this.locators.bookingForm.bookingDetails.returnPickupAddress),
            returnDropoffAddress: this.page.locator(this.locators.bookingForm.bookingDetails.returnDropoffAddress),

            pickupAirport: this.page.locator(this.locators.bookingForm.bookingDetails.pickupAirport),
            dropoffAirport: this.page.locator(this.locators.bookingForm.bookingDetails.dropoffAirport),
            returnPickupAirport: this.page.locator(this.locators.bookingForm.bookingDetails.returnPickupAirport),
            returnDropoffAirport: this.page.locator(this.locators.bookingForm.bookingDetails.returnDropoffAirport),

            pickupAirline: this.page.locator(this.locators.bookingForm.bookingDetails.pickupAirline),
            dropoffAirline: this.page.locator(this.locators.bookingForm.bookingDetails.dropoffAirline),
            returnPickupAirline: this.page.locator(this.locators.bookingForm.bookingDetails.returnPickupAirline),
            returnDropoffAirline: this.page.locator(this.locators.bookingForm.bookingDetails.returnDropoffAirline),

            pickupFlight: this.page.locator(this.locators.bookingForm.bookingDetails.pickupFlight),
            dropoffFlight: this.page.locator(this.locators.bookingForm.bookingDetails.dropoffFlight),
            returnPickupFlight: this.page.locator(this.locators.bookingForm.bookingDetails.returnPickupFlight),
            returnDropoffFlight: this.page.locator(this.locators.bookingForm.bookingDetails.returnDropoffFlight),

            originCity: this.page.locator(this.locators.bookingForm.bookingDetails.originCity),
            destinationCity: this.page.locator(this.locators.bookingForm.bookingDetails.destinationCity),
            bookingInstructions: this.page.locator(this.locators.bookingForm.bookingDetails.bookingInstructions),
            returnBookingInstructions: this.page.locator(this.locators.bookingForm.bookingDetails.returnBookingInstructions),
            totalDistance: this.page.locator(this.locators.bookingForm.bookingDetails.totalDistance),
            estimatedTime: this.page.locator(this.locators.bookingForm.bookingDetails.estimatedTime),
        };
    }

     get rates() {
        return {
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
        };
    }
    
}