export class BookingForm {
  constructor(page, locatorsObj) {
    this.page = page;

    this.locatorsObj = locatorsObj;
  }

  get bookingAction() {
    return this.page.locator(this.locatorsObj.sideBar.createBooking);
  }

  get serviceType() {
    return this.page.locator(this.locatorsObj.bookingForm.serviceType);
  }

  get transferType() {
    return this.page.locator(this.locatorsObj.bookingForm.transferType);
  }
  get clientAccount() {
    return this.page.locator(this.locatorsObj.bookingForm.clientAccounts.selectAccount);
  }

  async selectBookingActionToPerform() {
    await this.bookingAction.click();
  }

  async selectServiceType(serviceType) {
    await this.serviceType.first().click();

    const optionMap = {
      oneWay: this.locatorsObj.bookingForm.oneWay,
      roundTrip: this.locatorsObj.bookingForm.roundTrip,
      charterTour: this.locatorsObj.bookingForm.charterTour,
    };

    if (!optionMap[serviceType]) {
      throw new Error(`Invalid service type: ${serviceType}`);
    }

    await this.page.locator(optionMap[serviceType]).click();
  }
  async selectTransferType(transferType) {
    await this.transferType.first().click();
    const optionMap = {
      cityToCity: this.locatorsObj.bookingForm.cityToCity,
      cityToAirport: this.locatorsObj.bookingForm.cityToAirport,
      airportToCity: this.locatorsObj.bookingForm.airportToCity,
      airportToAirport: this.locatorsObj.bookingForm.airportToAirport,
      airportToCruisePort: this.locatorsObj.bookingForm.airportToCruisePort,
      cityToCruisePort: this.locatorsObj.bookingForm.cityToCruisePort,
      cruisePortToAirport: this.locatorsObj.bookingForm.cruisePortToAirport,
      cruisePortToCity: this.locatorsObj.bookingForm.cruisePortToCity,
    };

    if (!optionMap[transferType]) {
      throw new Error(`Invalid transfer type: ${transferType}`);
    }

    await this.page.locator(optionMap[transferType]).click();
  }

async selectClientAccountType(accountType) {
  await this.clientAccount.click();

  const optionMap = {
    individual: this.locatorsObj.bookingForm.clientAccounts.individual,
    travelAgent: this.locatorsObj.bookingForm.clientAccounts.travelAgent,
    looseCustomer: this.locatorsObj.bookingForm.clientAccounts.looseCustomer,
  };

  if (!optionMap[accountType]) {
    throw new Error(`Invalid account type: ${accountType}`);
  }

  await this.page.locator(optionMap[accountType]).click();
}
async selectIndividualClient(clientName) {
  const accountInput = this.page
    .locator(this.locatorsObj.bookingForm.clientAccounts.selectAccount)
    .locator('input');

  await accountInput.fill(clientName);
  await this.page.locator('.ng-option').first().click();
}
async selectTravelAgent(agentName) {
  const accountInput = this.page
    .locator(this.locatorsObj.bookingForm.clientAccounts.selectAccount)
    .locator('input');

  await accountInput.fill(agentName);
  await this.page.locator('.ng-option').first().click();
}
async selectTravelAgentSubAccount(subAccountType) {
  const subAccountMap = {
    travelAgentIndividual: this.locatorsObj.bookingForm.clientAccounts.travelAgentIndividual,
    travelAgentLooseCustomer:this.locatorsObj.bookingForm.clientAccounts.travelAgentLooseCustomer,
  };

  if (!subAccountMap[subAccountType]) {
    throw new Error(
      `Invalid travel agent sub account type: ${subAccountType}`
    );
  }

  await this.page.locator(subAccountMap[subAccountType]).click();
}
async selectTravelAgentClient(clientName) {
  const clientInput = this.page
    .locator(
      this.locatorsObj.bookingForm.clientAccounts
        .selectTravelAgentClient
    )
    .locator('input');

  await clientInput.fill(clientName);

  await this.page.locator('.ng-option').first().click();
}
  async addLooseCustomer() {
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.first_name).fill('John');
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.middle_name).fill('M');
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.last_name).fill('Doe');
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.email).fill(`john${Math.floor(Math.random()*1000)}@example.com`);
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.phone).fill(`70243${Math.floor(10000 + Math.random() * 90000)}`);
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.cardName).fill('John Doe');
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.cardNumber).fill('4000000000000077');
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.expMonth).fill('12');
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.expYear).click();
    await this.page.locator('mat-option').first().click();
    await this.page.locator(this.locatorsObj.bookingForm.looseCustomer.cvv).fill('123');
  }
   async fillPaxDetails() {
    await this.page.locator(this.locatorsObj.bookingForm.passengerInfo.passengerName).fill('John');
    await this.page.locator(this.locatorsObj.bookingForm.passengerInfo.passengerEmail).fill(`john${Math.floor(Math.random()*1000)}@example.com`);
    await this.page.locator(this.locatorsObj.bookingForm.passengerInfo.passengerPhone).fill(`70243${Math.floor(10000 + Math.random() * 90000)}`);
    await this.page.locator(this.locatorsObj.bookingForm.passengerInfo.totalPax).fill('2');
    await this.page.locator(this.locatorsObj.bookingForm.passengerInfo.luggageCount).fill('3');
  }

  async selectAffiliateType(affiliateType) {
    const optionMap = {
      affiliate: this.locatorsObj.bookingForm.affiliate_type.affiliate,
      looseAffiliate: this.locatorsObj.bookingForm.affiliate_type.looseAffiliate,
    };

    if (!optionMap[affiliateType]) {
      throw new Error(`Invalid affiliate type: ${affiliateType}`);
    }

    await this.page.locator(optionMap[affiliateType]).click();
  }

  async selectAffiliate(affiliateName) {
    await this.page.locator(this.locatorsObj.bookingForm.affiliateList).click();
    await this.page.locator(this.locatorsObj.bookingForm.affiliateList).locator('input').fill(affiliateName);
    await this.page.locator('.ng-option').first().click();
  }

  async selectLooseAffiliate(looseAffiliateName) {
    await this.page.locator(this.locatorsObj.bookingForm.looseAffiliateList).click();
    await this.page.locator(this.locatorsObj.bookingForm.looseAffiliateList).locator('input').fill(looseAffiliateName);
    await this.page.locator('.ng-option').first().click();
  }

  async fillLooseAffiliateDetails(name, phone, email) {
    await this.page.locator(this.locatorsObj.bookingForm.looseAffiliate.looseAffiliateName).fill(name);
    await this.page.locator(this.locatorsObj.bookingForm.looseAffiliate.looseAffiliatePhone).fill(phone);
    await this.page.locator(this.locatorsObj.bookingForm.looseAffiliate.looseAffiliateEmail).fill(email);
  }
  

}

