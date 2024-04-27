/**
 * sub page containing specific selectors and methods for a specific page
 */
import { MangoDbPath, MangoUrl, appMailLower, appMailUpper, appPassword, iosAppMailUpper, iosPackageName } from "../../config.js";
import createVideoClipConstants from "../elementBase/createVideoClip.ele.js"
import { blackClick, swipe, waitAndClick, waitAndGetText, waitAndSetValue, waitForDisplay } from "../helper/helper.js";
import createWalkthruBase from "./createWalkthru.base.js";
import loginBase from "./login.base.js";
import { MongoClient } from "mongodb";
import signupBase from "./signup.base.js";
var typeArray = ['Text', 'Numeric', 'Date Picker', 'Address', 'Email', 'Phone'];
var mail = browser.isAndroid ? appMailUpper : iosAppMailUpper
class CreateVideoClip {

  get addVideoClipBtn() {
    return createVideoClipConstants.addVideoClipBtn
  }
  get createVideoClipButton() {
    return createVideoClipConstants.createButton
  }
  get videoClipCreateVerify() {
    return createVideoClipConstants.videoClipSuccessMsg
  }
  get galleryButton() {
    return createVideoClipConstants.galleryButtonId
  }
  get thumbnailImage() {
    return createVideoClipConstants.thumbnailImageXPath
  }
  get cameraButton() {
    return createVideoClipConstants.cameraButton
  }
  get allowButton() {
    return createVideoClipConstants.allowButton
  }
  get shutterButton() {
    return createVideoClipConstants.shutterButton
  }
  get doneButton() {
    return createVideoClipConstants.doneButton
  }
  get nameInput() {
    return createVideoClipConstants.nameInput
  }
  get saveButton() {
    return createVideoClipConstants.saveButton
  }
  get explainerButton() {
    return createVideoClipConstants.explainerButton
  }
  get saveButtonEnabledCheck() {
    return createVideoClipConstants.saveButtonEnabledCheck
  }
  get typeVisible() {
    return createVideoClipConstants.typeVisible
  }
  get addClipBtn() {
    return createVideoClipConstants.addClipBtn
  }
  get descriptionField() {
    return createVideoClipConstants.descriptionField
  }
  get needToEngageBtn() {
    return createVideoClipConstants.needToEngageBtn
  }
  get engageYesBtn() {
    return createVideoClipConstants.engageYesBtn
  }
  get multiChoiceBtn() {
    return createVideoClipConstants.multiChoiceBtn
  }
  get textChoiceBtn() {
    return createVideoClipConstants.textChoiceBtn
  }
  get buttonChoiceBtn() {
    return createVideoClipConstants.buttonChoiceBtn
  }
  get ImageChoiceBtn() {
    return createVideoClipConstants.ImageChoiceBtn
  }
  get VideoChoiceBtn() {
    return createVideoClipConstants.VideoChoiceBtn
  }
  get AudioChoiceBtn() {
    return createVideoClipConstants.AudioChoiceBtn
  }
  get feedbackStarChoiceBtn() {
    return createVideoClipConstants.feedbackStarChoiceBtn
  }
  get openQuestionChoiceBtn() {
    return createVideoClipConstants.openQuestionChoiceBtn
  }
  get feedbackScaleChoiceBtn() {
    return createVideoClipConstants.feedbackScaleChoiceBtn
  }
  get branchingChoiceBtn() {
    return createVideoClipConstants.branchingChoiceBtn
  }
  get detailsFormChoiceBtn() {
    return createVideoClipConstants.detailsFormChoiceBtn
  }
  get multiNoBtn() {
    return createVideoClipConstants.multiNoBtn
  }
  get multiYesBtn() {
    return createVideoClipConstants.multiYesBtn
  }
  get option1Field() {
    return createVideoClipConstants.option1Field
  }
  get addoptionBtn() {
    return createVideoClipConstants.addoptionBtn
  }
  get option2Field() {
    return createVideoClipConstants.option2Field
  }
  get option3Field() {
    return createVideoClipConstants.option3Field
  }
  get option4Field() {
    return createVideoClipConstants.option4Field
  }
  get option5Field() {
    return createVideoClipConstants.option5Field
  }
  get option6Field() {
    return createVideoClipConstants.option6Field
  }
  get option7Field() {
    return createVideoClipConstants.option7Field
  }
  get option8Field() {
    return createVideoClipConstants.option8Field
  }
  get option9Field() {
    return createVideoClipConstants.option9Field
  }
  get option10Field() {
    return createVideoClipConstants.option10Field
  }
  get saveOptionBtn() {
    return createVideoClipConstants.saveOptionBtn
  }
  get multiScreenBack() {
    return createVideoClipConstants.multiScreenBack
  }
  get engageNoBtn() {
    return createVideoClipConstants.engageNoBtn
  }
  get multiCreationCheck() {
    return createVideoClipConstants.multiCreationCheck
  }
  get normalTextChoiceBtn() {
    return createVideoClipConstants.normalTextChoiceBtn
  }
  get multilineTextChoiceBtn() {
    return createVideoClipConstants.multilineTextChoiceBtn
  }
  get phoneTextChoiceBtn() {
    return createVideoClipConstants.phoneTextChoiceBtn
  }
  get emailTextChoiceBtn() {
    return createVideoClipConstants.emailTextChoiceBtn
  }
  get addressTextChoiceBtn() {
    return createVideoClipConstants.addressTextChoiceBtn
  }
  get buttonTypeSelectionBtn() {
    return createVideoClipConstants.buttonTypeSelectionBtn
  }
  get buttonText() {
    return createVideoClipConstants.buttonText
  }
  get buttonEmailText() {
    return createVideoClipConstants.buttonEmailText
  }
  get buttonPhoneText() {
    return createVideoClipConstants.buttonPhoneText
  }
  get buttonContact() {
    return createVideoClipConstants.buttonContact
  }
  get mediaDeleteBtn() {
    return createVideoClipConstants.mediaDeleteBtn
  }
  get buttonLinkLabelField() {
    return createVideoClipConstants.buttonLinkLabelField
  }
  get buttonLinkValueField() {
    return createVideoClipConstants.buttonLinkValueField
  }
  get buttonTypeAddBtn() {
    return createVideoClipConstants.buttonTypeAddBtn
  }
  get buttonTypeRemoveBtn() {
    return createVideoClipConstants.buttonTypeRemoveBtn
  }
  get ButtonTypeSaveBtn() {
    return createVideoClipConstants.ButtonTypeSaveBtn
  }
  get buttonTypeBackOption() {
    return createVideoClipConstants.buttonTypeBackOption
  }
  get buttonTypeSelection2() {
    return createVideoClipConstants.buttonTypeSelection2
  }
  get buttonEmaillabelField() {
    return createVideoClipConstants.buttonEmaillabelField
  }
  get buttonEmailValueField() {
    return createVideoClipConstants.buttonEmailValueField
  }
  get buttonTypeSelection3() {
    return createVideoClipConstants.buttonTypeSelection3
  }
  get buttonPhonelabelField() {
    return createVideoClipConstants.buttonPhonelabelField
  }
  get buttonPhoneValueField() {
    return createVideoClipConstants.buttonPhoneValueField
  }
  get buttonTypeSelection4() {
    return createVideoClipConstants.buttonTypeSelection4
  }
  get buttonContactlabelField() {
    return createVideoClipConstants.buttonContactlabelField
  }
  get buttonContactProfileBtn() {
    return createVideoClipConstants.buttonContactProfileBtn
  }
  get profileName() {
    return createVideoClipConstants.profileName
  }
  get profileNumber() {
    return createVideoClipConstants.profileNumber
  }
  get profileEmail() {
    return createVideoClipConstants.profileEmail
  }
  get profileWebUrl() {
    return createVideoClipConstants.profileWebUrl
  }
  get profileSupportUrl() {
    return createVideoClipConstants.profileSupportUrl
  }
  get profileNotes() {
    return createVideoClipConstants.profileNotes
  }
  get profileSaveBtn() {
    return createVideoClipConstants.profileSaveBtn
  }
  get profileBackBtn() {
    return createVideoClipConstants.profileBackBtn
  }
  get buttonContactValueField() {
    return createVideoClipConstants.buttonContactValueField
  }
  get branchingAddBtn() {
    return createVideoClipConstants.branchingAddBtn
  }
  get branchName() {
    return createVideoClipConstants.branchName
  }
  get addBranchVideoClipBtn() {
    return createVideoClipConstants.addBranchVideoClipBtn
  }
  get branchClipBtn() {
    return createVideoClipConstants.branchClipBtn
  }
  get branchOkButton() {
    return createVideoClipConstants.branchOkButton
  }
  get formNameField() {
    return createVideoClipConstants.formNameField
  }
  get caprchaEnableBtn() {
    return createVideoClipConstants.caprchaEnableBtn
  }
  get termsEnableBtn() {
    return createVideoClipConstants.termsEnableBtn
  }
  get form1Lable() {
    return createVideoClipConstants.form1Lable
  }
  get form1InputType() {
    return createVideoClipConstants.form1InputType
  }
  get form1RequiredField() {
    return createVideoClipConstants.form1RequiredField
  }
  get formAddBtn() {
    return createVideoClipConstants.formAddBtn
  }
  get formTextSelect() {
    return createVideoClipConstants.formTextSelect
  }
  get formNumericSelect() {
    return createVideoClipConstants.formNumericSelect
  }
  get formDataSelect() {
    return createVideoClipConstants.formDataSelect
  }
  get formAddressSelect() {
    return createVideoClipConstants.formAddressSelect
  }
  get fromEmailSelect() {
    return createVideoClipConstants.fromEmailSelect
  }
  get formPhoneSelect() {
    return createVideoClipConstants.formPhoneSelect
  }
  get formYesType() {
    return createVideoClipConstants.formYesType
  }
  get formNoType() {
    return createVideoClipConstants.formNoType
  }
  get formSelectTypeBack() {
    return createVideoClipConstants.formSelectTypeBack
  }
  get linkDisplayTextField() {
    return createVideoClipConstants.linkDisplayTextField
  }
  get policyLinkTextField() {
    return createVideoClipConstants.policyLinkTextField
  }
  get formRemovebtn() {
    return createVideoClipConstants.formRemovebtn
  }
  get createFormSaveBtn() {
    return createVideoClipConstants.createFormSaveBtn
  }
  get engageFormBackBtn() {
    return createVideoClipConstants.engageFormBackBtn
  }
  get formTypeBtn() {
    return createVideoClipConstants.formTypeBtn
  }
  get engageTypeBackBtn() {
    return createVideoClipConstants.engageTypeBackBtn
  }
  get createdForm1() {
    return createVideoClipConstants.createdForm1
  }
  get editBtn() {
    return createVideoClipConstants.editBtn
  }
  get updateVideoClipTileField() {
    return createVideoClipConstants.updateVideoClipTileField
  }
  get updateVideoClipDescriptionField() {
    return createVideoClipConstants.updateVideoClipDescriptionField
  }
  get clipSelect1() {
    return createVideoClipConstants.clipSelect1
  }
  get tagButton() {
    return createVideoClipConstants.tagButton
  }
  get saveTagBtn() {
    return createVideoClipConstants.saveTagBtn
  }
  get buttonTypeField() {
    return createVideoClipConstants.buttonTypeField
  }
  get updateVideoClipBtn() {
    return createVideoClipConstants.updateVideoClipBtn
  }
  get deleteVideoClipBtn() {
    return createVideoClipConstants.deleteVideoClipBtn
  }
  get updateScreenBackBtn() {
    return createVideoClipConstants.updateScreenBackBtn
  }
  get confrimDeleteBtn() {
    return createVideoClipConstants.confrimDeleteBtn
  }

