/**
 * sub page containing specific selectors and methods for a specific page
 */
import { MangoDbPath, MangoUrl, appMailLower, appMailUpper, appPackageName, appPhone, iosAppMailLower, iosAppMailUpper, iosAppPhone, iosPackageName } from "../../config.js";
import forgotForgotConstants from "../elementBase/forgotPassword.ele.js"
import {  elemnetToHaveText, waitAndClick, waitAndGetText, waitAndSetValue, waitForDisplay, waitForNoDisplay } from "../helper/helper.js";
import loginBase from "./login.base.js";
import { MongoClient } from "mongodb";
var phone = browser.isAndroid ? appPhone : iosAppPhone
var mail = browser.isAndroid ? appMailLower : iosAppMailLower
var pack = browser.isAndroid ? appPackageName : iosPackageName
class ForgotForgot {
  get forgotPasswordButton() {
    return forgotForgotConstants.forgotPasswordButton
  }

  get forgotPasswordInputField() {
    return forgotForgotConstants.forgotPasswordInputField
  }

  get forgotPasswordScreenContentVerify1() {
    return forgotForgotConstants.forgotPasswordScreenContentVerify1
  }

  get forgotPasswordBackButton() {
    return forgotForgotConstants.forgotPasswordBackButton
  }

  get sendButton() {
    return forgotForgotConstants.sendButton
  }

  get otpScreenContentCheck1() {
    return forgotForgotConstants.otpScreenContentCheck1
  }

  get otpScreenContentCheck2() {
    return forgotForgotConstants.otpScreenContentCheck2
  }

  get otpInputField1() {
    return forgotForgotConstants.otpInputField1
  }

  get otpInputField2() {
    return forgotForgotConstants.otpInputField2
  }

  get otpInputField3() {
    return forgotForgotConstants.otpInputField3
  }

  get otpInputField4() {
    return forgotForgotConstants.otpInputField4
  }

  get verifyButton() {
    return forgotForgotConstants.verifyButton
  }

  get otpBackButton() {
    return forgotForgotConstants.otpBackButton
  }
  get changePasswordScreenContent1() {
    return forgotForgotConstants.changePasswordScreenContent1
  }

  get changePasswordScreenContent2() {
    return forgotForgotConstants.changePasswordScreenContent2
  }

  get backBtn() {
    return forgotForgotConstants.backBtn
  }

  get passwordField() {
    return forgotForgotConstants.passwordField
  }

  get confirmPasswordField() {
    return forgotForgotConstants.confirmPasswordField
  }

  get saveBtn() {
    return forgotForgotConstants.saveBtn
  }

  get changePasswordErrorMsg() {
    return forgotForgotConstants.changePasswordErrorMsg
  }

  get changePasswordErrorMsg1() {
    return forgotForgotConstants.changePasswordErrorMsg1
  }

  get changePasswordErrorMsg2() {
    return forgotForgotConstants.changePasswordErrorMsg2
  }

  get invalidOtpToast() {
    return forgotForgotConstants.invalidOtpToast
  }

