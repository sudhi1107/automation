import { MangoDbPath, MangoUrl, appMailLower, appMailUpper, appPassword, iosAppMailLower, iosPackageName } from "../../config.js";
import createWalkthruConstants from "../elementBase/createWalkthru.ele.js";
import { blackClick, swipe, waitAndClick, waitAndClick2, waitAndGetText, waitAndSetValue, waitForDisplay, waitForNoDisplay } from "../helper/helper.js";
import createVideoClipBase from "./createVideoClip.base.js";
import loginBase from "./login.base.js";
import { MongoClient } from "mongodb";
var mail = browser.isAndroid ? appMailLower : iosAppMailLower
class CreateWalkthru {
  get verifyComplete() {
    return createWalkthruConstants.verifyComplete
  }
  get libraryButton() {
    return createWalkthruConstants.libraryButtonXPath
  }
  get addClipButton() {
    return createWalkthruConstants.addClipButtonXPath
  }
  get nextButton() {
    return createWalkthruConstants.nextButtonXPath
  }
  get walkthruTitleField() {
    return createWalkthruConstants.walkthruTitleFieldClassName
  }
  get metaOptionButton() {
    return createWalkthruConstants.metaOptionButtonXPath
  }
  get createWalkthruButtonmetaDataSelect() {
    return createWalkthruConstants.metaDataSelectXPath
  }
  get createWalkthruButton() {
    return createWalkthruConstants.createWalkthruButtonXPath
  }
  get verifyWalkthruCreateSuccess() {
    return createWalkthruConstants.verifyWalkthruCreateSuccessXPath
  }
  get backToLibraryButton() {
    return createWalkthruConstants.backToLibraryButtonXPath
  }
  get walkthruScreenContent1() {
    return createWalkthruConstants.walkthruScreenContent1
  }
  get walkthruScreenContent2() {
    return createWalkthruConstants.walkthruScreenContent2
  }
  get videoClipVerify() {
    return createWalkthruConstants.videoClipVerify
  }
  get addVideoClipBtn() {
    return createWalkthruConstants.addVideoClipBtn
  }
  get addclipiosBtn() {
    return createWalkthruConstants.addclipiosBtn
  }
  get visibilityBtn() {
    return createWalkthruConstants.visibilityBtn
  }
  get walkthruBackBtn() {
    return createWalkthruConstants.walkthruBackBtn
  }
  get walkthruEmptyCheck() {
    return createWalkthruConstants.walkthruEmptyCheck
  }
  get selectVideoClipScreenVerify() {
    return createWalkthruConstants.selectVideoClipScreenVerify
  }
  get galleryButton() {
    return createWalkthruConstants.galleryButton
  }
  get selectVideoClipBack() {
    return createWalkthruConstants.selectVideoClipBack
  }
  get verifyWalkthruContent1() {
    return createWalkthruConstants.verifyWalkthruContent1
  }
  get sendToCustomerBtn() {
    return createWalkthruConstants.sendToCustomerBtn
  }
  get walkthruScreenContent1() {
    return createWalkthruConstants.walkthruScreenContent1
  }
  get walkthruScreenContent2() {
    return createWalkthruConstants.walkthruScreenContent2
  }
  get videoClipVerify() {
    return createWalkthruConstants.videoClipVerify
  }
  get addVideoClipBtn() {
    return createWalkthruConstants.addVideoClipBtn
  }
  get visibilityBtn() {
    return createWalkthruConstants.visibilityBtn
  }
  get personalizeScreenContent1() {
    return createWalkthruConstants.personalizeScreenContent1
  }
  get personalizeMessageInput() {
    return createWalkthruConstants.personalizeMessageInput
  }
  get personalizeScreenContent2() {
    return createWalkthruConstants.personalizeScreenContent2
  }
  get personalizeBtn() {
    return createWalkthruConstants.personalizeBtn
  }
  get personalizeWalkthruContent1() {
    return createWalkthruConstants.personalizeWalkthruContent1
  }
  get personalizeBackBtn() {
    return createWalkthruConstants.personalizeBackBtn
  }
  get card1() {
    return createWalkthruConstants.card1
  }
  get removeBtn() {
    return createWalkthruConstants.removeBtn
  }
  get clipsCountCloseBtn() {
    return createWalkthruConstants.personalizeBackBtn
  }
  get clipContent1() {
    return createWalkthruConstants.clipContent1
  }
  get clipCountVerify() {
    return createWalkthruConstants.clipCountVerify
  }
  get searchFieldBtn() {
    return createWalkthruConstants.searchFieldBtn
  }
  get searchInputField() {
    return createWalkthruConstants.searchInputField
  }
  get editMetaBackBtn() {
    return createWalkthruConstants.editMetaBackBtn
  }
  get searchScreenBackBtn() {
    return createWalkthruConstants.searchScreenBackBtn
  }
  get libraryContentVerify() {
    return createWalkthruConstants.libraryContentVerify
  }
  get metaEditIcon() {
    return createWalkthruConstants.metaEditIcon
  }
  get metaFormContent1() {
    return createWalkthruConstants.metaFormContent1
  }
  get saveBtn() {
    return createWalkthruConstants.saveBtn
  }
  get labelField() {
    return createWalkthruConstants.labelFieldXPath
  }
  get deleteBtn() {
    return createWalkthruConstants.deleteBtn
  }
  get deleteConfirmBtn() {
    return createWalkthruConstants.deleteConfirmBtn
  }
  get previewScreen1() {
    return createWalkthruConstants.previewScreen1
  }
  get editBtn() {
    return createWalkthruConstants.editBtn
  }
  get updateScreenConten1() {
    return createWalkthruConstants.updateScreenConten1
  }
  get updateBtn() {
    return createWalkthruConstants.updateBtn
  }
  get backOnUpdateVideoClipBtn() {
    return createWalkthruConstants.backOnUpdateVideoClipBtn
  }
  get updateSuccessScreen() {
    return createWalkthruConstants.updateSuccessScreen
  }
  get cookieFormName() {
    return createWalkthruConstants.cookieFormName
  }
  get cookieLabelField() {
    return createWalkthruConstants.cookieLabelField
  }
  get saveCookieForm() {
    return createWalkthruConstants.saveCookieForm
  }
  get NewFunnelDescriptionField() {
    return createWalkthruConstants.NewFunnelDescriptionField
  }
  get shareReportBtn() {
    return createWalkthruConstants.shareReportBtn
  }
  get addClipBtn() {
    return createWalkthruConstants.addClipBtn
  }
  get walkthruEmptyCheck1() {
    return createWalkthruConstants.walkthruEmptyCheck1
  }
  get walkthruField3CharValidation() {
    return createWalkthruConstants.walkthruField3CharValidation
  }
  get cookiesBackButton() {
    return createWalkthruConstants.cookiesBackButton
  }
  get editCookieBtn() {
    return createWalkthruConstants.editCookieBtn
  }
  get deleteCookieBtn() {
    return createWalkthruConstants.deleteCookieBtn
  }
  get deleteCookieConfrimBtn() {
    return createWalkthruConstants.deleteCookieConfrimBtn
  }
  get addClipOnSearchBtn() {
    return createWalkthruConstants.addClipOnSearchBtn
  }
  get videoClipSearchBack() {
    return createWalkthruConstants.videoClipSearchBack
  }
  get persolizeBack() {
    return createWalkthruConstants.persolizeBack
  }
  get agentEditBtn() {
    return createWalkthruConstants.agentEditBtn
  }
  get card2() {
    return createWalkthruConstants.card2
  }
  get updateAIFunnelBtn() {
    return createWalkthruConstants.updateAIFunnelBtn
  }
  get backToAIFunnelButton() {
    return createWalkthruConstants.backToAIFunnelButton
  }
  get updateSuccessScreen1() {
    return createWalkthruConstants.updateSuccessScreen1
  }
  get funnelTypeBtn() {
    return createWalkthruConstants.funnelTypeBtn
  }
  get dynamicSelectBtn() {
    return createWalkthruConstants.dynamicSelectBtn
  }
  get addIntentClipBtn() {
    return createWalkthruConstants.addIntentClipBtn
  }
  get addLoopClipBtn() {
    return createWalkthruConstants.addLoopClipBtn
  }
  get addFallbackClipBtn() {
    return createWalkthruConstants.addFallbackClipBtn
  }
  get selectFallbackClip() {
    return createWalkthruConstants.selectFallbackClip
  }
  get agentClipDeleteBtn() {
    return createWalkthruConstants.agentClipDeleteBtn
  }
  get dynamicEmptyClipMsg() {
    return createWalkthruConstants.dynamicEmptyClipMsg
  }
  get addClipBtn2() {
    return createWalkthruConstants.addClipBtn2
  }
  get addClipBtn2() {
    return createWalkthruConstants.addClipBtn2
  }
  get agentClipDeleteBtn2() {
    return createWalkthruConstants.agentClipDeleteBtn2
  }
  get searchVideoClipBtn() {
    return createWalkthruConstants.searchVideoClipBtn
  }
  get videoEditBtn() {
    return createWalkthruConstants.videoEditBtn
  }
  async delProfile(newUser, data) {
    const client = new MongoClient(MangoUrl);

    try {
      await client.connect();
      console.log("Connected to MongoDB");
      const db = client.db(MangoDbPath);
      const collection = db.collection("users");
      newUser = newUser.toLowerCase();
      const documents = await collection.find({ email: newUser }).toArray();
      const userId = documents[0]["_id"];
      let result;
      switch (data) {
        case "forms":
          const collection1 = db.collection(data);
          const document1 = await collection1.deleteMany({ name: 'Cookie Form Test' });
          result = document1.deletedCount
          console.log(`${result} documents deleted.`);
          break
        case "videoclips":
          const collection2 = db.collection(data);
          const randomVideoClip = await collection2.aggregate([{ $match: { user: userId, deleted: { $ne: true } }, }, { $sample: { size: 1 } }]).next();
          result = randomVideoClip ? randomVideoClip.title : null;
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

  async createWalkthruBase() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton)
      await browser.pause(1000)
      await waitAndClick2()
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
      await waitAndClick(this.addClipBtn)
      await waitAndClick(this.addClipBtn2)
    }
    await waitAndClick(this.nextButton)
    const walkthruTitle = genRandomName()
    await waitAndSetValue(this.walkthruTitleField,walkthruTitle)
    await waitAndClick(this.metaOptionButton)
    if (browser.isAndroid) {
      await swipe('down',this.addClipBtn)
    } else {
      await waitAndClick(this.metaOptionButton)
      await browser.pause(2000)
      await swipe('down',`~addform-click`)
    }
    await waitAndClick(this.addClipBtn)
    await waitAndSetValue(this.cookieFormName,'Cookie Form Test')
    if (browser.isIOS) {
      await waitAndSetValue(this.cookieFormName,'Cookie Form Test')
    }
    const labelText = generateRandomDescriptionName()
    await waitAndSetValue(this.cookieLabelField,labelText)
    await waitAndClick(this.saveCookieForm)
    const labelText1 = labelText.charAt(0).toUpperCase() + labelText.slice(1);
    if (browser.isAndroid) {
      var element1 = `//android.widget.TextView[@text="Cookie Form Test"]`
    } else {
      var element1 = `//XCUIElementTypeOther[@label="${'Cookie Form Test' + ' ' + labelText1}"]`
    }
    await waitAndClick(this.cookiesBackButton)
    await waitAndClick(this.metaOptionButton)
    await waitAndClick(element1)
    const desText = generateRandomDescriptionName()
    await waitAndSetValue(this.NewFunnelDescriptionField,desText)
    await waitAndClick(this.createWalkthruButton)
    await Promise.all([
      waitForDisplay(this.verifyWalkthruCreateSuccess),
      waitForDisplay(this.verifyWalkthruContent1),
      waitForDisplay(this.sendToCustomerBtn),
      waitForDisplay(this.backToLibraryButton)
    ])
    await waitAndClick(this.sendToCustomerBtn)
  }

