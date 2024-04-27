import directShare from "../../pageobjects/directShare.base.js";
import { appPackageName } from "../../../config.js"
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
describe("Direct Share Module", () => {
      before(async () => {
        await enablePermission();  
        await browser.activateApp(appPackageName)
      });
      afterEach(async () => {
        await asyncExec(`adb shell pm clear ${appPackageName}`);
        await enablePermission();
        await browser.startActivity(appPackageName, '.MainActivity');
      });
    it("Verify Elements After Opening direct Walkthru ready screen", async () => {
        await directShare.elementVerify();
    });
    it('Verify share button is working', async () => {
        await directShare.verifyShareBtn();
    });
    it('Verify scan QR btn is working', async () => {
        await directShare.verifyScanQrBtn();
    });
    it.only('Verify back option on scan QR screen', async () => {
        await directShare.verifybackOnScanQrScreen();
    });
      after(async () => {
        await browser.terminateApp(appPackageName)
      });
});
async function enablePermission() {
    await asyncExec(`adb shell pm grant ${appPackageName} android.permission.ACCESS_FINE_LOCATION`);
    await asyncExec(`adb shell pm grant ${appPackageName} android.permission.WRITE_EXTERNAL_STORAGE`);
    await asyncExec(`adb shell pm grant ${appPackageName} android.permission.CAMERA`);
    await asyncExec(`adb shell pm grant ${appPackageName} android.permission.POST_NOTIFICATIONS`)
}