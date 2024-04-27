import Community from '../../pageobjects/community.base.js';
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
import { appPassword, appPackageName, iosPackageName, appMailUpper, iosAppMailUpper } from '../../../config.js'
const pack = browser.isAndroid ? appPackageName : iosPackageName
const mail = browser.isAndroid ? appMailUpper : iosAppMailUpper
describe("Community Smoke", () => {
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
  it('Verify that AI Funnels clone feature is working', async () => {
    await Community.verifyAICloneFeature(mail, appPassword);
  });
  it.only('Verify that video library clone is working', async () => {
    await Community.verifyVideoCloneFeature(mail, appPassword);
  });
  after(async () => {
    await browser.terminateApp(pack)
    await browser.terminateApp(pack)
  });
});

async function enablePermission() {
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.ACCESS_FINE_LOCATION`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.WRITE_EXTERNAL_STORAGE`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.CAMERA`);
  await asyncExec(`adb shell pm grant ${appPackageName} android.permission.POST_NOTIFICATIONS`)
}