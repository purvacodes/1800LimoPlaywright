import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../../../utility/ObjectFactory';

test('Admin login', async ({ page }) => {
  test.setTimeout(300000);
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await page.waitForTimeout(2000);
  await objectFactory.bookingFormObj.adminCreateBooking();
  await objectFactory.handlerObj.handleSpinner();
  await page.waitForTimeout(2000);
  await objectFactory.bookingFormObj.selectServiceType('oneWay');
  await objectFactory.bookingFormObj.selectTransferType('cityToCity');
  await objectFactory.bookingFormObj.selectClientAccountType('individual');
  await objectFactory.bookingFormObj.selectIndividualClient('ananya 1800limo');
  await page.waitForTimeout(3000);
  await objectFactory.bookingFormObj.fillPaxDetails('Ananya-Pax','ananya-pax@test.com','+919876543210','5','2');
  await objectFactory.bookingFormObj.selectAffiliateType('affiliate');
  await objectFactory.bookingFormObj.selectAffiliate('Automation FLEET');
   await objectFactory.bookingFormObj.selectTravelDate();
  await objectFactory.bookingFormObj.selectPickupTime();
  await objectFactory.bookingFormObj.selectPickupAddress('Oak Park IL, USA');
  await objectFactory.bookingFormObj.selectDropOffAddress('102 Oak Ave IL, USA');
  // await page.waitForTimeout(2000);

  await page.pause();
});
