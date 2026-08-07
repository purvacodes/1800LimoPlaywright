import { BookingFormGetters } from '../utility/BookingFormGetters';
export class GetBookingDetails extends BookingFormGetters {
    constructor(page, locatorsObj) {
        super(page, locatorsObj);
    }

    // async getServiceType() {
    //     return await this.page.textContent(this.locators.bookingForm.serviceType);
    // }
    // async getTransferType() {
    //     return await this.page.textContent(this.locators.bookingForm.transferType);
    // }
    async getClientAccount() {
        const clientDropdown = this.accountListing.clientAccount;
        const selectedValue = clientDropdown.locator(this.accountListing.accountDropdownSelectedValue);
        return await selectedValue.innerText();
    }

    async getAffiliateAccount() {
        const affiliateDropdown = this.page.locator(this.locators.bookingForm.accountListing.affiliate);
        const selectedValue = affiliateDropdown.locator(this.accountListing.accountDropdownSelectedValue);
        return await selectedValue.innerText();
    }



}