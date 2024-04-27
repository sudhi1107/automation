/**
 * sub page containing specific selectors and methods for a specific page
 */
import { MangoDbPath, MangoUrl, appPackageName, iosPackageName } from "../../config.js";
import loginConstants from "../elementBase/login.ele.js"
import { MongoClient } from "mongodb";
import signupBase from "./signup.base.js";
import createVideoClipBase from "./createVideoClip.base.js";
import createWalkthruBase from "./createWalkthru.base.js";
import { waitAndClick, waitForDisplay, waitAndSetValue, swipe, waitAndGetText, elemnetToHaveText, forExisting } from "../helper/helper.js"
class Login {

  // Welcome Screen Elements
  get welcomeScreenVerify1C() {
    return loginConstants.welcomeScreenVerify1
  }
  get freePlanBtn() {
    return loginConstants.freePlanBtn
  }
  get welcomeScreenVerify2C() {
    return loginConstants.welcomeScreenVerify2
  }

  get welcomeScreenVerify3C() {
    return loginConstants.welcomeScreenVerify3
  }

  get welcomeScreenVerify4C() {
    return loginConstants.welcomeScreenVerify4
  }

  // Other Elements
  get getStartedBtnC() {
    return loginConstants.getStartedBtn
  }

  get googleBtnC() {
    return loginConstants.googleBtn
  }

  get loginContentVerify1C() {
    return loginConstants.loginContentVerify1
  }

  get loginContentVerify2C() {
    return loginConstants.loginContentVerify2
  }

  get emailFieldC() {
    return loginConstants.emailField
  }

  get passwordFieldC() {
    return loginConstants.passwordField
  }

  get forgotPasswordFieldC() {
    return loginConstants.forgotPasswordField
  }

  get loginBtnC() {
    return loginConstants.loginBtn
  }

  get signUpButtonC() {
    return loginConstants.signUpButton
  }

  get loginBackBtnC() {
    return loginConstants.loginBackBtn
  }

  get passwordEyeIconC() {
    return loginConstants.passwordEyeIcon
  }

  get emptyFieldCheckC() {
    return loginConstants.emptyFieldCheck
  }

  get bothEmptyMailFieldC() {
    return loginConstants.bothEmptyMailField
  }

  get bothEmptyPasswordFieldC() {
    return loginConstants.bothEmptyPasswordField
  }

  get phoneNumerPrefixC() {
    return loginConstants.phoneNumerPrefix
  }

  get emailPrefixC() {
    return loginConstants.emailPrefix
  }

  get phoneNumberLengthValidateMsgC() {
    return loginConstants.phoneNumberLengthValidateMsg
  }
  get phoneNumberLengthValidateMsg1C() {
    return loginConstants.phoneNumberLengthValidateMsg1
  }

  get invalidMailCheckC() {
    return loginConstants.invalidMailCheck
  }
  get invalidMailCheck1C() {
    return loginConstants.invalidMailCheck1
  }
  get invalidMailPasswordMailC() {
    return loginConstants.invalidMailPasswordMail
  }

  get loginVerifyC() {
    return loginConstants.loginVerify
  }

  get profileBtnC() {
    return loginConstants.profileBtn
  }

  get logoutBtnC() {
    return loginConstants.logoutBtn
  }

  get logoutConfrimBtnC() {
    return loginConstants.logoutConfrimBtn
  }

  get profileScreenVerifyC() {
    return loginConstants.profileScreenVerify
  }

