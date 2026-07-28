import { BookingFormGetters } from '../utility/BookingFormGetters';

export class AddBookingDetails extends BookingFormGetters {
    constructor(page, locatorsObj) {
        super(page, locatorsObj);
    }
    
    async adminCreateBooking() {
        await this.bookingActions.adminCreateBooking.click();
    }

    async adminEditBooking(id) {
        await this.bookingActions.adminEditBooking(id).click();
    }

    async adminRepeatBooking(id) {
        await this.bookingActions.adminRepeatBooking(id).click();
    }

    async selectServiceType(type) {
        const service = this.serviceType;
        await service.dropdown.first().click();
        await this.selectOption(service.options, type, `Invalid service type: ${type}`);
    }

    async selectTransferType(type) {
        const transfer = this.transferType;
        await transfer.dropdown.first().click();
        await this.selectOption(transfer.options, type, `Invalid transfer type: ${type}`);
    }

    async selectClientAccountType(type) {
        const client = this.clientAccounts;
        await client.dropdown.click();
        await this.selectOption(client.options, type, `Invalid client account type: ${type}`);
    }

    async selectIndividualClient(clientName) {
        const accountInput = this.clientAccounts.dropdown.locator('input');
        await accountInput.fill(clientName);
        await this.selectFirstDropdownOption();
    }

    async selectTravelAgent(agentName) {
        const accountInput = this.clientAccounts.dropdown.locator('input');
        await accountInput.fill(agentName);
        await this.selectFirstDropdownOption();
    }
    async selectTravelAgentClientType(type) {
        await this.selectOption(this.clientAccounts.options, type, `Invalid travel agent sub account type: ${type}`);
    }

    async selectTravelAgentClient(clientName) {
        await this.clientAccounts.selectTravelAgentClient.click();
        const clientInput = this.clientAccounts.selectTravelAgentClient.locator('input');
        await clientInput.fill(clientName);
        await this.selectFirstDropdownOption();
    }
    async addLooseCustomer() {
        const customer = this.looseCustomer;

        await customer.firstName.fill('John');
        await customer.middleName.fill('M');
        await customer.lastName.fill('Doe');

        await customer.email.fill(
            `john${Math.floor(Math.random() * 1000)}@example.com`
        );

        await customer.phone.fill(
            `70243${Math.floor(10000 + Math.random() * 90000)}`
        );

        await customer.cardName.fill('John Doe');
        await customer.cardNumber.fill('4000000000000077');
        await customer.expMonth.fill('12');

        await customer.expYear.click();
        await this.page.locator('mat-option').first().click();

        await customer.cvv.fill('123');
    }
    async fillPaxDetails(name, email, phone, totalPax, luggageCount) {
        const pax = this.passengerInfo;

        await pax.passengerName.fill(name);
        await pax.passengerEmail.fill(email);
        await pax.passengerPhone.fill(phone);
        await pax.totalPax.fill(totalPax);
        await pax.luggageCount.fill(luggageCount);
    }

    async selectAffiliateType(type) {
        await this.selectOption(this.affiliate.affiliateType, type, 'affiliate type');
    }

    async selectAffiliate(affiliate) {
        await this.affiliate.affiliateList.click();
        await this.affiliate.affiliateList.locator('input').fill(affiliate);
        await this.selectFirstDropdownOption();
    }

    async selectLooseAffiliate(looseAffiliate) {
        await this.affiliate.looseAffiliateList.click();
        await this.affiliate.looseAffiliateList.locator('input').fill(looseAffiliate);
        await this.selectFirstDropdownOption();
    }

    async fillLooseAffiliateDetails(name, phone, email) {
        await this.looseAffiliate.name.fill(name);
        await this.looseAffiliate.phone.fill(phone);
        await this.looseAffiliate.email.fill(email);
    }

    async selectTravelDate() {
        await this.bookingDetails.pickupDate.click();
        await this.page.getByRole('button', { name: 'June 3,' }).click();
    }

    async selectPickupTime() {
        await this.bookingDetails.pickupTime.click();
        await this.page.locator('ngx-material-timepicker-face').getByText('2', { exact: true }).click();
        await this.page.getByRole('button', { name: 'Ok' }).click();
    }

