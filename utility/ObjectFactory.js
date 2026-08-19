import { SignUpSignIn } from '../pages/SignUpSignIn';
import { BuildBooking} from '../pages/BuildBooking';
import { GetBookingDetails } from '../pages/GetBookingDetails'; 
import { RateDistribution} from '../pages/RateDistribution';
import { Handler} from '../pages/Handler';
import { Cred } from './Cred';
import { Locators } from './Locators';  
import bookingConfig from '../test-data/BookingConfig.json';          

export class ObjectFactory {
  constructor(page) {
    this.page = page;                     
    this.credObj = Cred;        
    this.locatorsObj = Locators;
    this.buildBookingObj = new BuildBooking(page, this.locatorsObj, this.credObj);
    this.getBookingDetailsObj = new GetBookingDetails(page, this.locatorsObj);
    this.rateDistributionObj = new RateDistribution(page, this.locatorsObj); 
    this.signUpSignInObj = new SignUpSignIn(page, this.credObj, this.locatorsObj);
    this.handlerObj = new Handler(page, this.credObj, this.locatorsObj);
    this.bookingConfigObj = bookingConfig;
  }                         
}