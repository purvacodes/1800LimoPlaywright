import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../../../utility/ObjectFactory';

test('Create AirportToAirport with Individual associated with affiliate having Rates according to Distance', async ({ page }) => {
  test.setTimeout(100000);
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await page.waitForTimeout(2000);
  await objectFactory.bookingFormObj.selectBookingActionToPerform();
  await objectFactory.handlerObj.handleSpinner();
  await page.waitForTimeout(2000);
  await objectFactory.bookingFormObj.selectServiceType('oneWay');
  await objectFactory.bookingFormObj.selectTransferType('airportToAirport');
  // await objectFactory.bookingFormObj.selectClientAccountType('individual');
  // await objectFactory.bookingFormObj.selectIndividualClient('ananya 1800limo');
  // await page.waitForTimeout(3000);
  // await objectFactory.bookingFormObj.fillPaxDetails('Ananya-Pax', 'ananya-pax@test.com', '+919876543210', '5', '2');
  // await objectFactory.bookingFormObj.selectAffiliateType('affiliate');
  // await objectFactory.bookingFormObj.selectAffiliate('Automation FLEET');
  // await objectFactory.bookingFormObj.selectTravelDate();
  // await objectFactory.bookingFormObj.selectPickupTime();
  await objectFactory.bookingFormObj.selectPickupAirport('ORD');
  await objectFactory.bookingFormObj.selectPickupAirline('GB');
  await objectFactory.bookingFormObj.selectPickupFlight('GB98');
  await objectFactory.bookingFormObj.selectOriginCity('Chicago');
  await objectFactory.bookingFormObj.selectDropOffAirport('MDW');
  await objectFactory.bookingFormObj.selectDropOffAirline('AA');
  await objectFactory.bookingFormObj.selectDropOffFlight('AA98');
  

  await page.pause();
});
