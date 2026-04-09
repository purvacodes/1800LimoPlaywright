export class SignUpSignIn {
  constructor(page, credObj, locatorsObj) {
    this.page = page;
    this.credObj = credObj;
    this.locatorsObj = locatorsObj;
  }

  async authenticateAccount(userType, phoneNumber) {
    const url = this.credObj.envBaseUrl.staging + this.credObj.login[userType];

    await this.page.goto(url, { waitUntil: "domcontentloaded" });

    const phoneInput = this.page.locator(this.locatorsObj.signUpSignIn.phoneInput);

    await phoneInput.click();
    await phoneInput.type(phoneNumber);

    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }
}