  async verifyElementsOnForgotPasswordScreen() {
    await this.forgotPasswordBase();
    await Promise.all([
      waitForDisplay(this.forgotPasswordInputField),
      waitForDisplay(this.forgotPasswordBackButton),
      waitForDisplay(this.sendButton),
    ])
  }
  async verifyBackBtn() {
    await this.forgotPasswordBase();
    await waitAndClick(this.forgotPasswordBackButton);
    await waitForDisplay(loginBase.welcomeScreenVerify1C);
  }
  async verifyAutoPopulateMailId() {
    await waitAndClick(loginBase.getStartedBtnC,20000);
    const mail = browser.isAndroid ? appMailUpper : iosAppMailUpper
    await waitAndSetValue(loginBase.emailFieldC, mail)
    await waitAndClick(loginBase.welcomeScreenVerify1C)
    await waitAndClick(this.forgotPasswordButton);
    await waitForDisplay(this.forgotPasswordScreenContentVerify1);
    const data = await waitAndGetText(this.forgotPasswordInputField)
    await expect(data).toEqual(mail.toLowerCase())
  }
  async verifyAutoPopulatePhone() {
    await waitAndClick(loginBase.getStartedBtnC,20000);
    await waitAndSetValue(loginBase.emailFieldC, '5678767878')
    await waitAndClick(loginBase.welcomeScreenVerify1C)
    await waitAndClick(this.forgotPasswordButton);
    await waitForDisplay(this.forgotPasswordScreenContentVerify1);
    const data = await waitAndGetText(this.forgotPasswordInputField)
    await expect(data).toEqual('5678767878')
  }
  async verifycountryCodePretfixAfterEnteringPhoneNumber() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, '5678767878')
    await waitForDisplay(loginBase.phoneNumerPrefixC);
  }
  async verifyEmptyOtpValidation() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, '5676567676')
    await waitAndClick(this.sendButton);
    await browser.back();
    let toastAppeared = false;
    while (!toastAppeared) {
      try {
        await waitAndClick(this.verifyButton);
        await browser.pause(500);
        const toastMessage = await waitAndGetText(this.invalidOtpToast)
        await expect(toastMessage).toBe('Please enter otp');
        toastAppeared = true; // Set the flag to exit the loop if the toast appeared successfully
      } catch (error) {
        // Handle the timeout by clicking the "verify" button again
        console.error('Timeout occurred. Clicking the "verify" button again.');
      }
    }
  }
  async verifyErrorMsgForFewerDigits() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, '5676567676')
    await waitAndClick(this.sendButton)
  }
  async verifycountryCodePretfixAfterEnteringMailId() {
    await this.verifycountryCodePretfixAfterEnteringcombinationOFAlpaNumber();
  }
  async verifycountryCodePretfixAfterEnteringcombinationOFAlpaNumber() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, 'vcus5627@yopmail.com')
    await waitForDisplay(loginBase.emailPrefixC);
  }
  async verifyInvalidEmailFormatRestriction() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, 'vcus5627')
    await waitAndClick(this.sendButton)
    await waitForDisplay(loginBase.invalidMailCheck1C);
    await waitAndSetValue(this.forgotPasswordInputField, 'vcus5627@')
    await waitAndClick(this.sendButton)
    await waitForDisplay(loginBase.invalidMailCheck1C);
    await waitAndSetValue(this.forgotPasswordInputField, 'vcus5627@yopmail.')
    await waitAndClick(this.sendButton)
    await waitForDisplay(loginBase.invalidMailCheck1C);
  }
  async verifyForgotPasswordEmptyValidation() {
    await this.forgotPasswordBase();
    await waitAndClick(this.sendButton)
    await waitForDisplay(loginBase.emptyFieldCheckC);
  }
  async verifyNavigationToOtpScreen() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, appMailUpper)
    await waitAndClick(this.sendButton)
    const expectedText = `We’ve just send you 4 digits code to your ${appMailUpper.toLowerCase()}`;
    if (browser.isAndroid) {
      var expectedText2 = `xpath://android.widget.TextView[@text="${expectedText}"]`
    } else {
      var expectedText2 = `//XCUIElementTypeStaticText[@name="${expectedText}"]`
    }
    await waitForDisplay(expectedText2);
  }
  async verifyNavigationToOtpScreenForPhone() {
    await this.forgotPasswordBase();
    await browser.pause(1000)
    await waitAndSetValue(this.forgotPasswordInputField, phone)
    if (browser.isIOS) {
      await waitAndSetValue(this.forgotPasswordInputField, phone)
    }
    await waitAndClick(this.sendButton)
    const expectedText = `We’ve just send you 4 digits code to your +1${phone}`;
    if (browser.isAndroid) {
      var expectedText2 = `xpath://android.widget.TextView[@text="${expectedText}"]`
    } else {
      var expectedText2 = `//XCUIElementTypeStaticText[@name="${expectedText}"]`
    }
    await waitForDisplay(expectedText2);
  }
  async verifyAppNavigationToHomeScreenFromOtpScreen() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, phone)
    if (browser.isIOS) {
      await waitAndSetValue(this.forgotPasswordInputField, phone)
    }
    await waitAndClick(this.sendButton)
    await waitForDisplay(this.otpScreenContentCheck2)
    await browser.terminateApp(pack)
    await browser.activateApp(pack)
    await waitForDisplay(loginBase.welcomeScreenVerify1C, 20000);
  }
  async getOtp(newUser) {
    const client = new MongoClient(MangoUrl);
    try {
      await client.connect();
      console.log("Connected to MongoDB");

      const db = client.db(MangoDbPath);
      const collection = db.collection("users");
      newUser = newUser.toLowerCase()
      const documents = await collection.find({ email: newUser }).toArray();
      const otp = await documents[0]["otpToken"];
      return otp;
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  }
  async enterOtp() {
    const otp = await this.getOtp(mail);
    await expect(otp).not.toBeUndefined();
    await waitAndSetValue(this.otpInputField1, otp.charAt(0)),
    await waitAndSetValue(this.otpInputField2, otp.charAt(1)),
    await waitAndSetValue(this.otpInputField3, otp.charAt(2)),
    await waitAndSetValue(this.otpInputField4, otp.charAt(3))
  }
  async verifyNavigationToChangePasswordScreen() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, mail)
    if (browser.isIOS) {
      await waitAndSetValue(this.forgotPasswordInputField, mail)
    }
    await waitAndClick(this.sendButton)
    await this.enterOtp()
    await waitAndClick(this.verifyButton)
    await Promise.all([
      waitForDisplay(this.changePasswordScreenContent2),
      waitForDisplay(this.changePasswordScreenContent1),
      waitForDisplay(this.passwordField),
      waitForDisplay(this.confirmPasswordField),
      waitForDisplay(this.saveBtn),
      waitForNoDisplay(this.backBtn)

    ])
  }
  async moveToPassScreen() {
    await browser.pause(1500)
    await waitAndSetValue(this.forgotPasswordInputField, mail);
    if (browser.isIOS) {
      await waitAndSetValue(this.forgotPasswordInputField, mail);
    }
    await waitAndClick(this.sendButton)
    await this.enterOtp()
    await waitAndClick(this.verifyButton)
    await waitForDisplay(this.changePasswordScreenContent2)
  }
  async verifyPasswordLengthValidation() {
    await this.forgotPasswordBase();
    await this.moveToPassScreen()
    await waitAndSetValue(this.passwordField, '324')
    await waitAndClick(this.saveBtn)
    if (browser.isIOS) {
      await waitAndClick(this.saveBtn)
    }
    await waitForDisplay(this.changePasswordErrorMsg2)
  }
  async verifyPasswordMismatch() {
    await this.forgotPasswordBase();
    await this.moveToPassScreen()
    await Promise.all([
      waitAndSetValue(this.passwordField, '324'),
      waitAndSetValue(this.confirmPasswordField, 'dvsdyft')
    ])
    await waitAndClick(this.saveBtn)
    if (browser.isIOS) {
      await waitAndClick(this.saveBtn)
    }
    await waitForDisplay(this.changePasswordErrorMsg1)
  }
  async verifyNavigationToWalkthruScreenAfterReopeningFromOtpScreen() {
    await this.forgotPasswordBase();
    await this.moveToPassScreen()
    await browser.terminateApp(pack)
    await browser.activateApp(pack)
    await waitForDisplay(loginBase.loginVerifyC, 30000)
  }
  async verifyNavigationToWalkthruAfterEnterValidPassword() {
    await this.forgotPasswordBase();
    await this.moveToPassScreen()
    await Promise.all([
      waitAndSetValue(this.passwordField, '123123'),
      waitAndSetValue(this.confirmPasswordField, '123123')
    ])
    if (browser.isIOS)
    {
      await waitAndClick(this.changePasswordScreenContent1)
    }
    await waitAndClick(this.saveBtn)
    await waitForDisplay(loginBase.loginVerifyC, 30000)
  }
  async verifyEmptyValidationOnChangePasswordScreen() {
    await this.forgotPasswordBase();
    await this.moveToPassScreen()
    await waitAndClick(this.saveBtn)
    await Promise.all([
      waitForDisplay(this.changePasswordErrorMsg),
      waitForDisplay(this.changePasswordErrorMsg1)
    ])
  }
  async forgotPasswordBackButtonClick() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, phone)
    if (browser.isIOS) {
      await waitAndSetValue(this.forgotPasswordInputField, phone)
    }
    await waitAndClick(this.sendButton)
    await waitAndClick(this.otpBackButton)
    await waitForDisplay(this.forgotPasswordScreenContentVerify1)
  }
  async verifyElementsOnOtpScreen() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, phone)
    if (browser.isIOS) {
      await waitAndSetValue(this.forgotPasswordInputField, phone)
    }
    await waitAndClick(this.sendButton)
    await Promise.all([
      waitForDisplay(this.otpScreenContentCheck2),
      waitForDisplay(this.otpInputField1),
      waitForDisplay(this.otpInputField2),
      waitForDisplay(this.otpInputField3),
      waitForDisplay(this.otpInputField4),
      waitForDisplay(this.verifyButton),
      waitForDisplay(this.otpBackButton)
    ])
  }
  async verifyForgotpasswordAppOpens() {
    await this.forgotPasswordBase();
    if (browser.isAndroid) {
      await browser.terminateApp(appPackageName)
      await browser.activateApp(appPackageName)
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitForDisplay(loginBase.welcomeScreenVerify1C, 30000)
  }
  async verifycountryCodeRestrictiononInputField() {
    await this.forgotPasswordBase();
    await waitAndSetValue(this.forgotPasswordInputField, '+18787898787')
    await elemnetToHaveText(this.forgotPasswordInputField, '+18787898787')
  }
  async verifyphoneLengthValidation() {
    if (browser.isAndroid) {
      await this.forgotPasswordBase();
      await waitAndSetValue(this.forgotPasswordInputField, '786889878')
      await waitAndClick(this.sendButton)
      await waitForDisplay(loginBase.phoneNumberLengthValidateMsg1C)
      await waitAndSetValue(this.forgotPasswordInputField, '78767676567')
      await waitAndClick(this.sendButton)
      await waitForDisplay(loginBase.phoneNumberLengthValidateMsg1C)
    }
  }
  async forgotPasswordBase() {
    await waitForDisplay(loginBase.getStartedBtnC,20000)
    await Promise.all([
      waitAndClick(loginBase.getStartedBtnC)
    ])
    await waitAndClick(this.forgotPasswordButton)
    await waitForDisplay(this.forgotPasswordScreenContentVerify1)
  }

}

export default new ForgotForgot();
