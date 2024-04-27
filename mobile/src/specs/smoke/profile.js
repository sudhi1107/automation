import { appPackageName, iosPackageName } from "../../../config.js";
import Profile from "../../pageobjects/profile.base.js";
import { promisify } from 'util';
import { exec } from 'child_process';
const pack = browser.isAndroid ? appPackageName : iosPackageName
const asyncExec = promisify(exec);
describe("Profile Smoke", () => {
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
  it("Verify that change password flow is working", async () => {
    await Profile.checkPasswordChange('123123');
  });
  it('Verify that delete account is working', async() => {
    await Profile.deleteAccountCheck();
  });
  it('Verify that agent link feature is working for individual', async() => {
    await Profile.linkAgentCheck('Org');
  });
  it('Verify that agent link feature is working for organisation', async() => {
    await Profile.linkAgentCheck('Indi');
  });
  it('Verify that logo Upload is working', async() => {
    await Profile.logoUploadCheck();
  });
  it('Verify that save edit profile is working', async() => {
    await Profile.saveEditProfile();
  });
  after(async () => {
    await browser.terminateApp(pack)
    await browser.terminateApp(pack)
});
  async function enablePermission()
{
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.ACCESS_FINE_LOCATION`);   
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.WRITE_EXTERNAL_STORAGE`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.CAMERA`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.POST_NOTIFICATIONS`)
}
});