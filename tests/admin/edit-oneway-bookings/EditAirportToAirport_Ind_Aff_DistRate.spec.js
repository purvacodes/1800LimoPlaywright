import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../../../utility/ObjectFactory';

test('Create AirportToAirport with Individual associated with affiliate having Rates according to Distance', async ({ page }) => {
  test.setTimeout(100000);
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await page.waitForTimeout(2000);
  await objectFactory.buildBookingObj.buildBooking({
    action: 'edit',
    bookingNumber: '3216',
    handler: objectFactory.handlerObj,
    serviceType: 'oneWay',
    waitTime: 1500
  });

  await objectFactory.getBookingDetailsObj.getClientAccount();

  await page.pause();
});
