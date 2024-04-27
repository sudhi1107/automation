import Community from "../../pageobjects/community.base.js";
import { appPackageName } from "../../../config.js"
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
describe("Community Module", () => {
    before(async () => {
        await enablePermission();
        await browser.activateApp(appPackageName)
    });
    afterEach(async () => {
        await asyncExec(`adb shell pm clear ${appPackageName}`);
        await enablePermission();
        await browser.startActivity(appPackageName, '.MainActivity');
    });
    it("Verify Elements for Ai funnels and Community", async () => {
        await Community.elementVerify();
    });
    it('Verify that Elements for video library', async() => {
        await Community.elementVerify1();
    });
    it('Verify that No data content is displayed for unmatch data for AI', async() => {
        await Community.verifyNoDataAI();
    });
    it('Verify that No data content is displayed for unmatch data for Video', async() => {
        await Community.verifyNoDataVideo();
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