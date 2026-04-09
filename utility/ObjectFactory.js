import { SignUpSignIn } from '../pages/SignUpSignIn';
import { BookingForm} from '../pages/BookingForm';
import { Cred } from './Cred';
import { Locators } from './Locators';

export class ObjectFactory {
  constructor(page) {
    this.page = page;
    this.credObj = Cred;
    this.locatorsObj = Locators;
    this.bookingFormObj = new BookingForm(page, this.locatorsObj);
    this.signUpSignInObj = new SignUpSignIn(page, this.credObj, this.locatorsObj);
  }
}