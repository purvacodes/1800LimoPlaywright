import { BookingFormGetters } from '../utility/BookingFormGetters';

export class BuildBooking extends BookingFormGetters {
    constructor(page, locatorsObj) {
        super(page, locatorsObj);
    }

    /**
     * Build booking form from config object
     * @param {Object} config - Booking configuration
     * @param {string} [config.bookingAction] - create, edit, repeat
     * @param {string} [config.bookingNumber] - booking number for search before edit/repeat
     * @param {string} [config.serviceType] - oneWay, roundTrip, charterTour
     * @param {string} [config.transferType] - e.g., airportToCity, cityToCity, etc.
     * @param {string} [config.clientAccountType] - individual, travelAgent, looseCustomer
     * @param {string} [config.clientName] - Name for individual/travelAgent selection
     * @param {string} [config.travelAgentClientType] - individual or looseCustomer (if clientAccount is travelAgent)
     * @param {Object} [config.passengerInfo] - { name, email, phone, totalPax, luggageCount }
     * @param {Object} [config.bookingDetails] - { pickupAddress, dropoffAddress, pickupAirport, pickupAirline, pickupFlight, etc. }
     * @param {Object} [config.affiliate] - { type, affiliate/looseAffiliate, ...details }
     * @param {number} [config.waitTime] - Optional wait between steps (ms)
     * @param {Object} [config.handler] - Handler object with handleSpinner() method (e.g., objectFactory.handlerObj)
     */
    async buildBooking(config) {
        const wait = config.waitTime || 1000;

        if (config.bookingAction) {
            switch (config.bookingAction) {
                case 'create':
                    await this.adminCreateBooking();
                    break;
                case 'edit':
                    if (config.bookingNumber) {
                        await this.searchBooking(config.bookingNumber);
                        await this.adminEditBooking(config.bookingNumber);
                    }
                    break;
                case 'repeat':
                    if (config.bookingNumber) {
                        await this.searchBooking(config.bookingNumber);
                        await this.adminRepeatBooking(config.bookingNumber);
                    }
                    break;
                default:
                    throw new Error(`Unsupported bookingAction: ${config.bookingAction}`);
            }

            if (config.handler) {
                await config.handler.handleSpinner();
            }
            await this.page.waitForTimeout(wait);
        }

        if (config.serviceType) {
            await this.selectServiceType(config.serviceType);
            await this.page.waitForTimeout(wait);
        }

        if (config.transferType) {
            await this.selectTransferType(config.transferType);
            await this.page.waitForTimeout(wait);
        }

        if (config.clientAccountType) {
            await this.selectClientAccount(
                config.clientAccountType,
                config.clientAccountData,
                config.clientName,
                config.travelAgentClientType
            );
            await this.page.waitForTimeout(wait);
        }

        if (config.passengerInfo) {
            const pax = config.passengerInfo;
            await this.fillPaxDetails(
                pax.name,
                pax.email,
                pax.phone,
                pax.totalPax,
                pax.luggageCount
            );
            await this.page.waitForTimeout(wait);
        }

        if (config.bookingDetails) {
            await this.fillBookingDetailsByTransferType(
                config.transferType,
                config.bookingDetails
            );

            await this.page.waitForTimeout(wait);
        }
        if (config.affiliate) {
            const affiliate = config.affiliate;
            await this.assignAffiliateManually(
                affiliate.type,
                affiliate.affiliate,
                affiliate.looseAffiliate,
                affiliate.looseAffiliateName,
                affiliate.looseAffiliatePhone,
                affiliate.looseAffiliateEmail
            );
            await this.page.waitForTimeout(wait);
        }

    }

    async searchBooking(bookingNumber) {
        await this.bookingActions.search.type(bookingNumber);
    }

    async adminCreateBooking() {
        await this.bookingActions.adminCreateBooking.click();
    }

    async adminEditBooking(bookingNumber) {
        console.log(`Editing booking with Number: ${bookingNumber}`);
        await this.bookingActions.adminEditBooking(bookingNumber).click();
    }

