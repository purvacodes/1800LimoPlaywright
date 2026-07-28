import { BookingFormGetters } from '../utility/BookingFormGetters';

export class RateDistribution extends BookingFormGetters {
    constructor(page, locatorsObj) {
        super(page, locatorsObj);
    }

     async getBaseRate() {

        const rateValue = await this.rates.vehicleBaseRates.baseRate.inputValue();
        const amountValue = await this.rates.vehicleBaseRates.baseRateAmount.innerText();

       console.log(`Base Rate Value: ${rateValue}`);
       console.log(`Base Rate Amount: ${amountValue}`);
    }
}