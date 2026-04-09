import { spec } from "node:test/reporters";

export const Locators = {
  signUpSignIn: {
    phoneInput: '[formcontrolname="phone"]'
  },

  bookingForm: {
    serviceType: '[formcontrolname="service_type"]',
    oneWay: '//mat-option[@value="one_way"]',
    roundTrip: '//mat-option[@value="round_trip"]',
    charterTour: '//mat-option[@value="charter_tour"]',
    TransferType: '//mat-label[contains(text(),"Transfer Type")]',
    cityToCity: '//mat-select//span[contains(text(),"City To City ?")]',
    cityToAirport: '//mat-select//span[contains(text(),"City To Airport ?")]',
    airportToCity: '//mat-select//span[contains(text(),"Airport To City ?")]',
    airportToAirport: '//mat-select//span[contains(text(),"Airport To Airport ?")]',
    airportToCruisePort: '//mat-select//span[contains(text(),"Airport To Cruise Port ?")]',
    cityToCruisePort: '//mat-select//span[contains(text(),"City To Cruise Port ?")]',
    cruisePortToAirport: '//mat-select//span[contains(text(),"Cruise Port To Airport ?")]',
    cruisePortToCity: '//mat-select//span[contains(text(),"Cruise Port To City ?")]',
    clientAccounts: {
      individual: '//label[normalize-space()="Individual"]',
      travelAgent: '//label[normalize-space()="Travel Advisor"]',
      looseCustomer: '//label[normalize-space()="Loose Customer"]',
      selectAccount: '[formcontrolname="acc_id"]',
      selectRandom: 'div[role="option"]',
    },
    looseCustomer: {
      first_name: '[formcontrolname="first_name"]',
      middle_name: '[formcontrolname="middle_name"]',
      last_name: '[formcontrolname="last_name"]',
      email: '[formcontrolname="email"]',
      phone: '[formcontrolname="phone"]',
      cardName: '[formcontrolname="name"]',
      cardNumber: '[formcontrolname="card_number"]',
      expMonth: '[formcontrolname="exp_month"]',
      expYear: '[formcontrolname="exp_year"]',
      cvv: '[formcontrolname="cvv"]'
    },
    passengerInfo: {
      passengerName: '[formcontrolname="passenger_name"]',
      passengerEmail: '[formcontrolname="passenger_email"]',
      passengerPhone: '[formcontrolname="passenger_cell"]',
      totalPax: '[formcontrolname="total_passengers"]',
      luggageCount: '[formcontrolname="luggage_count"]'
    },
    affiliate_type: {
      affiliate: '//label[normalize-space()="Affiliate"]',
      looseAffiliate: '//label[normalize-space()="Loose Affiliate"]',
    },
    affiliateList: '[formcontrolname="affiliate_id"]',
    looseAffiliateList: '[formcontrolname="loose_affiliate_id"]',
    looseAffiliate: {
      looseAffiliateName: '[formcontrolname="loose_affiliate_name"]',
      looseAffiliatePhone: '[formcontrolname="loose_affiliate_phone"]',
      looseAffiliateEmail: '[formcontrolname="loose_affiliate_email"]',
    },
    vehiclePreference: {
      vehicleType: '[formcontrolname="vehicle_type"]',
      vehicleMake: '[formcontrolname="vehicle_model"]',
      vehicleModel: '[formcontrolname="vehicle_model"]',
      vehicleYear: '[formcontrolname="vehicle_year"]',
      vehicleColor: '[formcontrolname="vehicle_color"]',
      licensePlate: '[formcontrolname="vehicle_license_plate"]',
      seats: '[formcontrolname="vehicle_seats"]',
      cancellationPolicy: '[formcontrolname="cancellation_hours"]'
    },
    bookingDetails: {
      meetGreet:'[formcontrolname="meet_greet_choices"]',
      numberOfVehicles: 'input[placeholder="Number of Vehicles"]',
      pickupDate: '[formcontrolname="pickup_date"]',
      pickupTime: '[formcontrolname="pickup_time"]',
      pickup: '[formcontrolname="pickup"]',
      dropoff: '[formcontrolname="dropoff"]',
      specialInstructions: '[formcontrolname="booking_instructions"]', 
    },
    rates: {
      rateCategory: '#RateFormItem-0',
      rateBucket: 'RateFormSubItem-0'
    }
  }
};