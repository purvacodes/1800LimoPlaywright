import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../../../utility/ObjectFactory';

test('Create AirportToAirport with Individual associated with affiliate having Rates according to Distance', async ({ page }) => {
  test.setTimeout(100000);
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await page.waitForTimeout(2000);
  await objectFactory.buildBookingObj.buildBooking({
    action: 'create',
    handler: objectFactory.handlerObj,
    serviceType: 'oneWay',
    transferType: 'airportToCity',
    clientAccount: 'individual',
    clientName: 'ananya 1800limo',
      bookingDetails: {
      pickupAirport: 'ORD',
      pickupAirline: 'AA',
      pickupFlight: 'AA98',
      originCity: 'Chicago',
      dropoffAddress: 'Downtown Chicago'
    },
    affiliate: {
      type: 'affiliate',
      affiliate: 'AutomatedWithPlaywright'
    },
    waitTime: 1500
  });
 await objectFactory.rateDistributionObj.calculateRateDistribution({
        bookingType: "Normal",
        tripType: "oneWay",
        minRateApplies: false,
        hours: 1,
        vehicles: 1
    });
  await objectFactory.buildBookingObj.getPreviewBookingDetails();
  await page.pause();
});
