import { test, expect } from '@playwright/test';
import { ObjectFactory } from '../../../utility/ObjectFactory';

test('Create OneWay CityToCity booking with looseCustomer associated with Affiliate having Rates according to Distance', async ({ page }) => {
    test.setTimeout(100000);
    const objectFactory = new ObjectFactory(page);
    const bookingConfig = objectFactory.bookingConfigObj;
    await objectFactory.signUpSignInObj.authenticateAccount('admin', objectFactory.credObj.login.admin_no);
    await page.waitForTimeout(2000);
    await objectFactory.buildBookingObj.buildBooking({
        bookingAction: bookingConfig.bookingAction.create,
        handler: objectFactory.handlerObj,
        serviceType: bookingConfig.serviceType.oneWay,
        transferType: bookingConfig.transferType.cityToCity,
        clientAccountType: bookingConfig.clientAccountType.looseCustomer,
        clientAccountData: bookingConfig.clientAccount.looseCustomer,
        passengerInfo: bookingConfig.passengerInfo,
        bookingDetails: bookingConfig.bookingDetails,
        affiliate: bookingConfig.assignAffiliateTypeManually.affiliate,
        waitTime: 1500
    });
    await objectFactory.rateDistributionObj.calculateRateDistribution({
        thirdPartyShare: bookingConfig.thirdPartyShare.none,
        serviceType:bookingConfig.serviceType.oneWay,
        ...bookingConfig.rateDistribution
    });
    await objectFactory.buildBookingObj.getPreviewBookingDetails();
    await page.pause();
});
