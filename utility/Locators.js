const fc = (name) => `[formcontrolname="${name}"]`;
const label = (text) => `//label[normalize-space()="${text}"]`;
const optionText = (text) => `//mat-option//span[contains(text(),"${text}")]`;
const optionValue = (value) => `//mat-option[@value="${value}"]`;
const inputValue = (value) => `input[value="${value}"]`;
const placeholder = (text) => `input[placeholder="${text}"]`;
const href = (path) => `//a[@href="${path}"]`;
const id = (value) => `#${value}`;
const matLabelContains = (text) => `//mat-label[normalize-space()="${text}"]/ancestor::mat-form-field[1]//mat-select`;

const btn = (text) => `//button[normalize-space()="${text}"]`;
const rateInput = (text) =>
    `//mat-label[normalize-space()="${text}"]` +
    `/ancestor::mat-form-field//input`;

const rateAmount = (text) =>
    `//mat-label[normalize-space()="${text}"]` +
    `/ancestor::div[contains(@class,"rates-row")]` +
    `//div[contains(@class,"rate-amount")]//p`;

const distribution = (text) =>
    `//p[contains(normalize-space(), "${text}")]` +
    `/ancestor::div[contains(@class, "row")]` +
    `//div[contains(@class, "col-md-4")]`;

const previewScreen = (text) =>
    `//span[normalize-space()="${text}"]` +
    `/ancestor::div[contains(@class,'row')]` +
    `//span[contains(@class,'preview-output-field')]`;

const rateToggle = (text) =>
    `//mat-label[normalize-space()="${text}"]` +
    `/ancestor::div[contains(@class,"rates-row")]` +
    `//mat-slide-toggle`;

