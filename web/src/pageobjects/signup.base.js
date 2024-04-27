/**
 * sub page containing specific selectors and methods for the Signup page
 */
const defaultTimeout = 10000; // Set your default timeout here

const emailFieldXpath = "";

class Signup {
  getElement(selector, timeout = defaultTimeout) {
    const element = browser.$(selector);
    element.waitForClickable({ timeout });
    return element;
  }
  get verifySignup() {
    return this.getElement(emailFieldXpath);
  }

  async test() {

  } 
}

export default new Signup();