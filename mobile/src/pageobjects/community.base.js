/**
 * sub page containing specific selectors and methods for a specific page
 */
import { MangoDbPath, MangoUrl, appMailUpper, appPassword, iosPackageName } from "../../config.js";
import communityConstants from "../elementBase/community.ele.js"
import { MongoClient } from "mongodb";
import loginBase from "./login.base.js";
import { blackClick, waitAndClick, waitAndSetValue, waitForDisplay } from "../helper/helper.js";
class Community {

  get communityBtn() {
    return communityConstants.communityBtn
  }
  get searchFieldBtn() {
    return communityConstants.searchFieldBtn
  }
  get selectAiClicp() {
    return communityConstants.selectAiClicp
  }
  get searchField() {
    return communityConstants.searchField
  }
  get cloneAiFunnelBtn() {
    return communityConstants.cloneAiFunnelBtn
  }
  get cloneConfrimBtn() {
    return communityConstants.cloneConfrimBtn
  }
  get videoLibraryBtn() {
    return communityConstants.videoLibraryBtn
  }
  get cloneVideoClipBtn() {
    return communityConstants.cloneVideoClipBtn
  }
  get AiFunnelsBtn() {
    return communityConstants.AiFunnelsBtn
  }
  get selectVideoClip() {
    return communityConstants.selectVideoClip
  }
  get communityText() {
    return communityConstants.communityText
  }
  get funnelText() {
    return communityConstants.funnelText
  }
  get videoLibraryText() {
    return communityConstants.videoLibraryText
  }
  get noDataMsg() {
    return communityConstants.noDataMsg
  }
  get agentDetailBtn() {
    return communityConstants.agentDetailBtn
  }
  get agentEditBtn() {
    return communityConstants.agentEditBtn
  }
  async elementVerify() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(this.communityBtn, 20000)
    await Promise.all([
      waitForDisplay(this.AiFunnelsBtn),
      waitForDisplay(this.videoLibraryBtn),
      waitForDisplay(this.searchFieldBtn),
      waitForDisplay(this.communityText)
    ])
    await waitAndClick(this.AiFunnelsBtn)
    await waitAndClick(this.searchFieldBtn)
    await waitForDisplay(this.funnelText)
  }
  async elementVerify1() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(this.communityBtn, 20000)
    await waitAndClick(this.videoLibraryBtn)
    await waitAndClick(this.searchFieldBtn)
    await waitForDisplay(this.videoLibraryText)
  }

  async verifyNoDataAI() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(this.communityBtn, 20000)
    await waitAndClick(this.AiFunnelsBtn)
    await this.noDataCheck()
  }

  async noDataCheck() {
    await waitAndClick(this.searchFieldBtn)
    await waitAndSetValue(this.searchField, 'dvydniusbicnsid')
    await browser.back();
    await waitForDisplay(this.noDataMsg)
  }
  async verifyNoDataVideo() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(this.communityBtn, 20000)
    await waitAndClick(this.videoLibraryBtn)
    await this.noDataCheck()
  }


  async getDataFromDb(data) {
    const client = new MongoClient(MangoUrl);

    try {
      await client.connect();
      console.log("Connected to MongoDB");
      const db = client.db(MangoDbPath);
      let result
      switch (data) {
        case "collections":
          const collection2 = db.collection(data);
          const randomVideoClip = await collection2.aggregate([{ $match: { deleted: { $ne: true }, visibility: "public", status: "approved" }, }, { $sample: { size: 1 } }]).next();
          result = randomVideoClip ? randomVideoClip.name : null;
          console.log(`${result} is Retrived data.`);
          break
        case "videoclips":
          const collection3 = db.collection(data);
          const randomVideoClip1 = await collection3.aggregate([{ $match: { deleted: { $ne: true }, visibility: "public", status: "approved" }, }, { $sample: { size: 1 } }]).next();
          result = randomVideoClip1 ? randomVideoClip1.title : null;
          console.log(`${result} is Retrived data.`);
          break
        default:
          throw new Error("Invalid data type");
      }
      return result
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  }

  async cloneBase(result, data) {
    await waitAndClick(this.searchFieldBtn)
    await waitAndSetValue(this.searchField, result)
    await browser.back();
    if (browser.isIOS) {
      await blackClick()
    }
    await waitAndClick(data === "AI" ? this.selectAiClicp : this.selectVideoClip)
    await waitAndClick(data === "AI" ? this.cloneAiFunnelBtn : this.cloneVideoClipBtn)
    await waitAndClick(this.cloneConfrimBtn)
    if (browser.isAndroid) {
      await waitForDisplay(`//android.widget.TextView[@text="${result}"]`, 10000)
    }
    else {
      await waitAndClick(this.agentDetailBtn)
      await waitAndClick(this.agentEditBtn)
      await waitForDisplay(`//XCUIElementTypeTextField[@value="${result}"]`, 10000)
    }
  }

  async verifyAICloneFeature(a, b) {
    await loginBase.verifyLoginFeatureForValidCredentials(a, b);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName);
      await browser.activateApp(iosPackageName);
  }  
    const result = await this.getDataFromDb("collections");
    await waitAndClick(this.communityBtn)
    await waitAndClick(this.AiFunnelsBtn)
    await this.cloneBase(result, "AI");
  }
  async verifyVideoCloneFeature(a, b) {
    await loginBase.verifyLoginFeatureForValidCredentials(a, b);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName);
      await browser.activateApp(iosPackageName);
  }  
    const result = await this.getDataFromDb("videoclips");
    await waitAndClick(this.communityBtn)
    await waitAndClick(this.videoLibraryBtn)
    await this.cloneBase(result, "Video");
  }
}

export default new Community();
