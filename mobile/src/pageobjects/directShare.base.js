/**
 * sub page containing specific selectors and methods for a specific page
 */
import { appMailUpper, appPassword, iosAppMailUpper, iosPackageName } from "../../config.js";
import directShareConstants from "../elementBase/directShare.ele.js"
import { waitAndClick, waitForDisplay } from "../helper/helper.js";
import createPersolizedReportBase from "./createPersolizedReport.base.js";
import loginBase from "./login.base.js";
const mail = browser.isAndroid ? appMailUpper : iosAppMailUpper
class DirectShare {

  get directShareButton() {
    return directShareConstants.directShareButtonXPath
  }

  get verifyDirectShareScreen() {
    return directShareConstants.verifyDirectShareScreenXPath
  }
  get fillItBtn() {
    return directShareConstants.fillItBtn
  }
  get confrimScreen() {
    return directShareConstants.confrimScreen
  }

  async verifyDirectScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.directShareButton, 20000)
    await waitForDisplay(this.verifyDirectShareScreen)
    await waitAndClick(this.fillItBtn)
    await waitForDisplay(this.confrimScreen,10000)
  }
  async verifyBackOption() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.walkthruFirstBtn, 20000)
    await waitAndClick(this.personalizeBackBtn)
    await waitForDisplay(loginBase.loginVerifyC)
  }
  async elementVerify() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.directShareButton, 20000)
    // await expect(await this.personalizeName).toBeDisplayed( { wait : 5000 } );
    await Promise.all([
      waitForDisplay(createPersolizedReportBase.verifyPersonalizeScreen2),
      waitForDisplay(createPersolizedReportBase.shareBtn),
      waitForDisplay(createPersolizedReportBase.fillItYourselfBtn)
    ])
  }
  async verifyFillItYourselfBtn() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.directShareButton, 20000)
    await waitAndClick(createPersolizedReportBase.fillItYourselfBtn)
    await waitForDisplay(createPersolizedReportBase.verifyWalkthruView)
  }
  async verifyShareBtn() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.directShareButton, 20000)
    await waitAndClick(createPersolizedReportBase.shareBtn)
    await waitForDisplay(createPersolizedReportBase.verifySharePopScreen)

  }
  async verifyScanQrBtn() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.directShareButton, 20000)
    await waitAndClick(createPersolizedReportBase.scanQrBtn)
    await waitForDisplay(createPersolizedReportBase.scanQrContent1)
  }
  async verifybackOnScanQrScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.directShareButton, 20000)
    await waitAndClick(createPersolizedReportBase.scanQrBtn)
    await waitAndClick(createPersolizedReportBase.scanQrBackBtn)
    await waitForDisplay(createPersolizedReportBase.verifyPersonalizeScreen2)
  }
}

export default new DirectShare();
