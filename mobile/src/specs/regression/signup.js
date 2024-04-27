import { appPackageName, iosPackageName } from "../../../config.js";
import Signup from "../../pageobjects/signup.base.js";
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
// import {invalidMailID, appMailLower, appPassword, appMailUpper} from "../../../config.js"
describe("Signup Module", () => {
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
  it("Verify Elements on Signup Form Screen", async () => {
    await Signup.verifyElemetsOnSignupScreen();
  });
  it('Verify that back option is working in signup form', async() => {
    await Signup.verifyBackOption();
  });
  it('verify navigation from signup form to login screen', async() => {
    await Signup.verifyNavigationToLoginScreen();
  });
  it('Verify App Navigation to get started After Reopening (App Closed on Signup Screen)', async() => {
    await Signup.verifyNavigationToGetStartedFromSignup()
  });
  it('Verify Space Restriction for First Name Field', async() => {
    await Signup.verifySpaceRestrictionForFirstNameField()
  });
  it('Verify Space Restriction for Last Name Field', async() => {
    await Signup.verifytSpaceRestrictionForLastName();
  });
  it('Verify Signup Form Empty Validation', async() => {
    await Signup.verifyFormEmptyValidation();
  });
  it('Verify First Name Field Validation', async() => {
    await Signup.verifyFieldValidation('', 'K', generateRandomEmail(), generateRandomPhoneNumber(), 'kato', '123123', '123123');
  });
  it('Verify Optional Last Name Field', async() => {
    await Signup.verifySignup('Hello', '', generateRandomEmail(), generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify Mandatory Organization Name Field Validation', async() => {
    await Signup.verifyFieldValidation('Hello', 'K', generateRandomEmail(), generateRandomPhoneNumber(), '', '123123', '123123');
  });
  it('Verify that sigup form show error message if email and phone number field leave as empty', async() => {
    await Signup.verifyFieldValidation('Hello', 'K', '' , '' , 'Kato', '123123', '123123');
  });
  it('Verify that length validation is working for phone number field', async() => {
    await Signup.verifyPhoneFieldValidation('Hello', 'K', generateRandomEmail(), '5676' , '87898766565', '123123', '123123');
  });
  it('Verify invalid mail ID is restricted if we enter invalid mail and valid Phone', async() => {
    await Signup.verifyMailValidation('Kato', 'K', 'vaus', generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify invalid phone is restricted if we enter valid mail and invalid Phone', async() => {
    await Signup.verifyPhoneValidation('Kato', 'K', generateRandomEmail(), '6868', '123123', '123123');
  });
  it('Verify invalid mail ID is restricted', async() => {
    await Signup.verifyMailValidation1('Kato', 'K', 'yusvu@', '', '123123', '123123');
  });
  it('Verify Password Mismatch Error on Signup Form Screen', async() => {
    await Signup.verifyPasswordMismatchValidation()
  });
  it('Verify Password Field Validation', async() => {
    await Signup.verifyPasswordValidation('Hello', 'K', generateRandomEmail(), generateRandomPhoneNumber(), '', '');
  });
  it('Verify Password Field Hide and Unhide Feature', async() => {
    await Signup.verifyPasswordFieldHideAndUnhideFeature();
  });
  it('Verify Confirm Password Field Hide and Unhide Feature', async() => {
    await Signup.verifyConfrimPasswordFieldHideAndUnhideFeature();
  });
  it('Verify that signup process is working for invited mail', async() => {
    await Signup.verifyInvitedMailSignupWorking('Hello', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify that signup process is working for invited mail with new phone number', async() => {
    await Signup.verifyInvitedMailSignupWorking('Hello', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify No Data in Various Tabs After Signup', async() => {
    await Signup.verifyNoDataAfterSignup('Hello', 'K', generateRandomEmail(), generateRandomPhoneNumber(), '123123', '123123')
  });
  it('Verify that signup flow working for Organisation', async() => {
    await Signup.verifyOrganisationFlow('Hello', 'K', generateRandomEmail(),generateRandomPhoneNumber(), 'OrgKato', '123123', '123123');
  });
  it('Verify that signup flow working for Agent', async() => {
    await Signup.verifyAgentFlow('Hello', 'K', generateRandomEmail(),generateRandomPhoneNumber(), 'AgentKato', '123123', '123123');
  });
  it('Verify Elements on "Choose Your Plan" Screen', async() => {
    await Signup.verifyElementsOnChooseYourPlan('Hello', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify Features Listed After Clicking "Read More" Option for Individual/SMB/Enterprise Plan with Tick and Cross States', async() => {
    await Signup.verifyContentForPlan('Hello', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify Price Change for Individual/SMB/Enterprise Plan from Monthly to Yearly Subscription', async() => {
    await Signup.verifyChangePlan('Hello', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify that individual plan subcription flow is working', async() => {
    await Signup.verifyIndiPlanFlow('Indi', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify that SMB plan subcription flow is working', async() => {
    await Signup.verifySMBPlanFlow('SMB', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify that Enterprice plan subcription flow is working', async() => {
    await Signup.verifyEnterpricePlanFlow('Enterprice', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify that price Syc for Choose plan screen and Subcription Screen', async() => {
    await Signup.verifyPriceCheckYearly('TestPrice', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123')
  });
  it('Verify that default free plan feature is working, if we close the app on choose plan screen', async() => {
    await Signup.verifyDefaultFreePlanFeature('TestDefualtPlan', 'K', generateRandomEmail(),generateRandomPhoneNumber(), '123123', '123123');
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
function generateRandomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = 'user';
  
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    email += characters.charAt(randomIndex);
  }
  
  email += '@yopmail.com';
  return email;
}
function generateRandomPhoneNumber() {
  const digits = '0123456789';
  let phoneNumber = '';


  // Generating 10 random digits for the phone number
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    phoneNumber += digits.charAt(randomIndex);
  }

  return phoneNumber;
}

async function enablePermission()
{
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.ACCESS_FINE_LOCATION`);   
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.WRITE_EXTERNAL_STORAGE`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.CAMERA`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.POST_NOTIFICATIONS`)
}