export const Locators = {
    signUpSignIn: {
        phoneInput: fc('phone')
    },

    buildbookingform: {
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
            selectAccount: fc('acc_id'),
            individual: inputValue('individual'),
            travelAgent: inputValue('travel_planner'),
            travelAgentIndividual: inputValue('travel_individual'),
            travelAgentLooseCustomer: inputValue('travel_loose_customer'),
            looseCustomer: inputValue('loose_customer'),

            selectTravelAgentClient: fc('travel_client_id'),
            selectRandom: 'div[role="option"]',
        },

        looseCustomer: {
            first_name: fc('first_name'),
            middle_name: fc('middle_name'),
            last_name: fc('last_name'),
            email: fc('email'),
            phone: fc('phone'),
            address: placeholder('Type your address'),
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

        affiliateAccount: {
            selectAffiliate: label('Affiliate'),
            selectLooseAffiliate: label('Loose Affiliate'),
            affiliateList: fc('affiliate_id'),
            looseAffiliateList: fc('loose_affiliate_id'),
            looseAffiliateName: fc('lose_affiliate_name'),
            looseAffiliatePhone: fc('lose_affiliate_phone'),
            looseAffiliateEmail: fc('lose_affiliate_email')
        },

        vehiclePreferences: {
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
            //numberOfVehicles: placeholder('Number of Vehicles'),
            numberOfVehicles: `input[placholder="Number of Vehicles"]`,

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

            totalDistance: '.bk-route-panel__stat:has(i.bi-signpost-2)',
            estimatedTime: '.bk-route-panel__stat:has(i.bi-clock)',
            browseVehicles: btn('Browse vehicles'),
            assignManually: btn('Assign manually')
        }

    },

    fetchBookingDetails: {
        serviceTypeValue: fc('service_type') + ' .mat-mdc-select-min-line',
        transferTypeValue: matLabelContains('Transfer Type') + '//span[contains(@class,"mat-mdc-select-min-line")]',
        clientAccountType: fc('account_type') + ' ' + 'input[type="radio"]:checked',
        travelClientType: fc('travel_client_acc') + ' ' + 'input[type="radio"]:checked',
        clientAccountValue: fc('acc_id') + ' ' + '.ng-value .ng-value-label',
        travelClientValue: fc('travel_client_id') + ' ' + '.ng-value .ng-value-label',
        affiliateType: fc('affiliate_type') + ' ' + 'mat-radio-button.mat-mdc-radio-checked',
        affiliateValue: fc('affiliate_id') + ' ' + '.ng-value .ng-value-label',
        looseAffiliateValue: fc('loose_affiliate_id') + ' ' + '.ng-value .ng-value-label',
        vehicleTypeValue: fc('vehicle_type') + ' .ng-value',
        vehicleMakeValue: fc('vehicle_make') + ' .ng-value',
        vehicleModelValue: fc('vehicle_model') + ' .ng-value',
        vehicleYearValue: fc('vehicle_year') + ' .ng-value',
        vehicleColorValue: fc('vehicle_color') + ' .ng-value',
        cancellationPolicyValue: fc('cancellation_hours') + ' .ng-value',
    },

    bookingActions: {
        search: placeholder('Search by booking number, status, name, cell phone, vehicle type'),
        adminCreateBooking: href('/admin/new-booking-v2'),
        adminEditBooking: (id) => href(`/admin/new-booking-v2?bookingId=${id}&updateType=edit`),
        adminRepeatBooking: (id) => href(`/admin/new-booking-v2?bookingId=${id}&updateType=repeat`),
        previewBooking: btn('Preview'),
        savePreview: btn('Save')
    },

    previewBookingInfo: {
        adminShare: previewScreen('Admin Share'),
        TotalClientCost: previewScreen('Total Client Cost'),
        AffiliatePayout: previewScreen('Affliate Payout'),
    },

    rates: {

        rateCategory: id('RateFormItem-0'),
        rateBucket: id('RateFormSubItem-0'),

        distribution: {
            subTotal: distribution('Sub Total'),
            grandTotal: distribution('Grand Total'),
            admin: distribution('Admin Share'),
            farmout: distribution('Farm out Income'),
            ta: distribution('Travel Advisor Share')
        },

        vehicleBaseRates: {
            section: 'h5:has-text("Vehicle Base Rates")',

            baseRate: rateInput('Base Rate'),
            stops: rateInput('Stops'),
            wait: rateInput('Wait'),
            earlyAmLatePmHoliday: rateInput('Early Am / Late Pm / Holiday Charge'),

            baseRateAmount: rateAmount('Base Rate'),
            stopsAmount: rateAmount('Stops'),
            waitAmount: rateAmount('Wait'),
            earlyAmLatePmHolidayAmount: rateAmount('Early Am / Late Pm / Holiday Charge')
        },

        tollsTaxes: {
            section: 'h5:has-text("Tolls/Taxes")',

            airportArrivalTax: rateInput('Airport Arrival Tax'),
            airportDepartureTax: rateInput('Airport Departure Tax'),
            seaPortTax: rateInput('Sea Port Tax'),
            cityCongestionTax: rateInput('City Congestion Tax'),
            cityTax: rateInput('City Tax'),
            stateTax: rateInput('State Tax'),
            vatTax: rateInput('Vat Tax'),
            workmanCompTax: rateInput('Workman Comp Tax'),
            otherTransportationTax: rateInput('Other Transportation Tax'),
            tolls: rateInput('Tolls'),

            airportArrivalTaxAmount: rateAmount('Airport Arrival Tax'),
            airportDepartureTaxAmount: rateAmount('Airport Departure Tax'),
            seaPortTaxAmount: rateAmount('Sea Port Tax'),
            cityCongestionTaxAmount: rateAmount('City Congestion Tax'),
            cityTaxAmount: rateAmount('City Tax'),
            stateTaxAmount: rateAmount('State Tax'),
            vatTaxAmount: rateAmount('Vat Tax'),
            workmanCompTaxAmount: rateAmount('Workman Comp Tax'),
            otherTransportationTaxAmount: rateAmount('Other Transportation Tax'),
            tollsAmount: rateAmount('Tolls')
        },

        extraChargeAmenities: {
            section: 'h5:has-text("Extra Charge Amenities")',

            babySeat: rateInput('Baby Seat'),
            boosterSeat: rateInput('Booster Seat'),
            baggageMeetDomestic: rateInput('Baggage Meet (Dom)'),
            baggageMeetInternational: rateInput('Baggage Meet (Int)'),
            bikeRack: rateInput('Bike Rack'),
            leiGreetingHawaii: rateInput('Lei Greeting – Hawaii'),
            securityGuard: rateInput('Security / Guard'),
            perDiem: rateInput('Per Diem'),
            tourGuide: rateInput('Tour Guide'),
            luggageTrailer: rateInput('Luggage Trailer'),
            weddingPackage: rateInput('Wedding Package'),
            redCarpet: rateInput('Red Carpet'),
            skis: rateInput('Skis'),
            golfBags: rateInput('Golf Bags'),

            babySeatAmount: rateAmount('Baby Seat'),
            boosterSeatAmount: rateAmount('Booster Seat'),
            baggageMeetDomesticAmount: rateAmount('Baggage Meet (Dom)'),
            baggageMeetInternationalAmount: rateAmount('Baggage Meet (Int)'),
            bikeRackAmount: rateAmount('Bike Rack'),
            leiGreetingHawaiiAmount: rateAmount('Lei Greeting – Hawaii'),
            securityGuardAmount: rateAmount('Security / Guard'),
            perDiemAmount: rateAmount('Per Diem'),
            tourGuideAmount: rateAmount('Tour Guide'),
            luggageTrailerAmount: rateAmount('Luggage Trailer'),
            weddingPackageAmount: rateAmount('Wedding Package'),
            redCarpetAmount: rateAmount('Red Carpet'),
            skisAmount: rateAmount('Skis'),
            golfBagsAmount: rateAmount('Golf Bags')
        },

        additionalMiscCharges: {
            section: 'h5:has-text("Additional Misc. Charges")',

            extraGratuity: rateInput('Extra Gratuity'),
            parking: rateInput('Parking'),
            barStock: rateInput('Bar Stock'),
            miscCharges: rateInput('Misc Charges'),

            extraGratuityAmount: rateAmount('Extra Gratuity'),
            parkingAmount: rateAmount('Parking'),
            barStockAmount: rateAmount('Bar Stock'),
            miscChargesAmount: rateAmount('Misc Charges')
        },

        toggles: {
            airportArrivalTax: rateToggle('Airport Arrival Tax'),
            airportDepartureTax: rateToggle('Airport Departure Tax'),
            seaPortTax: rateToggle('Sea Port Tax'),
            cityCongestionTax: rateToggle('City Congestion Tax'),
            cityTax: rateToggle('City Tax'),
            stateTax: rateToggle('State Tax'),
            vatTax: rateToggle('Vat Tax'),
            workmanCompTax: rateToggle('Workman Comp Tax'),
            otherTransportationTax: rateToggle('Other Transportation Tax'),
            tolls: rateToggle('Tolls')
        }
    }
}; 