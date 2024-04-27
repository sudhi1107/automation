const el1 = await driver.$("xpath://android.widget.TextView[@text=\"Choose the best plan that fits your needs. You can cancel anytime\"]");
await el1.toBeDisplayed();
const el2 = await driver.$("xpath://android.widget.TextView[@text=\"Monthly\"]");
await el2.toBeDisplayed();
const el3 = await driver.$("xpath://android.widget.TextView[@text=\"Yearly\"]");
await el3.toBeDisplayed();
const el4 = await driver.$("xpath://android.widget.TextView[@text=\"Individual Plan\"]");
await el4.toBeDisplayed();
const el5 = await driver.$("xpath://android.widget.TextView[@text=\"SMB Plan\"]");
await el5.toBeDisplayed();
const el6 = await driver.$("xpath://android.widget.TextView[@text=\"Enterprise Plan\"]");
await el6.toBeDisplayed();
const el7 = await driver.$("xpath://android.widget.TextView[@text=\"Subscribe\"]");
await el7.toBeDisplayed();


// convert to 
/**
 * sub page containing specific selectors and methods for a specific page
 */
/**
 * sub page containing specific selectors and methods for a specific page
 */
import { appMailUpper, appPassword } from "../../config.js";
import createWalkthruConstants from "../elementBase/createWalkthru.ele.js";
import loginBase from "./login.base.js";
class CreateWalkthru {
  getElement(selector) {
    const element = browser.$(selector);
    element.waitForClickable({ timeout: 10000 });
    return element;
  }
  get verifyComplete() {
    return this.getElement(createWalkthruConstants.verifyComplete);
  }

  async test() {

}
}

export default new CreateWalkthru();

