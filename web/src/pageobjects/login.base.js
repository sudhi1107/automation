/**
 * sub page containing specific selectors and methods for the login page
 */
const defaultTimeout = 10000; // Set your default timeout here

const emailFieldXpath = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)";
const passwordFieldSelector = "#auth-login-v2-password";
const loginButtonXpath =
  '//*[@id="__next"]/div[1]/div/div/div[1]/div/div/form/button';
const verifyLoginXpath = `(//div[@class='layout-content-wrapper MuiBox-root css-34b9xr'])[1]`
class Login {
  getElement(selector, timeout = defaultTimeout) {
    const element = browser.$(selector);
    element.waitForClickable({ timeout });
    return element;
  }
  get verifyLogin() {
    return this.getElement(verifyLoginXpath);
  }
  get emailField() {
    return this.getElement(emailFieldXpath);
  }

  get passwordField() {
    return this.getElement(passwordFieldSelector);
  }

  get loginButton() {
    return this.getElement(loginButtonXpath);
  }

  async performLogin(email, password) {
    await browser.maximizeWindow()
    await browser.url("https://qa-app.walkthru.ai")
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
    await expect(await this.verifyLogin).toBeDisplayed();
  } 
}

export default new Login();
