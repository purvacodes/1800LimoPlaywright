import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../../../utility/ObjectFactory';

test('Create AirportToAirport with Individual associated with affiliate having Rates according to Distance', async ({ page }) => {
  test.setTimeout(100000);
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await page.waitForTimeout(2000);
  await objectFactory.bookingFormObj.adminEditBooking(3091);
  await objectFactory.handlerObj.handleSpinner();
  await page.waitForTimeout(5000);
  await objectFactory.bookingFormObj.selectServiceType('oneWay');
  await objectFactory.bookingFormObj.selectTransferType('airportToAirport');
  await objectFactory.bookingFormObj.selectClientAccount('individual', 'ananya 1800limo');
  await page.waitForTimeout(3000);
  // await objectFactory.bookingFormObj.fillPaxDetails('Ananya-Pax', 'ananya-pax@test.com', '+919876543210', '5', '2');
  // await objectFactory.bookingFormObj.fillBookingDetailsByTransferType('airportToAirport', 'ORD', 'GB', 'GB98', 'Chicago', 'MDW', 'AA', 'AA98');
  // await objectFactory.bookingFormObj.assignAffiliateManually('affiliate', 'Automation FLEET');
  await objectFactory.rateDistributionObj.getBaseRate();
  await page.pause();
});
