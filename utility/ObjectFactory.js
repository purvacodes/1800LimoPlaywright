import { SignUpSignIn } from '../pages/SignUpSignIn';
import { AddBookingDetails} from '../pages/AddBookingDetails';
import { RateDistribution} from '../pages/RateDistribution';
import { Handler} from '../pages/Handler';
import { Cred } from './Cred';
import { Locators } from './Locators';

export class ObjectFactory {
  constructor(page) {
    this.page = page;
    this.credObj = Cred;
    this.locatorsObj = Locators;
    this.bookingFormObj = new AddBookingDetails(page, this.locatorsObj, this.credObj);
    this.rateDistributionObj = new RateDistribution(page, this.locatorsObj); 
    this.signUpSignInObj = new SignUpSignIn(page, this.credObj, this.locatorsObj);
    this.handlerObj = new Handler(page, this.credObj, this.locatorsObj);
  }
}