import { appPackageName, iosPackageName } from "../../../config.js";
import Signup from "../../pageobjects/signup.base.js";
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
// import {invalidMailID, appMailLower, appPassword, appMailUpper} from "../../../config.js"
describe("Signup Smoke", () => {
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
  it("Verify that signup flow working for both mail,phone", async () => {
    await Signup.verifySignup('name', 'K', generateRandomEmail(), generateRandomPhoneNumber(), '123123', '123123');
  });
  it('Verify that signup flow for mail', async () => {
    await Signup.verifySignup('name', 'K', generateRandomEmail(), '', '123123', '123123');
  });
  it('Verify that signup foe for phone', async () => {
    await Signup.verifySignup('name', 'K', '', generateRandomPhoneNumber(), '123123', '123123');
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

async function enablePermission() {
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.ACCESS_FINE_LOCATION`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.WRITE_EXTERNAL_STORAGE`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.CAMERA`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.POST_NOTIFICATIONS`)
}