import createWalkthru from "../../pageobjects/createWalkthru.base.js";
import { appPackageName, iosPackageName } from "../../../config.js"
import { promisify } from 'util';
import { exec } from 'child_process';
const asyncExec = promisify(exec);
const pack = browser.isAndroid ? appPackageName : iosPackageName
describe("Create Walkthru Module", () => {
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
  it('Verify that Dynamic AI creation is working', async() => {
    await createWalkthru.verifyDynamicAICreation();
  });
  it('Verify that without video clip video library creation is working', async() => {
    await createWalkthru.verifyDynamicAICreationWithoutVideoClip();
  });
  it('Verify validation while create dynamic video clip', async() => {
    await createWalkthru.verifyValidationForDynamicCreate();
  });
  it('Verify video clip card content/remove card option/Change to Add from Remove', async() => {
    await createWalkthru.verifyVideoClipCardContent();
  });
  it('Verify search feature is working on video library screen', async() => {
    await createWalkthru.verifySearchfeatureInVideoLibraryScreen();
  });
  it('verify back option on video library search screen', async() => {
    await createWalkthru.verifyBackOptionOnLibraryScreen();
  });
  it('Verify Navigation to Video Library Screen After Clicking Back Button in New Walkthru Screen', async() => {
    await createWalkthru.verifyBackOptionToVideoLibraryScreen();
  });
  it('Verify Empty Validation for "Walkthru Name" Field', async() => {
    await createWalkthru.verifyEmptyValidationOnWalkthruNameField();
  });
  it('Verify Content on meta form screen', async() => {
    await createWalkthru.verifyContentOnMetaFormScreen();
  });
  it('Verify edit meta form and delete meta form is working', async() => {
    await createWalkthru.verifyMetaFormUpdate();
  });
  it('Verify that after click the back button in select video clip screne,it navigate back to New wakthru screen', async() => {
    await createWalkthru.verifyBackOptionInSelectVideoClipScreen();
  });
  it('Verify Navigation Back to Walkthru Created Successfully Screen from Personalize Walkthru Screen', async() => {
    await createWalkthru.verifyBackOptionInPersonalizeScreen();
  });
  it('Verify back option on update AI funnels screen', async() => {
    await createWalkthru.verifyBackOptionOnUpdateVideoClip();
  });
  it.only('Verify update AI agent is working', async() => {
    await createWalkthru.verifyUpdateVideoClip();
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