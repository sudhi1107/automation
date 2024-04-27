import Login from '../../pageobjects/login.base.js';
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
import { appMailUpper, appPassword, appPhone, appPackageName, iosPackageName } from '../../../config.js'
describe("Login Smoke", () => {
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
  it('Verify login with valid credentials with Caps - Mail', async () => {
    await Login.verifyLoginFeatureByEmialIDCaps(appMailUpper, appPassword);
  });
  it('Verify login with valid creadentials - phone', async () => {
    await Login.verifyLoginFeatureForValidCredentials(appPhone, appPassword);
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

async function enablePermission() {


  const permissions = [
    'android.permission.ACCESS_FINE_LOCATION',
    'android.permission.WRITE_EXTERNAL_STORAGE',
    'android.permission.CAMERA',
    'android.permission.POST_NOTIFICATIONS'
  ];
  for (const permission of permissions) {
    await asyncExec(`adb shell pm grant ${appPackageName} ${permission}`);
  }


}