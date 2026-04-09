import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../utility/ObjectFactory';

test('Admin login', async ({ page }) => {
  const objectFactory = new ObjectFactory(page);
  await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
  await objectFactory.bookingFormObj.selectServiceType();
});
