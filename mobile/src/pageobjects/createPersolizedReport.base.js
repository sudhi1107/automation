/**
 * sub page containing specific selectors and methods for a specific page
 */
import { appMailUpper, appPassword, iosAppMailUpper, iosPackageName } from '../../config.js';
import createWalkthruConstants from '../elementBase/createPersolized.ele.js'
import directShare from '../elementBase/directShare.ele.js';
import { waitAndClick, waitAndSetValue, waitForDisplay } from '../helper/helper.js';
import directShareBase from './directShare.base.js';
import loginBase from './login.base.js';
const mail = browser.isAndroid ? appMailUpper : iosAppMailUpper
class CreatePersonalized {
  get walkthruFirstBtn() {
    return createWalkthruConstants.walkthruFirstBtnXPath
  }

  get personalizeName() {
    return createWalkthruConstants.personalizeNameXPath
  }

  get metaName() {
    return createWalkthruConstants.metaNameXPath
  }

  get coverImageBtn() {
    return createWalkthruConstants.coverImageBtnXPath
  }

  get galleryBtn() {
    return createWalkthruConstants.galleryBtnId
  }

  get selectImage() {
    return createWalkthruConstants.selectImageXPath
  }

  get personalizeBtn() {
    return createWalkthruConstants.personalizeBtnXPath
  }

  get verifyPersonalizeScreen() {
    return createWalkthruConstants.verifyPersonalizeScreenXPath
  }

  get backBtn() {
    return createWalkthruConstants.backBtnXPath
  }

  get engageBtn() {
    return createWalkthruConstants.engageBtnXPath
  }

  get clickEngageBtn() {
    return createWalkthruConstants.clickEngageBtnXPath
  }
  get personalizeBackBtn() {
    return createWalkthruConstants.personalizeBackBtn
  }
  get verifyPersonalizeScreen() {
    return createWalkthruConstants.verifyPersonalizeScreen
  }
  get verifyPersonalizeScreen1() {
    return createWalkthruConstants.verifyPersonalizeScreen
  }
  get fillItYourselfBtn() {
    return createWalkthruConstants.fillItYourselfBtn
  }
  get verifyWalkthruView() {
    return createWalkthruConstants.verifyWalkthruView
  }
  get shareBtn() {
    return createWalkthruConstants.shareBtn
  }
  get verifySharePopScreen() {
    return createWalkthruConstants.verifySharePopScreen
  }
  get scanQrBtn() {
    return createWalkthruConstants.scanQrBtn
  }
  get scanQrBackBtn() {
    return createWalkthruConstants.scanQrBackBtn
  }
  get scanQrContent1() {
    return createWalkthruConstants.scanQrContent1
  }
  get verifyPersonalizeScreen2() {
    return createWalkthruConstants.verifyPersonalizeScreen2
  }
  get uploadConfirmText() {
    return createWalkthruConstants.uploadConfirmText
  }
  async createPersolizedReport() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    }
    await waitAndClick(this.walkthruFirstBtn, 20000)
    await waitForDisplay(this.verifyPersonalizeScreen)
    await waitAndSetValue(this.personalizeName, 'Test personalize Name')
    await waitAndClick(this.coverImageBtn)
    if (browser.isIOS) {
      await waitAndClick(this.coverImageBtn)
    }
    await waitAndClick(this.galleryBtn)
    await waitAndClick(this.selectImage)
    if (browser.isAndroid) {
      await waitForDisplay(this.uploadConfirmText)
      await browser.pause(4000);
    }
    else {
      await browser.pause(7000);
    }
    await waitForDisplay(this.verifyPersonalizeScreen)
    await waitAndClick(this.personalizeBtn)
    await waitForDisplay(this.verifyPersonalizeScreen2)
    await waitAndClick(directShareBase.fillItBtn)
    await waitForDisplay(directShareBase.confrimScreen,20000)
  }
  async verifyPersonalizeWithoutImage() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.walkthruFirstBtn, 20000)
    await waitAndClick(this.personalizeBtn)
    await waitForDisplay(this.verifyPersonalizeScreen2)
  }
  async verifyBackOption() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.walkthruFirstBtn, 20000)
    await waitAndClick(this.personalizeBtn)
    await waitForDisplay(loginBase.loginVerifyC)
  }
  async elementVerify() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.walkthruFirstBtn, 20000)
    // await expect(await this.personalizeName).toBeDisplayed( { wait : 5000 } );
    await Promise.all([
      waitForDisplay(this.personalizeBtn),
      waitForDisplay(this.verifyPersonalizeScreen),
      waitForDisplay(this.verifyPersonalizeScreen1)
    ])

  }
  async verifyShareBtn() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.walkthruFirstBtn, 20000)
    await waitAndClick(this.personalizeBtn)
    await waitAndClick(this.shareBtn)
    await waitForDisplay(this.verifySharePopScreen)
  }
  async verifyScanQrBtn() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.walkthruFirstBtn, 20000)
    await waitAndClick(this.personalizeBtn)
    await browser.pause(4000);
    await waitAndClick(this.scanQrBtn)
    await waitForDisplay(this.scanQrContent1)
  }
  async verifybackOnScanQrScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.walkthruFirstBtn, 20000)
    await waitAndClick(this.personalizeBtn)
    await browser.pause(4000);
    await waitAndClick(this.scanQrBtn)
    await waitAndClick(this.scanQrBackBtn)
    await waitForDisplay(this.verifyPersonalizeScreen2)

  }

}

export default new CreatePersonalized();

function genRandomName() {
  const chars = 'zxcvbnmasdfghjklqwertyuiop';
  let name = '';


  // Generating 10 random chars for the phone number
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    name += chars.charAt(randomIndex);
  }

  return "Walkthru" + name;
}
