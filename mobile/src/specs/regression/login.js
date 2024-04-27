import Login from "../../pageobjects/login.base.js";
import {invalidMailID, appPackageName,appMailLower, iosPackageName} from "../../../config.js"
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
describe("Login Module", () => {
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
  it("Verify Elements After Opening AI AGENT Application", async () => {
    await Login.walkthruApplicationOpenCheck();
  });
  it('Verify Navigation to "Enter Credentials" Screen After Clicking "Login" Button', async() => {
    await Login.verifyNavigateToLoginScreen();
  });
  it('Verify Navigation to "Signup form" Screen After Clicking "Signup" Button', async() => {
    await Login.verifyNavigateToSignupForm();
  });
  it.skip('Verify Navigation to Already Signed-In Google Account After Clicking "Google" Login Button', async() => {
    await Login.verifyAlreadySignedGoogleAccountAppears();
  });
  it('Verify Elements on Login Screen', async() => {
    await  Login.verifyLoginElementOnLoginScreen();
  });
  it('Verify Navigation to Get Started Screen After Reopening the Application from the Login Screen', async() => {
    await Login.verifyAutoNavigateToHomeFromLoginScreen();
  });
  it('Verify Navigation to Home Screen After Clicking "Back" on Login Screen', async() => {
    await Login.verifyBackOnLoginScreen();
  });
  it('Verify Error Message for Blank Input on Login Screen', async() => {
    await Login.verifyMessageForBlankInputOnLoginScreen();
  });
  it('Verify Automatic Country Code Prefix After Entering Phone Number', async() => {
    await Login.verifyAutomaticCountryCodePrefixAfterEnteringPhoneNumber("45676567678");
  });
  it('Verify Automatic Email Logo Prefix After Entering Alphabets', async() => {
    await Login.verifyAutomaticEmailLogoPrefixAfterEnteringMail('hvsus@gmail.com');
  });
  it('Verify Automatic Email Logo Prefix After Entering Alphabets and Numbers', async() => {
    await Login.verifyAutomaticEmailLogoPrefixAfterEnteringMailPhone('hgsy452@gmail.com')
  });
  it('Verify Phone Number Length Validation and Error handling', async() => {
    await Login.verifyphoneNumberLengthValidation("678","45676567678");
  });
  it('Verify Invalid Email Format Restriction and Error Handling', async() => {
    await Login.verifyInvalidEmailFormatRestriction("ram","ram@","ram@mial","ram@mail.")
  });
  it('Verify Restriction on Entering a Country Code in the Input Field', async() => {
    await Login.verifyCountryCodeRestriction("+18987878987");
  });
  it('Verify that invalid username is restricted', async() => {
    await Login.verifyInvalidUserNameRestriction(invalidMailID);
  });
  it('Verify that invalid password is restricted for valid user', async() => {
    await Login.verifyInvalidPasswordRestriction(appMailLower);
  });
  it.skip('Verify that after selecting google account, app logged into the my walkthru screen', async() => {
    await Login.verifyGoogleRegisterWorking();
  });
  it.skip('Verify video clip,walkthru deleted after delete google account', async() => {
    await Login.verifyClipDeletedAfterDeleteGoogleAccount();
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