  async verifyClip(data) {
    await waitAndClick(this.galleryButton)
    await waitAndClick(this.thumbnailImage)
    const videoClipName = data;
    const descrip1 = generateRandomDescriptionName()
    await waitForDisplay(this.mediaDeleteBtn, 60000);
    await waitAndSetValue(this.nameInput, videoClipName)
    await waitAndSetValue(this.descriptionField, descrip1)
    if (browser.isIOS) {
      await waitAndClick(this.mediaDeleteBtn)
    }
    await waitAndClick(this.saveButton)
    return { videoClipName, descrip1 }
  }
  async createExplainerVideoClipCheck(data) {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await waitAndClick(this.createVideoClipButton)
    const data1 = await this.verifyClip(data);
    const videoName = data1.videoClipName;
    const descrip1 = data1.descrip1;
    await waitForDisplay(this.createVideoClipButton)
    if (browser.isAndroid) {
      var element1 = `//android.widget.TextView[@text="${descrip1}"]`
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
      var element1 = `//XCUIElementTypeOther[@label="${videoName + ' ' + descrip1 + ' ' + 'English'}"]`
      await waitAndClick(signupBase.LibraryBtn, 20000)
    }
    await waitForDisplay(element1, 10000)
    return { videoName, descrip1 }
  }

