import { appPackageName, iosPackageName } from "../../../config.js";
import DirectShare from "../../pageobjects/directShare.base.js";
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
const pack = browser.isAndroid ? appPackageName : iosPackageName
describe("Direct Share Smoke", () => {
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
  it("Verify that directShare flow working", async () => {
      await DirectShare.verifyDirectScreen();
  });
  after(async () => {
      await browser.terminateApp(pack)
      await browser.terminateApp(pack)
  });
});

async function enablePermission()
{
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.ACCESS_FINE_LOCATION`);   
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.WRITE_EXTERNAL_STORAGE`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.CAMERA`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.POST_NOTIFICATIONS`)
}