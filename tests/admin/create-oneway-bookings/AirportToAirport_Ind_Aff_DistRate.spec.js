import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../../../utility/ObjectFactory';

test('Create AirportToAirport with Individual associated with affiliate having Rates according to Distance', async ({ page }) => {
  test.setTimeout(100000);
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await page.waitForTimeout(2000);
  await objectFactory.bookingFormObj.buildBooking({
    action: 'create',
    handler: objectFactory.handlerObj,
    serviceType: 'oneWay',
    transferType: 'airportToAirport',
    clientAccount: 'individual',
    clientName: 'ananya 1800limo',
    affiliate: {
      type: 'affiliate',
      affiliate: 'Automation FLEET'
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
  await page.pause();
});