  get welcomeScreenVerify4C() {
    return loginConstants.welcomeScreenVerify4
  }
  get verifySignupFormC() {
    return loginConstants.verifySignupForm
  }
  get verifyGoogleAccountScreenC() {
    return loginConstants.verifyGoogleAccountScreen
  }
  get clickGoogleAccount() {
    return loginConstants.clickGoogleAccount
  }
  async delUser(newUser) {
    const client = new MongoClient(MangoUrl);
    try {
      await client.connect();
      console.log("Connected to MongoDB");

      const db = client.db(MangoDbPath);
      const collection = db.collection("users");
      newUser = newUser.toLowerCase();

      // Check if the user exists
      const result = await collection.deleteOne({ email: newUser });

      if (result.deletedCount === 1) {
        console.log("User document deleted successfully");
      } else {
        console.log("User document not found or not deleted");
      }
    } catch (err) {
      console.error("Error:", err);
      // Handle the error appropriately (log, throw, etc.)
    } finally {
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  }
  async verifyClipDeletedAfterDeleteGoogleAccount() {
    await this.delUser('appdevkato@gmail.com')
    await waitForDisplay(this.welcomeScreenVerify1C,20000);
    await waitAndClick(this.googleBtnC);
    await waitForDisplay(this.verifyGoogleAccountScreenC);
    await waitAndClick(this.clickGoogleAccount);
    await swipe("down", this.freePlanBtn);
    await waitAndClick(this.freePlanBtn);
    await waitForDisplay(this.loginVerifyC);
    await waitAndClick(createVideoClipBase.createVideoClipButton);
    await waitAndClick(createVideoClipBase.addVideoClipBtn);
    await waitAndClick(createVideoClipBase.addClipBtn);
    await waitAndClick(createVideoClipBase.galleryButton);
    await waitAndClick(createVideoClipBase.thumbnailImage);
    await waitForDisplay(createVideoClipBase.mediaDeleteBtn, 60000);
    const videoClipName = "Explainer 1";
    await waitAndSetValue(createVideoClipBase.nameInput, videoClipName)
    await waitAndClick(createVideoClipBase.saveButton);
    await createVideoClipBase.createExplainerVideoClipCheck();
    await waitAndClick(createWalkthruBase.libraryButton);
    await waitAndClick(createWalkthruBase.addClipButton);
    await waitAndClick(createWalkthruBase.nextButton);
    const walkthruTitle = genRandomName()
    await createWalkthruBase.walkthruTitleField.addValue(walkthruTitle);
    await waitAndClick(createWalkthruBase.metaOptionButton);
    await waitAndClick(createWalkthruBase.metaDataSelect);
    await waitAndClick(createWalkthruBase.createWalkthruButton);
    await waitAndClick(createWalkthruBase.verifyWalkthruCreateSuccess);
    await waitAndClick(createWalkthruBase.backToLibraryButton);
    await waitForDisplay(createWalkthruBase.verifyComplete, 60000);
    await waitAndClick(signupBase.WalkthruBtn);
    await waitForDisplay(signupBase.dataEmptyMsg, 60000);
    await waitAndClick(signupBase.EngageBtn);
    await waitForDisplay(signupBase.dataEmptyMsg1, 60000);
    await waitAndClick(signupBase.LibraryBtn);
    await waitForDisplay(signupBase.dataEmptyMsg1, 60000);
  }
  async verifyGoogleRegisterWorking() {
      await this.delUser('appdevkato@gmail.com')
      await waitForDisplay(this.welcomeScreenVerify1C, 60000);
      await waitAndClick(this.googleBtnC);
      if (browser.isIOS) {
        await browser.pause(2000)
        await browser.action('pointer')
        .move({ x: 10, y: 360 })
        .down({ button: 0 }) // left button
        .pause(10)
        .up({ button: 0 })
        .perform()
      }
      await waitForDisplay(this.verifyGoogleAccountScreenC);
      await waitAndClick(this.clickGoogleAccount);
      await swipe("down", this.freePlanBtn)
      await waitAndClick(this.freePlanBtn);
      await waitForDisplay(this.loginVerifyC);
      await waitAndClick(signupBase.WalkthruBtn);
      await waitForDisplay(signupBase.dataEmptyMsg);
      await waitAndClick(signupBase.EngageBtn);
      await waitForDisplay(signupBase.dataEmptyMsg1);
      await waitAndClick(signupBase.LibraryBtn);
      await waitForDisplay(signupBase.dataEmptyMsg1);
    
  
  }

  async verifyAlreadySignedGoogleAccountAppears() {
    await waitForDisplay(this.welcomeScreenVerify1C,20000);
    await waitAndClick(this.googleBtnC);
    if (browser.isIOS) {
      await browser.pause(2000)
      await browser.action('pointer')
      .move({x: 255, y: 514})
      .down({ button: 0 }) // left button
      .pause(10)
      .up({ button: 0 })
      .perform()
    }
    await waitForDisplay(this.verifyGoogleAccountScreenC);
    await browser.back();
  }

  async walkthruApplicationOpenCheck() {
    await waitForDisplay(this.welcomeScreenVerify1C, 30000);
    await waitForDisplay(this.welcomeScreenVerify4C);
    await waitForDisplay(this.getStartedBtnC);
    await waitForDisplay(this.googleBtnC);
  }
  async verifyNavigateToLoginScreen() {
    await waitForDisplay(this.welcomeScreenVerify1C, 20000);
    await waitAndClick(signupBase.signUpButton)
    await waitAndClick(signupBase.loginBtn)
    await waitForDisplay(this.loginContentVerify2C);
  }
  async verifyLoginElementOnLoginScreen() {
    await this.verifyNavigateToLoginScreen()
    await Promise.all([
      waitForDisplay(this.emailFieldC, 12000),
      waitForDisplay(this.passwordFieldC),
      waitForDisplay(this.loginBtnC),
      waitForDisplay(this.forgotPasswordFieldC),
      waitForDisplay(this.googleBtnC),
      waitForDisplay(this.signUpButtonC),
      waitForDisplay(this.loginBackBtnC),
      waitForDisplay(this.passwordEyeIconC)
    ])

  }
  async verifyNavigateToSignupForm() {
    await waitForDisplay(this.welcomeScreenVerify1C,20000);
    await waitAndClick(this.welcomeScreenVerify4C)
    await waitForDisplay(this.verifySignupFormC);
  }
  async verifyAutoNavigateToHomeFromLoginScreen() {
    await this.verifyNavigateToLoginScreen()
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName);
      await browser.activateApp(iosPackageName);
    } else {
      await browser.terminateApp(appPackageName);
      await browser.activateApp(appPackageName);
    }

