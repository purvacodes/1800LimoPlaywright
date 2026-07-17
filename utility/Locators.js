const fc = (name) => `[formcontrolname="${name}"]`;
const label = (text) => `//label[normalize-space()="${text}"]`;
const optionText = (text) => `//mat-option//span[contains(text(),"${text}")]`;
const optionValue = (value) => `//mat-option[@value="${value}"]`;
const inputValue = (value) => `input[value="${value}"]`;
const placeholder = (text) => `input[placeholder="${text}"]`;
const href = (path) => `a[href="${path}"]`;
const id = (value) => `#${value}`;
const matLabelContains = (text) => `//mat-label[contains(text(),"${text}")]`;

export const Locators = {
    signUpSignIn: {
        phoneInput: fc('phone')
    },

    bookingForm: {
        serviceType: fc('service_type'),

        oneWay: optionValue('one_way'),
        roundTrip: optionValue('round_trip'),
        charterTour: optionValue('charter_tour'),

        transferType: matLabelContains('Transfer Type'),

        cityToCity: optionText('City To City ?'),
        cityToAirport: optionText('City To Airport ?'),
        airportToCity: optionText('Airport To City ?'),
        airportToAirport: optionText('Airport To Airport ?'),
        airportToCruisePort: optionText('Airport To Cruise Port ?'),
        cityToCruisePort: optionText('City To Cruise Port ?'),
        cruisePortToAirport: optionText('Cruise Port To Airport ?'),
        cruisePortToCity: optionText('Cruise Port To City ?'),

        clientAccounts: {
            individual: label('Individual'),
            travelAgent: label('Travel Advisor'),
            travelAgentIndividual: inputValue('travel_individual'),
            travelAgentLooseCustomer: inputValue('travel_loose_customer'),
            looseCustomer: label('Loose Customer'),

            selectTravelAgentClient: fc('travel_client_id'),
            selectAccount: fc('acc_id'),
            selectRandom: 'div[role="option"]',
        },

        looseCustomer: {
            first_name: fc('first_name'),
            middle_name: fc('middle_name'),
            last_name: fc('last_name'),
            email: fc('email'),
            phone: fc('phone'),
            cardName: fc('name'),
            cardNumber: fc('card_number'),
            expMonth: fc('exp_month'),
            expYear: fc('exp_year'),
            cvv: fc('cvv')
        },

        passengerInfo: {
            passengerName: fc('passenger_name'),
            passengerEmail: fc('passenger_email'),
            passengerPhone: fc('passenger_cell'),
            totalPax: fc('total_passengers'),
            luggageCount: fc('luggage_count')
        },

        affiliate_type: {
            affiliate: label('Affiliate'),
            looseAffiliate: label('Loose Affiliate')
        },

        affiliateList: fc('affiliate_id'),
        looseAffiliateList: fc('loose_affiliate_id'),

        looseAffiliate: {
            looseAffiliateName: fc('loose_affiliate_name'),
            looseAffiliatePhone: fc('loose_affiliate_phone'),
            looseAffiliateEmail: fc('loose_affiliate_email')
        },

        vehiclePreference: {
            vehicleType: fc('vehicle_type'),
            vehicleMake: fc('vehicle_make'),
            vehicleModel: fc('vehicle_model'),
            vehicleYear: fc('vehicle_year'),
            vehicleColor: fc('vehicle_color'),
            licensePlate: fc('vehicle_license_plate'),
            seats: fc('vehicle_seats'),
            cancellationPolicy: fc('cancellation_hours')
        },

        bookingDetails: {
            meetGreet: fc('meet_greet_choices'),
            numberOfVehicles: placeholder('Number of Vehicles'),

            pickupDate: fc('pickup_date'),
            pickupTime: fc('pickup_time'),

            pickupAddress: fc('pickup'),
            dropoffAddress: fc('dropoff'),
            returnPickupAddress: fc('return_pickup'),
            returnDropoffAddress: fc('return_dropoff'),
            pickupAirport: fc('pickup_airport_option'),
            dropoffAirport: fc('dropoff_airport_option'),
            returnPickupAirport: fc('return_pickup_airport_option'),
            returnDropoffAirport: fc('return_dropoff_airport_option'),

            pickupAirline: fc('pickup_airline_option'),
            dropoffAirline: fc('dropoff_airline_option'),
            returnPickupAirline: fc('return_pickup_airline_option'),    
            returnDropoffAirline: fc('return_dropoff_airline_option'),

            pickupFlight: fc('pickup_flight'),
            dropoffFlight: fc('dropoff_flight'),
            returnPickupFlight: fc('return_pickup_flight'),
            returnDropoffFlight: fc('return_dropoff_flight'),

            originCity: fc('origin_airport_city'),
            destinationCity: fc('departing_airport_city'),
           
            bookingInstructions: fc('booking_instructions'),
            returnBookingInstructions: fc('return_booking_instructions'),         
            
            totalDistance:'h6:has-text("Total Distance:")',
            estimatedTime:'h6:has-text("Estimated Time:")'
        },

        rates: {
            rateCategory: id('RateFormItem-0'),
            rateBucket: id('RateFormSubItem-0')
        }
    },

    bookingActions: {
        adminCreateBooking: href('/admin/new-booking'),
        adminEditBooking: (id) => href(`/admin/new-booking?bookingId=${id}&updateType=edit`)
    }
};