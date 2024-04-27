import { appPackageName, iosPackageName } from "../../../config.js";
import ForgotPassword from "../../pageobjects/forgotPassword.base.js";
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
describe("forgot Smoke", () => {
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
  it('Verify Navigation to "My Walkthru" or Home Screen After Entering Valid Password', async() => {
    await ForgotPassword.verifyNavigationToWalkthruAfterEnterValidPassword();
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