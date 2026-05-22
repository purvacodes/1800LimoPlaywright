import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../utility/ObjectFactory';

test('Admin login', async ({ page }) => {
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await objectFactory.bookingFormObj.selectBookingActionToPerform();
  await objectFactory.handlerObj.handleSpinner();
  await objectFactory.bookingFormObj.selectServiceType('oneWay');
  await objectFactory.bookingFormObj.selectTransferType('cityToAirport');
  await objectFactory.bookingFormObj.selectClientAccountType('individual');
  await objectFactory.bookingFormObj.selectIndividualClient('Purva');
  await page.waitForTimeout(2000);
 
 
  await page.pause();
});
