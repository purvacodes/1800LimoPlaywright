export class BookingFormGetters {
    constructor(page, locatorsObj) {
        this.page = page;
        this.locators = locatorsObj;
    }
    get bookingAction() {
        return this.page.locator(this.locators.bookingActions.adminCreateBooking);
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
}