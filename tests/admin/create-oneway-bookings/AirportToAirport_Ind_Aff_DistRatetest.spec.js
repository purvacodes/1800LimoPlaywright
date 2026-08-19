import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../../../utility/ObjectFactory';

test('Create AirportToAirport with Individual associated with affiliate having Rates according to Distance', async ({ page }) => {
  test.setTimeout(100000);
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await page.waitForTimeout(2000);
  await objectFactory.buildBookingObj.buildBooking({
    bookingAction: 'edit',
    bookingNumber: '3216',
    
    serviceType: 'oneWay',
    transferType: 'airportToCity',
    clientAccount: 'individual',
    clientName: 'ananya 1800limo',
    // passengerInfo: {
    //   name: 'Ananya-Pax',
    //   email: 'ananya-pax@test.com',
    //   phone: '+919876543210',
    //   totalPax: '5',
    //   luggageCount: '2'
    // },
    // bookingDetails: {
    //   pickupAirport: 'ORD',
    //   pickupAirline: 'AA',
    //   pickupFlight: 'AA98',
    //   originCity: 'Chicago',
    //   dropoffAddress: 'Downtown Chicago'
    // },
    waitTime: 1500
  });
  await objectFactory.handlerObj.handleSpinner();
  await page.waitForTimeout(5000);
  // await objectFactory.buildBookingObj.fillPaxDetails('Ananya-Pax', 'ananya-pax@test.com', '+919876543210', '5', '2');
  // await objectFactory.buildBookingObj.fillBookingDetailsByTransferType('airportToAirport', 'ORD', 'GB', 'GB98', 'Chicago', 'MDW', 'AA', 'AA98');
  // await objectFactory.buildBookingObj.assignAffiliateManually('affiliate', 'Automation FLEET');
 await objectFactory.rateDistributionObj.calculateRateDistribution({
        thirdPartyShare: "farmout",
        tripType: "oneWay",
        minRateApplies: false,
        hours: 1,
        vehicles: 1
    });
  await page.pause();
});
