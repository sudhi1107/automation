import CreatePersolizedReport from "../../pageobjects/createPersolizedReport.base.js";
import { appPackageName} from "../../../config.js"
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
describe("Create Persolized Report Module", () => {
      before(async () => {
        await enablePermission();  
        await browser.activateApp(appPackageName)
      });
      afterEach(async () => {
        await asyncExec(`adb shell pm clear ${appPackageName}`);
        await enablePermission();
        await browser.startActivity(appPackageName, '.MainActivity');
      });
    it('Verify Elements on personalize screen', async() => {
        await CreatePersolizedReport.elementVerify();
    });
    it('Verify back option on Personalize Walkthru Screen', async() => {
        await CreatePersolizedReport.verifyBackOption();
    });
    it("Verify that createPersolizedReport flow working without cover image,name,meta form", async () => {
        await CreatePersolizedReport.verifyPersonalizeWithoutImage();
    });
    it('Verify share button is working', async() => {
        await CreatePersolizedReport.verifyShareBtn();
    });
    it('Verify scan QR btn is working', async() => {
        await CreatePersolizedReport.verifyScanQrBtn();
    });
    it('Verify back option on scan QR screen', async() => {
        await CreatePersolizedReport.verifybackOnScanQrScreen();
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