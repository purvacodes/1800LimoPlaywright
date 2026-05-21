export class Handler {
  constructor(page, credObj, locatorsObj) {
    this.page = page;
    this.credObj = credObj;
    this.locatorsObj = locatorsObj;
  }

  async handleSpinner() {
    await this.page.locator('ngx-spinner').evaluateAll(spinners =>
      spinners.every(s => s.style.display === 'none' || s.hidden)
    );
  }
 
}