    async adminRepeatBooking(bookingNumber) {
        await this.bookingActions.adminRepeatBooking(bookingNumber).click();
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
    async addLooseCustomer(customer) {

        if (!customer) {
            throw new Error(
                'Loose customer data is required for clientAccountType: looseCustomer'
            );
        }

        const looseCustomer = this.looseCustomer;

        await looseCustomer.firstName.fill(customer.firstName);
        await looseCustomer.middleName.fill(customer.middleName);
        await looseCustomer.lastName.fill(customer.lastName);

        await looseCustomer.email.fill(
            `${customer.emailPrefix}${Date.now()}@yopmail.com`
        );

        await looseCustomer.phone.fill(
            `${customer.phonePrefix}${Math.floor(
                10000 + Math.random() * 90000
            )}`
        );
        await looseCustomer.address.first().fill(customer.address);
        await this.page.waitForTimeout(200);
        await this.page.getByRole('button', { name: customer.address }).first().click()

        await looseCustomer.cardName.fill(customer.cardName);
        await looseCustomer.cardNumber.fill(customer.cardNumber);
        await looseCustomer.expMonth.fill(customer.expMonth);

        await looseCustomer.expYear.click();
        await this.page.locator('mat-option').first().click();

        await looseCustomer.cvv.fill(customer.cvv);
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
        console.log(`Selecting affiliate type: ${type}`);
        await this.selectOption(this.affiliate.options, type, 'affiliate type');
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
        await this.page.getByRole('button', { name: address }).first().click();
    }
    async selectDropOffAddress(address) {
        await this.bookingDetails.dropoffAddress.click();
        await this.bookingDetails.dropoffAddress.fill(address);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: address }).first().click();
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

    async selectClientAccount(clientAccountType, clientAccountData, clientName, travelAgentClientType) {
        await this.selectClientAccountType(clientAccountType);

        switch (clientAccountType) {

            case 'individual':
                await this.selectIndividualClient(
                    clientAccountData?.clientName || clientName
                );
                break;

            case 'travelAgent':
                await this.selectTravelAgent(
                    clientAccountData?.clientName || clientName
                );

                await this.selectTravelAgentClientType(
                    travelAgentClientType
                );

                if (travelAgentClientType === 'individual') {
                    await this.selectTravelAgentClient(
                        clientName
                    );
                } else {
                    await this.addLooseCustomer(clientAccountData);
                }
                break;

            case 'looseCustomer':
                await this.addLooseCustomer(clientAccountData);
                break;

            default:
                throw new Error(
                    `Unsupported client account type: ${clientAccountType}`
                );
        }
    }


    async fillBookingDetailsByTransferType(transferType, details) {

        if (!transferType) {
            throw new Error('transferType is required');
        }

        if (!details) {
            throw new Error('bookingDetails are required');
        }
        const t = transferType.toLowerCase();

        // --------------------// Pickup // --------------------
        if (t.startsWith('city')) {

            await this.selectPickupAddress(
                details.pickupAddress
            );

        } else if (t.startsWith('airport')) {

            await this.selectPickupAirport(
                details.pickupAirport
            );

            await this.selectPickupAirline(
                details.pickupAirline
            );

            await this.selectPickupFlight(
                details.pickupFlight
            );

            await this.selectOriginCity(
                details.originCity
            );

        } else {
            throw new Error(
                `Unsupported pickup transfer type: ${transferType}`
            );
        }

        // -------------------- // Drop-off // --------------------
        if (t.endsWith('tocity')) {

            await this.selectDropOffAddress(
                details.dropoffAddress
            );

        } else if (t.endsWith('toairport')) {

            await this.selectDropOffAirport(
                details.dropoffAirport
            );

            await this.selectDropOffAirline(
                details.dropoffAirline
            );

            await this.selectDropOffFlight(
                details.dropoffFlight
            );

        } else {
            throw new Error(
                `Unsupported drop-off transfer type: ${transferType}`
            );
        }
    }

    async assignAffiliateManually(type, affiliate, looseAffiliate, looseAffiliateName, looseAffiliatePhone, looseAffiliateEmail) {
        await this.bookingDetails.assignManually.click();
        console.log(`Assigning affiliate manually with type: ${type}, affiliate: ${affiliate}, looseAffiliate: ${looseAffiliate}`);
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

    async previewBooking() {
        await this.bookingActions.previewBooking.first().click();
    }

    async savePreview() {
        await this.bookingActions.savePreview.click();
    }

    async getPreviewBookingDetails() {
        await this.previewBooking();
        const adminShareValue = await this.previewBookingInfo.adminShare.textContent();
        const parseCurrency = (value) =>
            Number((value || '').replace(/[$,%\s]/g, '') || 0);
        return {

            adminShare: parseCurrency(adminShareValue)
        };
    }

}