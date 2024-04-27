import Profile from "../../pageobjects/profile.base.js";
import { appPackageName } from "../../../config.js"
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
describe("Profile Module", () => {
    before(async () => {
        await enablePermission();
        await browser.activateApp(appPackageName)
    });
    afterEach(async () => {
        await asyncExec(`adb shell pm clear ${appPackageName}`);
        await enablePermission();
        await browser.startActivity(appPackageName, '.MainActivity');
    });
    it("Verify Profile Button in My Walkthru/Engage/Library/Community", async () => {
        await Profile.verifyProfileButtonOnVeriousScreen();
    });
    it('Verify Back Button Functionality in Profile Screen for my walkthru screen', async() => {
        await Profile.verifyBackForWalkthruScreen();
    });
    it('Verify Elements in Profile Screen for Agent', async() => {
        await Profile.verifyElementsOnProfileScreen("Agent");
    });
    it('Verify Elements in Profile Screen for Indi', async() => {
        await Profile.verifyElementsOnProfileScreen("Indi");
    });
    it('Verify Elements in Profile Screen for Organization', async() => {
        await Profile.verifyElementsOnProfileScreen("Org");
    });
    it('Verify that Subscription Validity for free plan', async() => {
        await Profile.verifySubCriptionValidity('free');
    });
    // it.skip('Verify that Subscription Validity for monthy Indi', async() => {
    //     await Profile.verifySubCriptionValidity('monthly');
    // });
    // it.skip('Verify that Subscription Validity for yearly Indi', async() => {
    //     await Profile.verifySubCriptionValidity('yearly');
    // });
    it('Verify that about screen navigation is working', async() => {
        await Profile.verifyAboutScreenNavigation();
    });
    it('Verify that for agent connect feature is disabled', async() => {
        await Profile.verifyForAgentConnectFeature();
    });
    it('Verify that add organization feature is working', async() => {
        await Profile.addOrganizationFeature();
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