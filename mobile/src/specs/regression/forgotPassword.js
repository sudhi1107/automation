import { appPackageName, iosPackageName } from "../../../config.js";
import ForgotPassword from "../../pageobjects/forgotPassword.base.js";
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
// import {invalidMailID, appMailLower, appPassword, appMailUpper} from "../../../config.js"
describe("forgotPassword Module", () => {
  before(async () => {
    await browser.reloadSession()
    if (browser.isAndroid) {
      await enablePermission();
    }
  });
  afterEach(async () => {
    await browser.reloadSession()
    if (browser.isAndroid) {
      await enablePermission();
    }
  });
  it("Verify Elements and Content on 'Forgot Password' Screen", async () => {
    await ForgotPassword.verifyElementsOnForgotPasswordScreen();
  });
  it('Verify that back option is working on Forgot password screen', async() => {
    await ForgotPassword.verifyBackBtn();
  });
  it('Verify mailId auto populate is working from login screen', async() => {
    await ForgotPassword.verifyAutoPopulateMailId();
  });
  it('Verify phone number auto populate is working from login screen', async() => {
    await ForgotPassword.verifyAutoPopulatePhone();
  });
  it('Verify Automatic Country Code Prefix After Entering Phone Number', async() => {
    await ForgotPassword.verifycountryCodePretfixAfterEnteringPhoneNumber();
  });
  it('Verify Automatic Email Logo Prefix After Entering Alphabets', async() => {
    await ForgotPassword.verifycountryCodePretfixAfterEnteringMailId();
  });
  it('Verify Automatic Email Logo Prefix After Entering Alphabets and Numbers', async() => {
    await ForgotPassword.verifycountryCodePretfixAfterEnteringcombinationOFAlpaNumber();
  });
  it('Verify Phone length validation is working on forgot password screen', async() => {
    await ForgotPassword.verifyphoneLengthValidation();
  });
  it('Verify Invalid Email Format Restriction and Error Handling', async() => {
    await ForgotPassword.verifyInvalidEmailFormatRestriction();
  });
  it('Verify Restriction on Entering a Country Code in the Input Field', async() => {
    await ForgotPassword.verifycountryCodeRestrictiononInputField();
  });
  it('Verify Empty Field Validation on "Forgot Password" Screen', async() => {
    await ForgotPassword.verifyForgotPasswordEmptyValidation();
  });
  it('Verify app navigate to let started screen if app reopen from forgot passowrd screen', async() => {
    await ForgotPassword.verifyForgotpasswordAppOpens();
  });
  it('Verify Navigation to OTP Verification Screen After Providing Valid Email ID', async() => {
    await ForgotPassword.verifyNavigationToOtpScreen();
  });
  it('Verify Navigation to OTP Verification Screen After Providing Valid Phone number', async() => {
    await ForgotPassword.verifyNavigationToOtpScreenForPhone();
  });
  it('Verify Elements on OTP (One-Time Password) Screen', async() => {
    await ForgotPassword.verifyElementsOnOtpScreen();
  });
  it('Verify App Navigation to Home Screen After Reopening (App Closed on OTP Screen)', async() => {
    await ForgotPassword.verifyAppNavigationToHomeScreenFromOtpScreen();
  });
  it('Verify Navigation to Forgot password screen After Clicking "Back" on OTP Screen', async() => {
    await ForgotPassword.forgotPasswordBackButtonClick();
  });
  it('Verify OTP Verification and Navigation to Change Password Screen', async() => {
    await ForgotPassword.verifyNavigationToChangePasswordScreen();
  });
  it('Verify Empty Field Validation on "Change Password" Screen', async() => {
    await ForgotPassword.verifyEmptyValidationOnChangePasswordScreen()
  });
  it('Verify Password Length Validation on "Change Password" Screen', async() => {
    await ForgotPassword.verifyPasswordLengthValidation()
  });
  it('Verify Password Mismatch Detection on "Change Password" Screen', async() => {
    await ForgotPassword.verifyPasswordMismatch();
  });
  it('Verify Navigation to "My Walkthru" After Reopening the App (It close in change password screen)', async() => {
    await ForgotPassword.verifyNavigationToWalkthruScreenAfterReopeningFromOtpScreen();
  });
  after(async () => {
    if (browser.isAndroid) {
      await browser.terminateApp(appPackageName)
    }
    else if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
    }
  });
});

async function enablePermission()
{
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.ACCESS_FINE_LOCATION`);   
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.WRITE_EXTERNAL_STORAGE`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.CAMERA`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.POST_NOTIFICATIONS`)
}