  async createBase(data) {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.createVideoClipButton);
    await waitAndClick(this.galleryButton);
    await waitAndClick(this.thumbnailImage);
    const videoClipName = data;
    const descrip1 = generateRandomDescriptionName()
    await waitAndClick(this.needToEngageBtn, 10000);
    return { videoClipName, descrip1 };
  }

  async createText(type) {
    const { descrip1, videoClipName } = await this.createBase(type)
    await waitAndClick(this.engageYesBtn)
    await waitAndClick(this.textChoiceBtn)
    if (type === 'Normal Text') {
      await waitAndClick(this.normalTextChoiceBtn)
    } else if (type === 'Multiline Text') {
      await waitAndClick(this.multilineTextChoiceBtn)
    }
    else if (type === 'Phone Number') {
      await waitAndClick(this.phoneTextChoiceBtn)
    }
    else if (type === 'Email') {
      await waitAndClick(this.emailTextChoiceBtn)
    }
    else if (type === 'Address') {
      await waitAndClick(this.addressTextChoiceBtn)
    }
    await waitForDisplay(this.mediaDeleteBtn,20000)
    await this.createEnd(videoClipName, descrip1, type);
  }

  async verifyNormalTextCreation() {
    const data = await this.createBase('Normal Text')
    const videoName = data.videoClipName
    const descrip = data.descrip1
    await waitAndClick(this.engageYesBtn)
    await waitAndClick(this.textChoiceBtn)
    await waitAndClick(this.normalTextChoiceBtn)
    await this.createEnd(videoName, descrip)
  }
  async verifyMultilineTextCreation() {
    const data = await this.createBase('Multiline Text')
    const videoName = data.videoClipName
    const descrip = data.descrip1
    await waitAndClick(this.engageYesBtn)
    await waitAndClick(this.textChoiceBtn)
    await waitAndClick(this.multilineTextChoiceBtn)
    await this.createEnd(videoName, descrip)
  }

  async createSingleInputTypes(type) {
    const data = await this.createBase(type);
    const { videoClipName: videoName, descrip1: descrip } = data;
    await waitAndClick(this.engageYesBtn)
    switch (type) {
      case 'Image':
        await waitAndClick(this.ImageChoiceBtn)
        break;
      case 'Video':
        await waitAndClick(this.VideoChoiceBtn)
        break;
      case 'Audio':
        await waitAndClick(this.AudioChoiceBtn)
        break;
      case 'Star':
        await waitAndClick(this.feedbackStarChoiceBtn)
        break;
      case 'Open':
        await waitAndClick(this.openQuestionChoiceBtn)
        break;
      case 'Scale':
        await waitAndClick(this.feedbackScaleChoiceBtn)
        break;
      default:
        throw new Error(`Invalid type: ${type}`);
    }
    await waitForDisplay(this.mediaDeleteBtn, 30000)
    await this.createEnd(videoName, descrip, type);
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
      const collection1 = db.collection(data);
      let document1;
      switch (data) {
        case "profiles":
          document1 = await collection1.deleteMany({ user: userId });
          break;
        case "forms":
          document1 = await collection1.deleteOne({ name: 'Form Automation Test' });
          break;
        case "tags":
          document1 = await collection1.deleteOne({ name: 'Auto_tag' });
          break;
        default:
          throw new Error("Invalid data type");
      }

      console.log(`${document1.deletedCount} documents deleted.`);
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  }


  async createbranchType(type) {
    const { descrip1, videoClipName } = await this.createBase(type)
    await waitAndClick(this.engageYesBtn, 10000)
    await waitAndClick(this.branchingChoiceBtn)
    await waitForDisplay(this.mediaDeleteBtn, 60000)
    await waitAndClick(this.branchClipBtn)
    await waitAndSetValue(this.branchName, "B1");
    await waitAndClick(this.addBranchVideoClipBtn)
    if (browser.isIOS) {
      await waitAndClick(this.addBranchVideoClipBtn)
    }
    await waitAndClick(this.branchingAddBtn)
    await this.verifyClip("Branching 1");
    await waitAndClick(this.branchOkButton)
    await this.createEnd(videoClipName, descrip1, type);
  }

  async createformType(type) {
    await this.delProfile(appMailLower, 'forms')
    const { descrip1, videoClipName } = await this.createBase(type)
    await waitAndClick(this.engageYesBtn, 10000)
    await waitAndClick(this.detailsFormChoiceBtn)
    await this.scrollDownToAddBtn();
    await waitAndClick(this.addClipBtn)
    await waitAndSetValue(this.formNameField, 'Form Automation Test')
    await waitAndClick(this.caprchaEnableBtn)
    await waitAndClick(this.formYesType)
    await waitAndClick(this.branchOkButton)
    await waitAndClick(this.termsEnableBtn)
    await waitAndClick(this.formYesType)
    await waitAndSetValue(this.linkDisplayTextField, 'Link Display')
    await waitAndSetValue(this.policyLinkTextField, 'google.co.in')
    await waitAndClick(this.branchOkButton)
    for (let i = 0; i < typeArray.length; i++) {
      const elementIndex = (i === 3) ? i : (i === 4) ? i - 1 : (i === 5) ? i - 2 : i + 1;
      const element1 = `//android.widget.EditText[@resource-id="formlabel_${i}"]`
      const randomText = generateRandomDescriptionName();
      await waitAndSetValue(element1, randomText);
      await waitAndClick(element1);
      await browser.back();
      const selectElement = `(//android.view.ViewGroup[@resource-id="form-select"])[${elementIndex}]`
      await waitAndClick(selectElement);
      const optionElement = `//android.widget.TextView[@text="${typeArray[i]}"]`
      await waitAndClick(optionElement);
      const requiredClickElement = `(//android.view.ViewGroup[@resource-id="required-click"])[${elementIndex}]`
      await waitAndClick(requiredClickElement);
      await waitAndClick(this.formYesType);
      await waitAndClick(this.addClipBtn);
    }
    await waitAndClick(this.createFormSaveBtn);
    await waitAndClick(this.engageFormBackBtn);
    await waitAndClick(this.engageTypeBackBtn);
    await waitAndClick(this.formTypeBtn);
    await waitAndClick(this.createdForm1);
    await waitForDisplay(this.mediaDeleteBtn, 60000);
    await this.createEnd(videoName, descrip, type);
    // await this.clipSelect1.click();
    // await this.editBtn.click();
    // const titleText = await this.updateVideoClipTileField.getText()
    // const descriptionText = await this.updateVideoClipDescriptionField.getText()
    // await expect(titleText).toBe(videoName);
    // await expect(descriptionText).toBe(descrip);
    // await expect(await this.formTypeBtn).toBeDisplayed();
  }

  async createbuttonType(type) {
    await this.delProfile(mail, 'profiles')
    const { descrip1, videoClipName } = await this.createBase(type)
    await waitAndClick(this.engageYesBtn)
    await waitAndClick(this.buttonChoiceBtn)
    await waitAndClick(this.buttonTypeSelectionBtn)
    await waitAndClick(this.buttonText)
    await waitAndSetValue(this.buttonLinkLabelField, 'linkText')
    await waitAndSetValue(this.buttonLinkValueField, 'google.co.in')
    await waitAndClick(this.buttonTypeAddBtn)
    if (browser.isIOS) {
      await waitAndClick(this.buttonTypeAddBtn)
    }
    await waitAndClick(this.buttonTypeSelection2)
    await waitAndClick(this.buttonEmailText)
    await waitAndSetValue(this.buttonEmaillabelField, 'emailText')
    await waitAndSetValue(this.buttonEmailValueField, 'test1@yopmail.com')
    if (browser.isIOS) {
      await waitAndClick(this.buttonTypeAddBtn)
    }
    await waitAndClick(this.buttonTypeAddBtn)
    await waitAndClick(this.buttonTypeSelection3)
    await waitAndClick(this.buttonPhoneText)
    await swipe('down', this.buttonPhoneValueField)
    await waitAndSetValue(this.buttonPhonelabelField, 'phoneText')
    if (browser.isIOS) {
      await waitAndClick(this.buttonTypeSelection3)
    }
    await waitAndSetValue(this.buttonPhoneValueField, '8787675645')
    if (browser.isIOS) {
      await waitAndClick(this.buttonTypeSelection3)
    }
    await swipe('down', this.buttonTypeAddBtn)
    await waitAndClick(this.buttonTypeAddBtn)
    if (browser.isIOS) {
      await waitAndClick(this.buttonTypeSelection4)
    }
    else
    {
      await waitAndClick(this.buttonTypeSelection3)
    }
    await waitAndClick(this.buttonContact)
    await swipe('down', this.buttonContactProfileBtn)
    await waitAndSetValue(this.buttonContactlabelField, 'contactText')
    if (browser.isIOS) {
      await waitAndClick(this.buttonContactProfileBtn)
      await swipe('down', this.buttonContactProfileBtn)
    }
    await waitAndClick(this.buttonContactProfileBtn)
    await Promise.all([
      waitAndSetValue(this.profileName, 'profileName1'),
      waitAndSetValue(this.profileNumber, '5676567766'),
      waitAndSetValue(this.profileEmail, 'emailText1@yopmail.com'),
      waitAndSetValue(this.profileWebUrl, 'google.com'),
      waitAndSetValue(this.profileSupportUrl, 'google.co.in'),
      waitAndSetValue(this.profileNotes, 'notes')
    ])
    await waitAndClick(this.profileSaveBtn)
    if (browser.isIOS) {
      await waitAndClick(this.profileSaveBtn)
    }
    await waitAndClick(this.ButtonTypeSaveBtn)
    await waitForDisplay(this.mediaDeleteBtn, 30000)
    await this.createEnd(videoClipName, descrip1, type);
  }

  async createEnd(videoName, descrip, type) {
    await waitAndSetValue(this.nameInput, videoName);
    if (browser.isIOS) {
      await blackClick()
    }
    await waitAndSetValue(this.descriptionField, descrip);
    if (browser.isIOS) {
      await waitAndClick(this.mediaDeleteBtn)
    }
    await waitAndClick(this.saveButton)
    await waitForDisplay(this.createVideoClipButton);
    if (browser.isAndroid) {
      await waitForDisplay(`//android.widget.TextView[@text="${descrip}"]`);
    }
    if (type === 'Normal Text' || type === 'Multiline Text' || type === 'Phone Number' || type === 'Email' || type === 'Address') {
      if (browser.isAndroid) {
        await waitForDisplay(`//android.widget.TextView[@text="Text"]`);
      }
      else {
        await waitForDisplay(`//XCUIElementTypeOther[@label="${videoName} ${descrip} English Text"]`);
      }
    } else if (type === 'MultiNo' || type === 'MultiYes') {
      if (browser.isAndroid) {
        await waitForDisplay(this.multiCreationCheck);
      }
      else {
        await waitForDisplay(`//XCUIElementTypeOther[@label="${videoName} ${descrip} English Multi"]`);
      }
    }
    else if (type === 'Image' || type === 'Form' || type === 'Button' || type === 'Video' || type === 'Audio' || type === 'Star' || type === 'Open' || type === 'Scale') {
      if (browser.isAndroid) {
        await waitForDisplay(`//android.widget.TextView[@text="${type}"]`);
      }
      else {
        await waitForDisplay(`//XCUIElementTypeOther[@label="${videoName} ${descrip} English ${type}"]`);
      }
    }
    // else if (type === 'Button') {
    //   if (browser.isAndroid) {
    //     await waitForDisplay(`//android.widget.TextView[@text="${type}"]`);
    //   }
    //   else
    //   {
    //     await waitForDisplay(`//XCUIElementTypeOther[@label="${videoName} ${descrip} English ${type}"]`);
    //   }
    // }
    else if (type === 'Branching') {
      if (browser.isAndroid) {
        await waitForDisplay(`//android.widget.TextView[@text="Branch"]`);
      }
      else {
        await waitForDisplay(`//XCUIElementTypeOther[@label="${videoName} ${descrip} English Branch`);
      }
    }
    // else if (type === 'Form') {
    //   if (browser.isAndroid) {
    //     await waitForDisplay(`//android.widget.TextView[@text="${type}"]`);
    //   }
    //   else
    //   {
    //     await waitForDisplay(`//XCUIElementTypeOther[@label="${videoName} ${descrip} English ${type}`);
    //   }
    // }
  }
  async createClipWithCustomTag(type) {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper, appPassword);
    await this.delProfile(appMailLower, 'tags');
    await waitAndClick(this.createVideoClipButton, 10000)
    await waitAndClick(this.galleryButton)
    await waitAndClick(this.thumbnailImage)
    const videoClipName = type;
    const descrip1 = generateRandomDescriptionName()
    await waitForDisplay(this.mediaDeleteBtn, 60000)
    await waitAndSetValue(this.nameInput, videoClipName)
    await waitAndSetValue(this.descriptionField, descrip1)
    await waitAndClick(this.tagButton)
    await waitAndClick(this.addClipBtn)
    await waitAndSetValue(this.branchName, 'Auto_tag')
    await waitAndClick(this.createFormSaveBtn)
    const element1 = `//android.widget.TextView[@text="Auto_tag"]`
    await waitForDisplay(element1)
    await waitAndClick(element1)
    await waitAndClick(this.saveTagBtn)
    await waitForDisplay(this.mediaDeleteBtn, 60000)
    await waitAndClick(this.saveButton)
    const element2 = `//android.widget.TextView[@text="${descrip1}"]`
    await waitForDisplay(element2)
    await waitAndClick(loginBase.loginVerifyC);
    await waitAndClick(createWalkthruBase.libraryButton);
    await this.SwipeToTag();
    await waitAndClick(element1)
    await waitForDisplay(element2)

  }
  async verifyMultiChoiceYesCreation(type) {
    const { descrip1, videoClipName } = await this.createBase(type)
    await waitAndClick(this.engageYesBtn)
    await waitAndClick(this.multiChoiceBtn)
    await waitAndClick(this.multiYesBtn)
    await waitAndSetValue(this.option1Field, '2')
    await blackClick()
    await waitAndClick(this.addoptionBtn)
    await waitAndSetValue(this.option2Field, '1')
    await waitAndClick(this.saveOptionBtn)
    await waitForDisplay(this.mediaDeleteBtn, 20000)
    await this.createEnd(videoClipName, descrip1, type)
    await this.checkVideoClipCreation(videoClipName, descrip1, type)
  }

  async verifyMultiChoiceNoCreation(type) {
    const { descrip1, videoClipName } = await this.createBase(type)
    await waitAndClick(this.engageYesBtn);
    await waitAndClick(this.multiChoiceBtn);
    await waitAndClick(this.multiNoBtn);
    await waitAndSetValue(this.option1Field, "1");
    await blackClick()
    await waitAndClick(this.addoptionBtn);
    await waitAndSetValue(this.option2Field, "2");
    await waitAndClick(this.saveOptionBtn);
    await waitForDisplay(this.mediaDeleteBtn, 30000);
    await this.createEnd(videoClipName, descrip1, type)
    await this.checkVideoClipCreation(videoClipName, descrip1, type)
  }
  async checkVideoClipCreation(videoName, descrip, data) {
    await waitAndClick(this.clipSelect1);
    await waitAndClick(this.editBtn);
    await waitAndGetText(this.updateVideoClipTileField);
    const titleText = await waitAndGetText(this.updateVideoClipTileField);
    await waitAndGetText(this.updateVideoClipDescriptionField);
    const descriptionText = await waitAndGetText(this.updateVideoClipDescriptionField);
    await expect(titleText).toBe(videoName);
    await expect(descriptionText).toBe(descrip);
    switch (data) {
      case "Button":
        await waitForDisplay(this.buttonTypeField)
        break;
      case "Form":
        await waitForDisplay(this.formTypeBtn)
        break;
    }
  }

  async updateClip(data1) {
    const data2 = await this.createExplainerVideoClipCheck(data1)
    const videoName = data2.videoName;
    const descrip = data2.descrip1;
    await waitAndClick(this.clipSelect1)
    await waitAndClick(this.editBtn)
    const nameCheck1 = await waitAndGetText(this.updateVideoClipTileField)
    const descriptionCheck1 = await waitAndGetText(this.updateVideoClipDescriptionField)
    await expect(nameCheck1).toBe(videoName);
    await expect(descriptionCheck1).toBe(descrip);
    await waitAndSetValue(this.updateVideoClipTileField, 'updateText')
    await waitAndSetValue(this.updateVideoClipDescriptionField, 'updateDescriptionText')
    await waitAndClick(this.needToEngageBtn)
    await waitAndClick(this.engageYesBtn)
    await waitAndClick(this.textChoiceBtn)
    await waitAndClick(this.normalTextChoiceBtn)
    await waitAndClick(this.updateVideoClipBtn)
    await waitAndClick(this.clipSelect1)
    await waitAndClick(this.editBtn)
    const nameCheck = await waitAndGetText(this.updateVideoClipTileField)
    const descriptionCheck = await waitAndGetText(this.updateVideoClipDescriptionField)
    await expect(nameCheck).toBe('updateText');
    await expect(descriptionCheck).toBe('updateDescriptionText');
    const element2 = `//android.widget.TextView[@text="Normal Text"]`
    await waitForDisplay(element2, 10000);
    await expect(element2).toBeDisplayed();
    await waitAndClick(this.updateScreenBackBtn)
    await waitAndClick(this.deleteVideoClipBtn)
    await waitAndClick(this.confrimDeleteBtn)
    await waitForDisplay(createWalkthruBase.libraryButton);
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



export default new CreateVideoClip();
