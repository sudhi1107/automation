import Engagement from "../../pageobjects/engagementResponse.base.js";
import { appPackageName } from "../../../config.js"
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
describe("Engagement Module", () => {
    before(async () => {
        await enablePermission();
        await browser.activateApp(appPackageName)
    });
    afterEach(async () => {
        await asyncExec(`adb shell pm clear ${appPackageName}`);
        await enablePermission();
        await browser.startActivity(appPackageName, '.MainActivity');
    });
    it.only("Verify Clicking on to Engage menu in the Walkthru application is working", async () => {
        await Engagement.VerifyClickOnEngagemenu();
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