    await waitForDisplay(this.welcomeScreenVerify1C, 20000);
  }
  async verifyBackOnLoginScreen() {
    await this.verifyNavigateToLoginScreen()
    await waitAndClick(this.loginBackBtnC)
    await waitForDisplay(this.welcomeScreenVerify1C,20000);
  }
  async verifyMessageForBlankInputOnLoginScreen() {
    await this.verifyNavigateToLoginScreen()
    await waitAndClick(this.loginBtnC)
    await waitForDisplay(this.bothEmptyMailFieldC);
    await waitForDisplay(this.bothEmptyPasswordFieldC);
  }
  async verifyAutomaticCountryCodePrefixAfterEnteringPhoneNumber(data1) {
    await this.verifyNavigateToLoginScreen()
    await waitAndSetValue(this.emailFieldC, data1)
    await waitForDisplay(this.phoneNumerPrefixC);
  }
  async verifyAutomaticEmailLogoPrefixAfterEnteringMail(data1) {
    await this.verifyNavigateToLoginScreen()
    await waitAndSetValue(this.emailFieldC, data1)
    await waitForDisplay(this.emailPrefixC);
  }
  async verifyAutomaticEmailLogoPrefixAfterEnteringMailPhone(data1) {
    await this.verifyAutomaticEmailLogoPrefixAfterEnteringMail(data1)
  }
  async verifyphoneNumberLengthValidation(data1, data2) {
    await this.verifyNavigateToLoginScreen();
    await waitAndSetValue(this.emailFieldC, data1)
    if (browser.isIOS) {
      waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC)
    await waitForDisplay(this.phoneNumberLengthValidateMsgC);
    await waitAndSetValue(this.emailFieldC, data2)
    if (browser.isIOS) {
      waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC)
    await waitAndGetText(this.emailFieldC)
    const data = await waitAndGetText(this.emailFieldC)
    const dataLen = data.length
    await expect(dataLen).toBe(10)
  }
  async verifyInvalidEmailFormatRestriction(data1, data2, data3, data4) {
    await this.verifyNavigateToLoginScreen();
    await waitAndSetValue(this.emailFieldC, data1)
    if (browser.isIOS) {
      waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC)
    await waitForDisplay(this.invalidMailCheckC);
    await waitAndSetValue(this.emailFieldC, data2)
    if (browser.isIOS) {
      waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC)
    await waitForDisplay(this.invalidMailCheckC);
    await waitAndSetValue(this.emailFieldC, data3)
    if (browser.isIOS) {
      waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC)
    await waitForDisplay(this.invalidMailCheckC);
    await waitAndSetValue(this.emailFieldC, data4)
    if (browser.isIOS) {
      waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC)
    await waitForDisplay(this.invalidMailCheckC);
  }
  async verifyCountryCodeRestriction(data) {
    await this.verifyNavigateToLoginScreen();
    await waitAndSetValue(this.emailFieldC, data)
    await elemnetToHaveText(this.emailFieldC, data)
  }
  async verifyInvalidUserNameRestriction(data) {
    await this.verifyNavigateToLoginScreen();
    await Promise.all([
      waitAndSetValue(this.emailFieldC, data),
      waitAndSetValue(this.passwordFieldC, '123123')
    ])
    if (browser.isIOS) {
      waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC)
    await waitForDisplay(this.loginContentVerify1C, 30000);
    // await expect(await this.invalidMailPasswordMailC).toBeDisplayed({ wait : MTOut});
  }
  async verifyInvalidPasswordRestriction(data) {
    await this.verifyNavigateToLoginScreen();
    await Promise.all([
      waitAndSetValue(this.emailFieldC, data),
      waitAndSetValue(this.passwordFieldC, '231234')
    ])
    if (browser.isIOS) {
      waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC)
    await browser.pause(5000)
    await waitForDisplay(this.loginContentVerify1C, 30000);
  }
  async verifyLoginFeatureForValidCredentials(data, data1) {
    await this.verifyNavigateToLoginScreen();
    await Promise.all([
      waitAndSetValue(this.emailFieldC, data),
      waitAndSetValue(this.passwordFieldC, data1)
    ])
    if (browser.isIOS) {
      await waitAndSetValue(this.emailFieldC, data),
      await waitAndClick(this.welcomeScreenVerify2C)
    }
    await waitAndClick(this.loginBtnC);
    await waitForDisplay(this.loginVerifyC, 20000)
  }

  async verifyLoginFeatureByEmialIDCaps(data, data1) {
    await this.verifyLoginFeatureForValidCredentials(data, data1);
  }
}

export default new Login();
