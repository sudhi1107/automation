import CreateVideoClip from "../../pageobjects/createVideoClip.base.js";
import { promisify } from 'util';
import { exec } from 'child_process';
import { appPackageName, iosPackageName } from "../../../config.js";
const pack = browser.isAndroid ? appPackageName : iosPackageName
const asyncExec = promisify(exec);
describe("createVideoClip Module", () => {
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
  it("Verify that multi choice with No option creation is working", async () => {
    await CreateVideoClip.verifyMultiChoiceNoCreation('MultiNo');
  });
  it('Verify that multi choice with Yes option creation is working', async () => {
    await CreateVideoClip.verifyMultiChoiceYesCreation('Multiyes');
  });
  it('Verify that Normal text creation is working', async () => {
    await CreateVideoClip.createText(`Normal Text`);
  });
  it('Verify that Multi Line text creation is working', async () => {
    await CreateVideoClip.createText(`Multiline Text`);
  });
  it('Verify that Phone Number text creation is working', async () => {
    await CreateVideoClip.createText(`Phone Number`);
  });
  it('Verify that Email text creation is working', async () => {
    await CreateVideoClip.createText(`Email`);
  });
  it('Verify that Address text creation is working', async () => {
    await CreateVideoClip.createText(`Address`);
  });
  it('Verify that Image type creation is working', async () => {
    await CreateVideoClip.createSingleInputTypes('Image');
  });
  it('Verify that Video type creation is working', async () => {
    await CreateVideoClip.createSingleInputTypes('Video');
  });
  it('Verify that Audio type creation is working', async () => {
    await CreateVideoClip.createSingleInputTypes('Audio');
  });
  it('Verify that Star type creation is working', async () => {
    await CreateVideoClip.createSingleInputTypes('Star');
  });
  it('Verify that Open type creation is working', async () => {
    await CreateVideoClip.createSingleInputTypes('Open');
  });
  it('Verify that Scale type creation is working', async () => {
    await CreateVideoClip.createSingleInputTypes('Scale');
  });
  it('Verify that Button type Creation is working', async () => {
    await CreateVideoClip.createbuttonType('Button');
  });
  it.only('Verify that branch type creation is working', async () => {
    await CreateVideoClip.createbranchType('Branching');
  });
  it('Verify that form type creation is working', async () => {
    await CreateVideoClip.createformType('Form');
  });
  it('Verify that after create Video with custom tag, It points to specific tag', async () => {
    await CreateVideoClip.createClipWithCustomTag('ExplainerWithTag');
  });
  it('Verify that update video Clip is working', async () => {
    await CreateVideoClip.updateClip('ExplainerUpdateToText');
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