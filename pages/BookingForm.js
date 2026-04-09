export class BookingForm {
  constructor(page, locatorsObj) {
    this.page = page;

    this.locatorsObj = locatorsObj;
  }

  async selectServiceType() {
    const serviceType = this.page.locator(this.locatorsObj.bookingForm.serviceType);
    await serviceType.click();
    await this.page.pause();
  }
}