  async createWalkthru() {
    await this.delProfile(mail, 'forms')
    await this.createWalkthruBase()
    await waitAndClick(this.personalizeBtn)
    await waitForDisplay(this.shareReportBtn)
  }
  async verifyNavigationOfPersonalWalkthruScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(this.libraryButton)
    await waitAndClick2(this.addClipBtn)
    await waitAndClick(this.nextButton)
    const walkthruTitle = genRandomName()
    await this.walkthruTitleField.setValue(walkthruTitle);
    await waitAndClick(this.metaOptionButton)
    await waitAndClick(this.metaDataSelect)
    await waitAndClick(this.createWalkthruButton)
    await waitForDisplay(this.verifyWalkthruCreateSuccess)
    await waitAndClick(this.sendToCustomerBtn)
    await waitForDisplay(this.personalizeWalkthruContent1)
  }
  async verifyBackOptionInPersonalizeScreen() {
    await this.createWalkthruBase()
    await waitAndClick(this.persolizeBack)
    await waitForDisplay(this.verifyWalkthruCreateSuccess)
  }
  async verifyNavigationToPreviewScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(this.libraryButton)
    const cardText = await waitAndGetText(this.card1)
    await waitAndClick(this.card1)
    await Promise.all([
      waitForDisplay(this.previewScreen1),
      waitForDisplay(this.editBtn)
    ])
    return cardText
  }
  async verifyNavigationToUpdateVideoClipScreen() {
    await this.verifyNavigationToPreviewScreen();
    await waitAndClick(this.editBtn)
    await Promise.all([
      waitForDisplay(this.updateScreenConten1),
      waitForDisplay(this.updateBtn)
    ])
  }
  async verifyBackOptionOnUpdateVideoClip() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.verifyComplete,20000)
    await waitAndClick(this.agentEditBtn)
    await waitAndClick(this.editBtn)
    await waitAndClick(this.walkthruBackBtn)
    await waitForDisplay(this.editBtn)
  }
  async verifyUpdateVideoClip() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.verifyComplete,20000)
    await waitAndClick(this.agentEditBtn)
    await waitAndClick(this.editBtn)
    await waitAndSetValue(this.walkthruTitleField,'UpdateAITest')
    await browser.pause(1000);
    await waitAndSetValue(this.NewFunnelDescriptionField,'hgsyusts')
    if (browser.isIOS) {
      await waitAndClick(this.walkthruTitleField)
    }
    await waitAndClick(this.updateAIFunnelBtn)
    await waitForDisplay(this.updateSuccessScreen1)
    await waitAndClick(this.backToAIFunnelButton)
    if (browser.isAndroid) {
      await Promise.all([
        waitForDisplay(this.verifyComplete),
        waitForDisplay(`xpath://android.widget.TextView[@text="UpdateAITest"]`)
       ])
    }
    else
    {
      await Promise.all([
        waitForDisplay(this.verifyComplete),
        browser.pause(5000),
        waitAndClick(this.agentEditBtn),
        waitAndClick(this.editBtn),
        waitForDisplay(`//XCUIElementTypeTextField[@value="UpdateAITest"]`,10000)
       ])
    }

  }

  async verifyNavigationToSelectVideoClipScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton)
      await browser.pause(1000)
      await waitAndClick2()
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
      await waitAndClick(this.addClipBtn)
      await waitAndClick(this.addClipBtn2)
    }   
    await waitAndClick(this.nextButton)
    if (browser.isAndroid) {
      await swipe('down',`xpath://android.widget.TextView[@text=\"Add Video Clip\"]`)
    }
    else
    {
      await swipe('down',this.addclipiosBtn)
    }
    await waitForDisplay(this.walkthruScreenContent2)
    if (browser.isIOS) {
      await waitAndClick(this.addclipiosBtn)
    }
    else
    {
      await waitAndClick(`xpath://android.widget.TextView[@text=\"Add Video Clip\"]`)
    }
    await waitForDisplay(this.selectVideoClipScreenVerify)
  }


  async dynamicBase() {
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton)
      await browser.pause(1000)
      await waitAndClick2()
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
      await waitAndClick(this.addClipBtn)
      await waitAndClick(this.addClipBtn2)
    }    
    await waitAndClick(this.nextButton)
    await waitAndClick(this.funnelTypeBtn)
    await waitAndClick(this.dynamicSelectBtn)
    const walkthruTitle = genRandomName()
    const description = generateRandomDescriptionName()
    await waitAndSetValue(this.walkthruTitleField,walkthruTitle)
    await waitAndSetValue(this.NewFunnelDescriptionField,description)
    return {walkthruTitle,description}
  }

  async verifyDynamicAICreation() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    const {walkthruTitle,description} = await this.dynamicBase();
    if (browser.isAndroid) {
      await swipe('down',`xpath://android.widget.TextView[@text=\"Add Fallback Clip\"]`)
    }
    else
    {
      await waitAndClick(this.walkthruTitleField)
      await swipe('down',this.addFallbackClipBtn)
    }
    await waitAndClick(this.addFallbackClipBtn)
    await waitAndClick(this.selectFallbackClip)
    if (browser.isIOS) {
      await swipe('down',this.addLoopClipBtn)
    }
    await waitAndClick(this.addLoopClipBtn)
    await waitAndClick(this.selectFallbackClip)
    await waitAndClick(this.addIntentClipBtn)
    await waitAndClick(this.selectFallbackClip)
    await waitAndClick(this.createWalkthruButton)
    await waitForDisplay(this.backToLibraryButton)
    await waitAndClick(this.backToLibraryButton)
    await waitForDisplay(this.verifyComplete)
    if (browser.isAndroid) {
      await waitAndClick(loginBase.loginVerifyC)
      await waitForDisplay(`//android.widget.TextView[@text="${walkthruTitle}"]`,10000)
    }
    else
    {
      await waitAndClick(loginBase.loginVerifyC)
      await browser.pause(5000)
      await waitAndClick(this.agentEditBtn)
      await waitAndClick(this.editBtn)
      await waitForDisplay(`//XCUIElementTypeTextField[@value="${walkthruTitle}"]`,10000)
    }
  }

  async verifyDynamicAICreationWithoutVideoClip() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    const {walkthruTitle} = await this.dynamicBase();
    if (browser.isAndroid) {
      await swipe('down',`xpath://android.widget.TextView[@text=\"Add Fallback Clip\"]`)
    }
    else
    {
      await waitAndClick(this.walkthruTitleField)
      await swipe('down',this.addFallbackClipBtn)
    }
    await waitAndClick(this.agentClipDeleteBtn)
    await waitAndClick(this.deleteCookieConfrimBtn)
    if (browser.isIOS) {
      await swipe('down',this.addFallbackClipBtn)
      await waitAndClick(this.agentClipDeleteBtn2)
    }
    else
    {
      await waitAndClick(this.agentClipDeleteBtn)
    }
    await waitAndClick(this.deleteCookieConfrimBtn)
    if (browser.isIOS) {
      await swipe('down',this.addFallbackClipBtn)
    }
    await browser.pause(2000)
    await waitAndClick(this.addFallbackClipBtn)
    await waitAndClick(this.selectFallbackClip)
    if (browser.isIOS) {
      await swipe('down',this.addLoopClipBtn)
    }
    await waitAndClick(this.addLoopClipBtn)
    await waitAndClick(this.selectFallbackClip)
    await waitAndClick(this.addIntentClipBtn)
    await waitAndClick(this.selectFallbackClip)
    await waitAndClick(this.createWalkthruButton)
    await waitForDisplay(this.backToLibraryButton)
    await waitAndClick(this.backToLibraryButton)
    await waitAndClick(this.verifyComplete)
    if (browser.isAndroid) {
      await waitAndClick(loginBase.loginVerifyC)
      await waitForDisplay(`//android.widget.TextView[@text="${walkthruTitle}"]`,10000)
    }
    else
    {
      await waitAndClick(loginBase.loginVerifyC)
      await browser.pause(5000)
      await waitAndClick(this.agentEditBtn)
      await waitAndClick(this.editBtn)
      await waitForDisplay(`//XCUIElementTypeTextField[@value="${walkthruTitle}"]`,10000)
    }
  }

  async verifyValidationForDynamicCreate() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await this.dynamicBase();
    if (browser.isAndroid) {
      await swipe('down',`xpath://android.widget.TextView[@text=\"Add Fallback Clip\"]`)
    }
    else
    {
      await waitAndClick(this.walkthruTitleField)
      await swipe('down',this.addFallbackClipBtn)
    }    
    await waitAndClick(this.addFallbackClipBtn)
    await waitAndClick(this.selectFallbackClip)
    if (browser.isIOS) {
      await swipe('down',this.addLoopClipBtn)
    }
    await waitAndClick(this.createWalkthruButton)
    await waitForDisplay(this.dynamicEmptyClipMsg)
    await waitAndClick(this.addLoopClipBtn)
    await waitAndClick(this.selectFallbackClip)
    await waitAndClick(this.createWalkthruButton)
    await waitForDisplay(this.dynamicEmptyClipMsg)
    await waitAndClick(this.addIntentClipBtn)
    await waitAndClick(this.selectFallbackClip)
    await waitAndClick(this.createWalkthruButton)
    await waitForDisplay(this.backToLibraryButton)

  }

  async verifyVideoClipCardContent() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton)
      await browser.pause(1000)
      await waitAndClick2()
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
      await waitAndClick(this.addClipBtn)
      await waitAndClick(this.addClipBtn2)
    }   
    await Promise.all([
      waitForDisplay(this.clipContent1),
      waitForDisplay(this.nextButton),
      waitForDisplay(this.clipCountVerify),
      waitForDisplay(this.removeBtn)
    ])
    await waitAndClick(this.removeBtn)
    await waitForDisplay(this.addClipBtn)
    await waitForNoDisplay(this.clipCountVerify)
  }
  async verifySearchfeatureInVideoLibraryScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);

    const searchValue = await this.delProfile(mail, 'videoclips');
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton,20000)
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
    }   
    await waitAndClick(this.searchFieldBtn)
    await waitAndSetValue(this.searchInputField,searchValue)
    if (browser.isAndroid) {
      var checkContent = `xpath://android.widget.TextView[@text=\"${searchValue}\"]`
    }
    else
    {
      await waitAndClick(this.searchVideoClipBtn)
      await waitAndClick(this.searchVideoClipBtn)
      await waitAndClick(this.videoEditBtn)
      var checkContent = `//XCUIElementTypeTextField[@value="${searchValue}"]`
    }
    await waitForDisplay(checkContent)
  }
  async verifyBackOptionOnLibraryScreen() {
    if (browser.isIOS) {
      await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
      if (browser.isAndroid) {
        await waitAndClick(this.libraryButton,20000)
      } else {
        await browser.terminateApp(iosPackageName)
        await browser.activateApp(iosPackageName)
        await waitAndClick(this.libraryButton,20000)
      }   
      await waitAndClick(this.searchFieldBtn)
      await waitAndClick(this.searchScreenBackBtn)
      await waitForDisplay(this.libraryContentVerify)
    }
  }
  async verifyMetaFormUpdate() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton)
      await browser.pause(1000)
      await waitAndClick2()
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
      await waitAndClick(this.addClipBtn)
      await waitAndClick(this.addClipBtn2)
    }   
    await waitAndClick(this.nextButton)
    const walkthruTitle = genRandomName()
    await browser.pause(1000);
    await waitAndSetValue(this.walkthruTitleField,walkthruTitle)
    await waitAndClick(this.metaOptionButton)
    if (browser.isIOS) {
      await waitAndClick(this.metaOptionButton)
    }
    await swipe('down',this.addClipButton)
    await waitAndClick(this.addClipButton)
    await waitAndSetValue(this.cookieFormName,'Cookie Form Test1')
    const labelText = generateRandomDescriptionName()
    await waitAndSetValue(this.cookieLabelField,labelText)
    const labelText1 = labelText.charAt(0).toUpperCase() + labelText.slice(1).toLowerCase()
    await waitAndClick(this.saveCookieForm)
    await waitAndClick(this.cookiesBackButton)
    await waitAndClick(this.metaOptionButton)
    if (browser.isAndroid) {
      var element1 = `//android.widget.TextView[@text="Cookie Form Test1"]`
    }
    else
    {
      var element1 = `//XCUIElementTypeOther[@label="Cookie Form Test1 ${labelText1}"]`

    }
    await waitForDisplay(element1)
    await waitAndClick(this.editCookieBtn)
    await waitAndSetValue(this.cookieFormName,'metaTest1')
    await waitAndSetValue(this.cookieLabelField,'label2')
    await waitAndClick(this.saveCookieForm)
    if (browser.isAndroid) {
      await Promise.all([
        waitForDisplay(`xpath://android.widget.TextView[@text=\"metaTest1\"]`),
        waitForDisplay(`xpath://android.widget.TextView[@text=\"Label2\"]`)
      ])
    }
    else
    {
      await waitForDisplay(`//XCUIElementTypeOther[@label="metaTest1 Label2"]`)
    }
    await waitAndClick(this.deleteCookieBtn)
    await waitAndClick(this.deleteCookieConfrimBtn)
    await browser.pause(5000);
    if (browser.isAndroid) {
      await waitForNoDisplay(`xpath://android.widget.TextView[@text=\"metaTest1\"]`)
    }
    else
    {
      await waitForNoDisplay(`//XCUIElementTypeOther[@label="metaTest1"]`)
    }
  }
  async verifyBackOnEditMetaForm() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(this.libraryButton)
    await waitAndClick2(this.addClipBtn)
    await waitAndClick(this.nextButton)
    const walkthruTitle = genRandomName()
    await waitAndSetValue(this.walkthruTitleField,walkthruTitle)
    await waitAndClick(this.metaOptionButton)
    await waitAndClick(this.editMetaBackBtn)
    await waitForDisplay(this.walkthruTitleField)
  }
  async verifyContentOnMetaFormScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton,20000)
      await browser.pause(2000)
      await waitAndClick2()
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
      await waitAndClick(this.addClipBtn)
      await waitAndClick(this.addClipBtn2)
    }   
    await waitAndClick(this.nextButton)
    await waitAndClick(this.metaOptionButton)
    await swipe('down',this.addClipButton)
    await Promise.all([
      waitForDisplay(this.addClipButton),
      waitForDisplay(this.metaFormContent1),
      waitForDisplay(this.cookiesBackButton)
    ])
  }
  async verifyOpeningInbuiltGallery() {
    await this.verifyNavigationToSelectVideoClipScreen();
    await waitAndClick(this.addClipOnSearchBtn)
    await waitForDisplay(this.galleryButton)
    await waitAndClick(this.galleryButton)
    await waitForDisplay(createVideoClipBase.thumbnailImage)
  }
  async verifyBackOptionInSelectVideoClipScreen() {
    await this.verifyNavigationToSelectVideoClipScreen();
    await waitAndClick(this.videoClipSearchBack)
    await waitForDisplay(this.walkthruScreenContent2)
  }
  async verifyNaviagtionToMyWalkthruScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(this.libraryButton)
    await waitAndClick2(this.addClipBtn)
    await waitAndClick(this.nextButton)
    await Promise.all([
      waitForDisplay(this.walkthruScreenContent1),
      waitForDisplay(this.walkthruScreenContent2),
      waitForDisplay(this.videoClipVerify),
      waitForDisplay(this.visibilityBtn)
    ])
    await swipe('down',`xpath://android.widget.TextView[@text=\"Add Video Clip\"]`)
    await waitForDisplay(this.addVideoClipBtn)
  }
  async verifyEmptyValidationOnWalkthruNameField() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton,20000)
      await browser.pause(2000)
      await waitAndClick2()
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
      await waitAndClick(this.addClipBtn)
      await waitAndClick(this.addClipBtn2)
    }   
    await waitAndClick(this.nextButton)
    await waitForDisplay(this.walkthruScreenContent2)
    await waitAndClick(this.createWalkthruButton)
    await Promise.all([
      waitForDisplay(this.walkthruEmptyCheck),
      waitForDisplay(this.walkthruEmptyCheck1)
    ])
    await waitAndSetValue(this.walkthruTitleField,'We')
    await waitAndSetValue(this.NewFunnelDescriptionField,'Hello')
    if (browser.isIOS) {
      await waitAndClick(this.walkthruTitleField)
    }
    await waitAndClick(this.createWalkthruButton)
    await waitForDisplay(this.walkthruField3CharValidation)
    await waitForNoDisplay(this.verifyWalkthruCreateSuccess)
  }


  async verifyBackOptionToVideoLibraryScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isAndroid) {
      await waitAndClick(this.libraryButton,20000)
      await browser.pause(2000)
      await waitAndClick2()
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      await waitAndClick(this.libraryButton,20000)
      await waitAndClick(this.addClipBtn)
      await waitAndClick(this.addClipBtn2)
    }      
    await waitAndClick(this.nextButton)
    await waitForDisplay(this.walkthruScreenContent2)
    await waitAndClick(this.walkthruBackBtn)
    await waitForDisplay(this.libraryButton)
  }
  async verifyDeleteVideoClip() {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(createVideoClipBase.createVideoClipButton)
    await waitAndClick(createVideoClipBase.galleryButton)
    await waitAndClick(createVideoClipBase.thumbnailImage)
    await waitForDisplay(createVideoClipBase.mediaDeleteBtn,20000)
    const videoClipName = "Explainer 111";
    await waitAndSetValue(createVideoClipBase.nameInput,videoClipName)
    await waitAndClick(createVideoClipBase.saveButton)
    await waitForDisplay(createVideoClipBase.createVideoClipButton)
    const checkContent1 = `xpath://android.widget.TextView[@text=\"${videoClipName}\"]`
    await waitAndClick(checkContent1)
    await waitAndClick(this.deleteBtn)
    await waitAndClick(this.deleteConfirmBtn)
    await waitForNoDisplay(checkContent1)
  }
  
}
function generateRandomDescriptionName() {
  const char = 'qwertyuiopasdfghjklzxcvbnm';
  let phoneNumber = '';


  // Generating 10 random char for the phone number
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    phoneNumber += char.charAt(randomIndex);
  }

  return phoneNumber;
}
function genRandomName() {
  const chars = 'zxcvbnmasdfghjklqwertyuiop';
  let name = '';


  // Generating 10 random chars for the phone number
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    name += chars.charAt(randomIndex);
  }

  return "Walkthru" + name;
}



export default new CreateWalkthru();