    async selectPickupAddress(address) {
        await this.bookingDetails.pickupAddress.click();
        await this.bookingDetails.pickupAddress.fill(address);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: address }).click();
    }
    async selectDropOffAddress(address) {
        await this.bookingDetails.dropOffAddress.click();
        await this.bookingDetails.dropOffAddress.fill(address);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: address }).click();
    }
    async selectPickupAirport(address) {
        await this.bookingDetails.pickupAirport.click();
        await this.bookingDetails.pickupAirport.fill(address);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: address }).first().click();
    }
    async selectDropOffAirport(address) {
        await this.bookingDetails.dropoffAirport.click();
        await this.bookingDetails.dropoffAirport.fill(address);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: address }).first().click();
    }
    async selectPickupAirline(airline) {
        await this.bookingDetails.pickupAirline.click();
        await this.bookingDetails.pickupAirline.type(airline);
        await this.page.locator('.ng-option', {
            hasText: airline
        }).first().click();
    }
    async selectDropOffAirline(airline) {
        await this.bookingDetails.dropoffAirline.click();
        await this.bookingDetails.dropoffAirline.type(airline);
        await this.page.locator('.ng-option', {
            hasText: airline
        }).first().click();
    }

    async selectPickupFlight(flight) {
        await this.bookingDetails.pickupFlight.click();
        await this.bookingDetails.pickupFlight.fill(flight);
    }
    async selectDropOffFlight(flight) {
        await this.bookingDetails.dropoffFlight.click();
        await this.bookingDetails.dropoffFlight.fill(flight);
    }

    async selectOriginCity(city) {
        await this.bookingDetails.originCity.click();
        await this.bookingDetails.originCity.fill(city);
    }
    async selectDepartingCity(city) {
        await this.bookingDetails.destinationCity.click();
        await this.bookingDetails.destinationCity.fill(city);
    }



    async selectFirstDropdownOption() {
        await this.page.locator('.ng-option').first().click();
    }
    async selectOption(options, type, errorMessage) {
        const option = options[type];

        if (!option) {
            throw new Error(errorMessage);
        }

        await option.click();
    }

    async selectClientAccount(clientAccountType, clientName, travelAgentClientType) {
        await this.selectClientAccountType(clientAccountType);

        switch (clientAccountType) {
            case 'individual':
                await this.selectIndividualClient(clientName);
                break;

            case 'travelAgent':
                await this.selectTravelAgent(clientName);
                await this.selectTravelAgentClientType(travelAgentClientType);

                switch (travelAgentClientType) {
                    case 'individual':
                        await this.selectTravelAgentClient(clientName);
                        break;

                    default:
                        await this.addLooseCustomer();
                        break;
                }
                break;
            case 'looseCustomer':
                await this.addLooseCustomer();
                break;
            default:
                throw new Error(`Unsupported client account type: ${clientAccountType}`);
        }
    }


    async fillBookingDetailsByTransferType(transferType, pickupAddress, pickupAirline, pickupFlight, originCity, dropOffAddress, dropOffAirline, dropOffFlight) {
        if (!transferType) throw new Error('transferType is required');

        const t = transferType.toLowerCase();
        // Pickup
        if (t.startsWith('city')) {
            await this.selectPickupAddress(pickupAddress);
        } else if (t.startsWith('airport')) {
            await this.selectPickupAirport(pickupAddress);
            await this.selectPickupAirline(pickupAirline);
            await this.selectPickupFlight(pickupFlight);
            await this.selectOriginCity(originCity);
        } else {
            throw new Error(`Unsupported pickup transfer type: ${transferType}`);
        }

        // Drop-off
        if (t.endsWith('tocity')) {
            await this.selectDropOffAddress(dropOffAddress);
        } else if (t.endsWith('toairport')) {
            await this.selectDropOffAirport(dropOffAddress);
            await this.selectDropOffAirline(dropOffAirline);
            await this.selectDropOffFlight(dropOffFlight);
        } else {
            throw new Error(`Unsupported drop-off transfer type: ${transferType}`);
        }
    }

    async assignAffiliateManually(type, affiliate, looseAffiliate, looseAffiliateName, looseAffiliatePhone, looseAffiliateEmail) {
        await this.bookingDetails.assignManually.click();
        await this.selectAffiliateType(type);
        if (type === 'affiliate') {
            await this.selectAffiliate(affiliate);
        } else if (type === 'looseAffiliate') {
            await this.selectLooseAffiliate(looseAffiliate);
            await this.fillLooseAffiliateDetails(looseAffiliateName, looseAffiliatePhone, looseAffiliateEmail);
        }
    }

    async assignAffiliateWithEmbeddedQuote() {
        await this.bookingDetails.browseVehicles.click();
    }


}