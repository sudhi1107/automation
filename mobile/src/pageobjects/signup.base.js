/**
 * sub page containing specific selectors and methods for a specific page
 */
import signupConstants from "../elementBase/signup.ele.js"
import Login from '../pageobjects/login.base.js';
import axios from 'axios';
import engagementResponseBase from "./engagementResponse.base.js";
import loginBase from "../pageobjects/login.base.js";
import { appPackageName, cardCVC, cardMonth, cardName, cardNum, iosPackageName } from "../../config.js";
import { agentClick, blackClick, orgClick, swipe, waitAndClick, waitAndGetText, waitAndSetValue, waitForDisplay, waitForNoDisplay } from "../helper/helper.js";
const apiUrl = 'https://qa-api.walkthru.ai/users/admin/invite';
class Signup {
  async getElement(selector) {
    const element = await browser.$(selector);
    await element.waitForDisplayed({ timeout: 10000 });
    return element;
  }
  async getElement2m(selector) {
    const element = await browser.$(selector);
    await element.waitForDisplayed({ timeout: 120000 });
    return element;
  }
  get dataEmptyMsg1() {
    return signupConstants.dataEmptyMsg1Xpath
  }

  get signUpButton() {
    return signupConstants.signUpButtonXPath
  }

  get usernameInput() {
    return signupConstants.usernameXPath
  }

  get firstNameInput() {
    return signupConstants.firstNameXPath
  }

  get emailInput() {
    return signupConstants.emailXPath1
  }

  get phoneInput() {
    return signupConstants.phoneXPath2
  }

  get contractorInput() {
    return signupConstants.contractorXPath
  }

  get passwordInput() {
    return signupConstants.passwordXPath
  }

  get confirmPasswordInput() {
    return signupConstants.confirmPasswordXPath
  }
  get accountTypeBtn() {
    return signupConstants.accountTypeBtn
  }

  get agreeCheckBox() {
    return signupConstants.checkBoxClassName
  }
  get signupContect1() {
    return signupConstants.signupContect1Xpath
  }
  get signupContect2() {
    return signupConstants.signupContect2Xpath
  }
  get loginBtn() {
    return signupConstants.loginBtnXpath
  }
  get emptyMsg() {
    return signupConstants.emptyMsgXpath
  }
  get invalidMsg() {
    return signupConstants.invalidMsgXpath
  }
  get backBtn() {
    return signupConstants.backBtnXpath
  }
  get checkBoxEmptyMsg() {
    return signupConstants.checkBoxEmptyMsgXpath
  }
  get invalidPhoneMsg() {
    return signupConstants.invalidPhoneMsgXpath
  }
  get passwordMismatchMsg() {
    return signupConstants.passwordMismatchMsgXpath
  }
  get passwordEyeBtn() {
    return signupConstants.passwordEyeBtnXpath
  }
  get invalidMailMsg() {
    return signupConstants.invalidMailMsgXpath
  }
  get dataEmptyMsg() {
    return signupConstants.dataEmptyMsgXpath
  }
  get WalkthruBtn() {
    return signupConstants.WalkthruBtnXpath
  }
  get EngageBtn() {
    return signupConstants.EngageBtnXpath
  }
  get LibraryBtn() {
    return signupConstants.LibraryBtnXpath
  }
  get CommunityBtn() {
    return signupConstants.CommunityBtnXpath
  }
  get choosePlanScreenVerify() {
    return signupConstants.choosePlanScreenVerify
  }
  get chooseOrg() {
    return signupConstants.chooseOrg
  }
  get chooseAgent() {
    return signupConstants.chooseAgent
  }
  get clickChoosePlanMessage() {
    return signupConstants.choosePlanMessageXPath
  }

  get clickMonthlyPlan() {
    return signupConstants.monthlyPlanXPath
  }

  get clickYearlyPlan() {
    return signupConstants.yearlyPlanXPath
  }

  get clickIndividualPlan() {
    return signupConstants.individualPlanXPath
  }

  get clickSMBPlan() {
    return signupConstants.smbPlanXPath
  }

  get clickEnterprisePlan() {
    return signupConstants.enterprisePlanXPath
  }

  get clickSubscribeButton() {
    return signupConstants.subscribeButtonXPath
  }

  get individualReadBtn() {
    return signupConstants.individualReadBtn
  }
  get individualReadBtn1() {
    return signupConstants.individualReadBtn1
  }
  get individualContent2() {
    return signupConstants.individualContent2
  }
  get SMBContent2() {
    return signupConstants.SMBContent2
  }
  get EnterContent2() {
    return signupConstants.EnterContent2
  }
  get individualContent3() {
    return signupConstants.individualContent3
  }
  get SMBContent3() {
    return signupConstants.SMBContent3
  }
  get individualContent4() {
    return signupConstants.individualContent4
  }
  get individualContent5() {
    return signupConstants.individualContent5
  }
  get individualContent6() {
    return signupConstants.individualContent6
  }
  get SMBContent6() {
    return signupConstants.SMBContent6
  }
  get SMBContent7() {
    return signupConstants.SMBContent7
  }
  get individualContent7() {
    return signupConstants.individualContent7
  }
  get enterContent7() {
    return signupConstants.enterContent7
  }
  get individualContent8() {
    return signupConstants.individualContent8
  }
  get individualContent9() {
    return signupConstants.individualContent9
  }
  get individualContent10() {
    return signupConstants.individualContent10
  }
  get SMBContent10() {
    return signupConstants.SMBContent10
  }
  get individualContent11() {
    return signupConstants.individualContent11
  }
  get individualContent12() {
    return signupConstants.individualContent12
  }
  get individualContent13() {
    return signupConstants.individualContent13
  }
  get individualContent14() {
    return signupConstants.individualContent14
  }
  get individualContent15() {
    return signupConstants.individualContent15
  }
  get SMBContent15() {
    return signupConstants.SMBContent15
  }
  get individualContent16() {
    return signupConstants.individualContent16
  }
  get SMBContent16() {
    return signupConstants.SMBContent16
  }
  get enterContent16() {
    return signupConstants.enterContent16
  }
  get individualContent17() {
    return signupConstants.individualContent17
  }
  get SMBContent17() {
    return signupConstants.SMBContent17
  }
  get individualContent18() {
    return signupConstants.individualContent18
  }
  get individualContent19() {
    return signupConstants.individualContent19
  }
  get individualContent20() {
    return signupConstants.individualContent20
  }
  get planReadCloseButton() {
    return signupConstants.planReadCloseButton
  }
  get planSwitchBtn() {
    return signupConstants.planSwitchBtn
  }
  get indiMonthPlan() {
    return signupConstants.indiMonthPlan
  }
  get indiYearPlan() {
    return signupConstants.indiYearPlan
  }
  get smbYearPlan() {
    return signupConstants.smbYearPlan
  }
  get smbMonthPlan() {
    return signupConstants.smbMonthPlan
  }
  get enterMonthPlan() {
    return signupConstants.enterMonthPlan
  }
  get enterYearPlan() {
    return signupConstants.enterYearPlan
  }
  get indiSubcripMContent1() {
    return signupConstants.indiSubcripMContent1
  }
  get indiSubcripMContent2() {
    return signupConstants.indiSubcripMContent2
  }
  get SMBSubcripMContent1() {
    return signupConstants.SMBSubcripMContent1
  }
  get SMBSubcripMContent2() {
    return signupConstants.SMBSubcripMContent2
  }
  get enterSubcripMContent1() {
    return signupConstants.enterSubcripMContent1
  }
  get enterSubcripMContent2() {
    return signupConstants.enterSubcripMContent2
  }
  get cardField() {
    return signupConstants.cardField
  }
  get monthField() {
    return signupConstants.monthField
  }
  get cvcField() {
    return signupConstants.cvcField
  }
  get nameField() {
    return signupConstants.nameField
  }
  get subcripConfrimBtn() {
    return signupConstants.subcripConfrimBtn
  }
  get subConfrimContent1() {
    return signupConstants.subConfrimContent1
  }
  get subConfrimContent2() {
    return signupConstants.subConfrimContent2
  }
  get backToHomeBtn() {
    return signupConstants.backToHomeBtn
  }
  get indiSubcripYContent1() {
    return signupConstants.indiSubcripYContent1
  }
  get indiSubcripYContent2() {
    return signupConstants.indiSubcripYContent2
  }
  get SMBSubcripYContent1() {
    return signupConstants.SMBSubcripYContent1
  }
  get SMBSubcripYContent2() {
    return signupConstants.SMBSubcripYContent2
  }
  get enterSubcripYContent1() {
    return signupConstants.enterSubcripYContent1
  }
  get enterSubcripYContent2() {
    return signupConstants.enterSubcripYContent2
  }
  get backToHomeBtn() {
    return signupConstants.backToHomeBtn
  }
  get stripeBack() {
    return signupConstants.stripeBack
  }
  get profileBtn() {
    return signupConstants.profileBtn
  }
  get manageSubcriptionBtn() {
    return signupConstants.manageSubcriptionBtn
  }
  get freePlanContent() {
    return signupConstants.freePlanContent
  }
  get agentField() {
    return signupConstants.agentField
  }
  get createAccountBtn() {
    return signupConstants.createAccountBtn
  }
  get passwordEyeBtn2() {
    return signupConstants.passwordEyeBtn2Xpath
  }
  get paymentSuccess() {
    return signupConstants.paymentSuccess
  }
  async verifySignup(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.signupNavigate()
    await Promise.all([
      waitAndSetValue(this.usernameInput, name),
      browser.back(),
      waitAndSetValue(this.firstNameInput, lastName),
      waitAndSetValue(this.emailInput, email),
      waitAndSetValue(this.phoneInput, phoneNumber),
    ])
    await browser.back()
    if (browser.isIOS) {
      await waitAndClick(this.signupContect1);
    }
    await swipe('down', this.agreeCheckBox)
    await Promise.all([
      waitAndSetValue(this.passwordInput, password),
      waitAndSetValue(this.confirmPasswordInput, confirmPassword)
    ])
    if (browser.isIOS) {
      await blackClick();
    }
    await waitAndClick(this.agreeCheckBox)
    if (browser.isAndroid) {
      await waitAndClick(this.signUpButton)
    }
    else if (browser.isIOS) {
      await waitAndClick(this.createAccountBtn)
    }
    await waitForDisplay(this.choosePlanScreenVerify, 20000)
    await swipe("down", loginBase.freePlanBtn)
    await waitAndClick(loginBase.freePlanBtn)
    await waitForDisplay(Login.loginVerifyC)
  }

  async verifyContentForEnterprisePlan() {
    await waitAndClick(this.individualReadBtn1)
    await Promise.all([
      waitForDisplay(this.EnterContent2),
      waitForDisplay(this.SMBContent3),
      waitForDisplay(this.individualContent4),
      waitForDisplay(this.individualContent5),
      waitForDisplay(this.enterContent7),
      waitForDisplay(this.individualContent8),
      waitForDisplay(this.individualContent9),
      waitForDisplay(this.individualContent10),
      waitForDisplay(this.individualContent11),
      waitForDisplay(this.individualContent12),
      waitForDisplay(this.individualContent13),
      waitForDisplay(this.individualContent14),
      waitForDisplay(this.SMBContent15),
      waitForDisplay(this.enterContent16),
      waitForDisplay(this.SMBContent17),
      waitForDisplay(this.individualContent18),
      waitForDisplay(this.individualContent19),
      waitForDisplay(this.individualContent20)
    ]);

    await waitAndClick(this.planReadCloseButton);
    await waitForDisplay(this.choosePlanScreenVerify);
  }

  async verifyContentForSMBPlan() {
    await swipe("down", loginBase.freePlanBtn)
    await waitAndClick(this.individualReadBtn);
    await Promise.all([
      waitForDisplay(this.SMBContent2),
      waitForDisplay(this.SMBContent3),
      waitForDisplay(this.individualContent4),
      waitForDisplay(this.individualContent5),
      waitForDisplay(this.SMBContent6),
      waitForDisplay(this.SMBContent7),
      waitForDisplay(this.individualContent8),
      waitForDisplay(this.individualContent9),
      waitForDisplay(this.SMBContent10),
      waitForDisplay(this.individualContent11),
      waitForDisplay(this.individualContent12),
      waitForDisplay(this.individualContent13),
      waitForDisplay(this.individualContent14),
      waitForDisplay(this.SMBContent15),
      waitForDisplay(this.SMBContent16),
      waitForDisplay(this.individualContent18),
      waitForDisplay(this.individualContent19),
      waitForDisplay(this.SMBContent17)
    ])
    await waitAndClick(this.planReadCloseButton)
    await waitForDisplay(this.choosePlanScreenVerify);
  }

  async verifyContentForPlan(name, lastName, email, phoneNumber, contractor, password, confirmPassword) {
    if (browser.isAndroid) {
      await this.fieldValidateBase(name, lastName, email, phoneNumber, contractor, password, confirmPassword)
      await waitForDisplay(this.clickChoosePlanMessage, 20000);
      await this.verifyContentForIndividualPlan();
      await this.verifyContentForSMBPlan();
      await this.verifyContentForEnterprisePlan();
    }
  }

  async verifyIndiPlanFlow(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword)
    await waitForDisplay(this.clickChoosePlanMessage, 20000)
    await waitAndClick(this.clickIndividualPlan)
    await waitAndClick(this.clickSubscribeButton)
  }
  async verifyContentForIndividualPlan() {
    await waitAndClick(this.individualReadBtn)
    await Promise.all([
      await waitForDisplay(this.individualContent2),
      await waitForDisplay(this.individualContent3),
      await waitForDisplay(this.individualContent4),
      await waitForDisplay(this.individualContent5),
      await waitForDisplay(this.individualContent6),
      await waitForDisplay(this.individualContent8),
      await waitForDisplay(this.individualContent8),
      await waitForDisplay(this.individualContent9),
      await waitForDisplay(this.individualContent10),
      await waitForDisplay(this.individualContent11),
      await waitForDisplay(this.individualContent12),
      await waitForDisplay(this.individualContent13),
      await waitForDisplay(this.individualContent14),
      await waitForDisplay(this.individualContent15),
      await waitForDisplay(this.individualContent16),
      await waitForDisplay(this.individualContent17),
      await waitForDisplay(this.individualContent18),
      await waitForDisplay(this.individualContent19)
    ])
    await waitAndClick(this.planReadCloseButton);
    await waitForDisplay(this.clickChoosePlanMessage);
  }
  async verifyIndiPlanFlow(name, lastName, email, phoneNumber, contractor, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, contractor, password, confirmPassword)
    await waitForDisplay(this.clickChoosePlanMessage, 20000);
    await waitAndClick(this.clickIndividualPlan)
    await waitAndClick(this.clickSubscribeButton)
    await waitForDisplay(this.indiSubcripMContent1);
    await waitForDisplay(this.indiSubcripMContent2);
    await waitAndSetValue(this.cardField, cardNum);
    await waitAndSetValue(this.monthField, cardMonth);
    await waitAndSetValue(this.cvcField, cardCVC);
    await waitAndSetValue(this.nameField, cardName);
    if (browser.isIOS) {
      await blackClick()
    }    
    await swipe("down", this.subcripConfrimBtn)
    await waitAndClick(this.subcripConfrimBtn)
    if (browser.isIOS) {
      await waitForDisplay(this.paymentSuccess,20000)
    }    
    await waitForDisplay(this.subConfrimContent1,20000);
    await waitForDisplay(this.subConfrimContent2);
    await waitAndClick(this.backToHomeBtn)
    await waitForDisplay(loginBase.loginVerifyC);
  }
  async verifyDefaultFreePlanFeature(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword)
    await waitForDisplay(this.clickChoosePlanMessage);
    if (browser.isAndroid) {
      await browser.terminateApp(appPackageName)
      await browser.activateApp(appPackageName)
    } else {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitForDisplay(Login.loginVerifyC, 30000);
    await waitAndClick(this.profileBtn)
    await waitAndClick(this.manageSubcriptionBtn)
    await waitForDisplay(this.freePlanContent);
  }
  async verifyPriceCheckYearly(name, lastName, email, phoneNumber, password, confirmPassword) {
   if (browser.isAndroid) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword)
    await waitForDisplay(this.clickChoosePlanMessage);
    await waitAndClick(this.planSwitchBtn)
    await waitAndClick(this.clickIndividualPlan)
    await waitAndClick(this.clickSubscribeButton)
    await waitForDisplay(this.indiSubcripYContent1, 20000);
    await waitForDisplay(this.indiSubcripYContent2);
    await waitAndClick(this.stripeBack)
    await waitAndClick(this.backToHomeBtn)
    await waitAndClick(this.clickSMBPlan)
    await waitAndClick(this.clickSubscribeButton)
    await waitForDisplay(this.SMBSubcripYContent1);
    await waitForDisplay(this.SMBSubcripYContent2);
    await waitAndClick(this.stripeBack)
    await waitAndClick(this.backToHomeBtn)
    await swipe("down", Login.freePlanBtn);
    await waitAndClick(this.clickEnterprisePlan)
    await waitAndClick(this.clickSubscribeButton)
    await waitForDisplay(this.enterSubcripYContent1, 20000);
    await waitForDisplay(this.enterSubcripYContent2);
   }
  }
  async verifyEnterpricePlanFlow(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword)
    await waitForDisplay(this.clickChoosePlanMessage);
    await swipe("down", Login.freePlanBtn);
    await waitAndClick(this.clickEnterprisePlan);
    await waitAndClick(this.clickSubscribeButton);
    await waitForDisplay(this.enterSubcripMContent1, 20000);
    await waitForDisplay(this.enterSubcripMContent2);
    await waitAndSetValue(this.cardField, cardNum);
    await waitAndSetValue(this.monthField, cardMonth);
    await waitAndSetValue(this.cvcField, cardCVC);
    await waitAndSetValue(this.nameField, cardName);
    if (browser.isIOS) {
      await blackClick()
    }    
    await swipe("down", this.subcripConfrimBtn)
    await waitAndClick(this.subcripConfrimBtn)
    if (browser.isIOS) {
      await waitForDisplay(this.paymentSuccess,20000)
    }    
    await waitForDisplay(this.subConfrimContent1,20000);
    await waitForDisplay(this.subConfrimContent2);
    await waitAndClick(this.backToHomeBtn);
    await waitForDisplay(loginBase.loginVerifyC);
  }
  async verifySMBPlanFlow(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword)
    await waitForDisplay(this.clickChoosePlanMessage);
    await waitAndClick(this.clickSMBPlan);
    await waitAndClick(this.clickSubscribeButton);
    await waitForDisplay(this.SMBSubcripMContent1, 20000);
    await waitForDisplay(this.SMBSubcripMContent2);
    await waitAndSetValue(this.cardField, cardNum);
    await waitAndSetValue(this.monthField, cardMonth);
    await waitAndSetValue(this.cvcField, cardCVC);
    await waitAndSetValue(this.nameField, cardName);
    if (browser.isIOS) {
      await blackClick()
    }
    await swipe('down', this.subcripConfrimBtn)
    await waitAndClick(this.subcripConfrimBtn)
    if (browser.isIOS) {
      await waitForDisplay(this.paymentSuccess,20000)
    }
    await waitForDisplay(this.subConfrimContent1,20000);
    await waitForDisplay(this.subConfrimContent2);
    await waitAndClick(this.backToHomeBtn);
    await waitForDisplay(loginBase.loginVerifyC);
  }

  async verifyChangePlan(name, lastName, email, phoneNumber, password, confirmPassword) {
    if (browser.isAndroid) {
      await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword)
      await waitForDisplay(this.clickChoosePlanMessage,20000);
      await waitForDisplay(this.indiMonthPlan);
      await swipe('down', Login.freePlanBtn)
      await waitForDisplay(this.smbMonthPlan);
      await waitForDisplay(this.enterMonthPlan);
      await swipe('up', this.planSwitchBtn)
      await waitAndClick(this.planSwitchBtn);
      await waitForDisplay(this.indiYearPlan);
      await swipe('down', Login.freePlanBtn)
      await waitForDisplay(this.smbYearPlan);
      await waitForDisplay(this.enterYearPlan);
    } else {
      await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword)
      await waitForDisplay(this.clickChoosePlanMessage,20000);
      await waitForDisplay(this.clickIndividualPlan);
      await swipe('down', Login.freePlanBtn)
      await waitForDisplay(this.clickSMBPlan);
      await waitForDisplay(this.clickEnterprisePlan);
      await swipe('up', this.planSwitchBtn)
      await waitAndClick(this.planSwitchBtn);
      await waitForDisplay(this.indiYearPlan);
      await swipe('down', Login.freePlanBtn)
      await waitForDisplay(this.smbYearPlan);
      await waitForDisplay(this.enterYearPlan);
    }

  }
  async verifyElementsOnChooseYourPlan(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword)
    await Promise.all([
      waitForDisplay(this.clickChoosePlanMessage,20000),
      waitForDisplay(this.clickMonthlyPlan),
      waitForDisplay(this.clickYearlyPlan),
      waitForDisplay(this.clickIndividualPlan),
      waitForDisplay(this.clickSMBPlan)
    ])
    await swipe('down', Login.freePlanBtn)
    await Promise.all([
      waitForDisplay(this.clickEnterprisePlan),
      waitForDisplay(this.clickSubscribeButton),
    ])
  }

  async verifyOrganisationFlow(name, lastName, email, phoneNumber, contractor, password, confirmPassword) {
    await this.orgValidationBase(name, lastName, email, phoneNumber, contractor, password, confirmPassword);
    await waitForDisplay(this.choosePlanScreenVerify),
      await swipe('down', Login.freePlanBtn)
    await waitAndClick(loginBase.freePlanBtn)
    await waitForDisplay(Login.loginVerifyC, 10000)
  }

  async verifyAgentFlow(name, lastName, email, phoneNumber, contractor, password, confirmPassword) {
    await this.agentValidationBase(name, lastName, email, phoneNumber, contractor, password, confirmPassword);
    await waitForDisplay(this.choosePlanScreenVerify),
    await swipe('down', Login.freePlanBtn)
    await waitAndClick(loginBase.freePlanBtn)
    await waitForDisplay(Login.loginVerifyC, 10000)
  }

  async verifyElemetsOnSignupScreen() {
    await this.signupNavigate()
    await Promise.all([
      waitForDisplay(this.backBtn),
      waitForDisplay(this.usernameInput),
      waitForDisplay(this.firstNameInput),
      waitForDisplay(this.emailInput),
      waitForDisplay(this.phoneInput),
      waitForDisplay(this.accountTypeBtn)

    ])
    await swipe('down', this.agreeCheckBox)
    await Promise.all([
      waitForDisplay(this.passwordInput),
      waitForDisplay(this.confirmPasswordInput),
      waitForDisplay(this.agreeCheckBox),
      waitForDisplay(this.loginBtn),
    ])
    if (browser.isAndroid) {
      await waitForDisplay(this.signUpButton)
    }
    else if (browser.isIOS) {
      await waitForDisplay(this.createAccountBtn)

    }
  }
  async verifyFieldValidation(name, lastName, email, phoneNumber, contractor, password, confirmPassword) {
    await this.orgValidationBase(name, lastName, email, phoneNumber, contractor, password, confirmPassword);
    if (name === '') {
      await swipe('up', this.usernameInput)
    }
    await waitForDisplay(this.emptyMsg)
    await waitForNoDisplay(this.choosePlanScreenVerify)
  }
  async verifyPasswordValidation(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword);
    await swipe('down', this.agreeCheckBox)
    await waitForDisplay(this.emptyMsg)

  }
  async verifyPhoneFieldValidation(name, lastName, email, phoneNumber, phoneNumber1, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword);
    await waitForDisplay(this.invalidPhoneMsg)
    await waitAndSetValue(this.phoneInput, phoneNumber1)
    await waitAndGetText(this.phoneInput)
    const data = await waitAndGetText(this.phoneInput)
    const dataLen = data.length
    await expect(dataLen).toBe(10)
  }

  async agentValidationBase(name, lastName, email, phoneNumber, contractor, password, confirmPassword) {
    await this.signupNavigate()
    await Promise.all([
      waitAndSetValue(this.usernameInput, name),
      browser.back(),
      waitAndSetValue(this.firstNameInput, lastName),
      waitAndSetValue(this.emailInput, email),
      waitAndSetValue(this.phoneInput, phoneNumber),
    ])
    if (browser.isIOS) {
      await blackClick()
    }
    await waitAndClick(this.accountTypeBtn);
    if (browser.isAndroid) {
      await waitAndClick(this.chooseAgent);
    } else {
      await agentClick()
    }
    await swipe('down', this.agreeCheckBox)
    await Promise.all([
      waitAndSetValue(this.passwordInput, password),
      waitAndSetValue(this.confirmPasswordInput, confirmPassword)
    ])
    if (browser.isAndroid) {
      await waitAndSetValue(this.contractorInput, contractor)
    } else {
      await waitAndSetValue(this.agentField, contractor)
      await waitAndClick(this.passwordEyeBtn2)
    }
    await waitAndClick(this.agreeCheckBox)
    await browser.back()
    if (browser.isAndroid) {
      await waitAndClick(this.signUpButton)
    } else {
      await waitAndClick(this.createAccountBtn)
    }
  }

  async orgValidationBase(name, lastName, email, phoneNumber, contractor, password, confirmPassword) {
    await this.signupNavigate()
    await Promise.all([
      waitAndSetValue(this.usernameInput, name),
      browser.back(),
      waitAndSetValue(this.firstNameInput, lastName),
      waitAndSetValue(this.emailInput, email),
      waitAndSetValue(this.phoneInput, phoneNumber),
    ])
    await waitAndClick(this.signupContect1)
    await waitAndClick(this.accountTypeBtn)
    if (browser.isAndroid) {
      await waitAndClick(this.chooseOrg)
    }
    else {
      await orgClick()
    }
    await swipe('down', this.agreeCheckBox)
    await Promise.all([
      waitAndSetValue(this.contractorInput, contractor),
      waitAndSetValue(this.passwordInput, password),
      waitAndSetValue(this.confirmPasswordInput, confirmPassword)
    ])
    if (browser.isIOS) {
      await blackClick()
    }
    await browser.back()
    await waitAndClick(this.agreeCheckBox)
    if (browser.isAndroid) {
      await waitAndClick(this.signUpButton)
    } else {
      await waitAndClick(this.createAccountBtn)
    }
  }
  async fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.signupNavigate()
    await Promise.all([
      waitAndSetValue(this.usernameInput, name),
      waitAndSetValue(this.firstNameInput, lastName),
      waitAndSetValue(this.emailInput, email),
      waitAndSetValue(this.phoneInput, phoneNumber),

    ])
    await swipe("down", this.agreeCheckBox)
    await Promise.all([
      waitAndSetValue(this.passwordInput, password),
      waitAndSetValue(this.confirmPasswordInput, confirmPassword)

    ])
    await waitAndClick(this.agreeCheckBox)
    await browser.back()
    if (browser.isAndroid) {
      await waitAndClick(this.signUpButton)
    } else {
      await waitAndClick(this.createAccountBtn)
    }
  }
  async verifyMailValidation(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword);
    await waitForDisplay(this.invalidMailMsg)
    await browser.pause(7000)
    await waitForNoDisplay(Login.loginVerifyC)
  }
  async verifyPhoneValidation(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword);
    await waitForDisplay(this.invalidPhoneMsg)
    await browser.pause(7000)
    await waitForNoDisplay(Login.loginVerifyC)
  }
  async verifyBackOption() {
    await this.signupNavigate();
    await waitAndClick(this.backBtn)
    await waitForDisplay(Login.welcomeScreenVerify1C)
  }
  async verifyNavigationToLoginScreen() {
    await this.signupNavigate();
    await waitAndClick(this.loginBtn)
    await Promise.all([
      waitForDisplay(Login.welcomeScreenVerify1C),
      waitForDisplay(Login.emailFieldC),
      waitForDisplay(Login.passwordFieldC),
      waitForDisplay(Login.loginBtnC),
      waitForDisplay(Login.forgotPasswordFieldC),
      waitForDisplay(Login.googleBtnC),
      waitForDisplay(Login.signUpButtonC),
      waitForDisplay(Login.loginBackBtnC),
      waitForDisplay(Login.passwordEyeIconC),
      waitForDisplay(Login.welcomeScreenVerify1C)
    ])
  }
  async verifyNoDataAfterSignup(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.verifySignup(name, lastName, email, phoneNumber, password, confirmPassword)
    await waitAndClick(this.WalkthruBtn)
    await waitForDisplay(this.dataEmptyMsg)
    await waitAndClick(this.EngageBtn)
    await waitForDisplay(this.dataEmptyMsg1)
    await waitAndClick(this.LibraryBtn)
    await waitForDisplay(this.dataEmptyMsg1)
  }
  async verifyMailValidation1(name, lastName, email, phoneNumber, password, confirmPassword) {
    await this.fieldValidateBase(name, lastName, email, phoneNumber, password, confirmPassword);
    await waitForDisplay(this.invalidMailMsg)
    await browser.pause(7000)
    await waitForNoDisplay(Login.welcomeScreenVerify1C)
  }
  async verifyInvitedMailSignupWorking(name, lastName, email, phoneNumber, password, confirmPassword) {
    const authToken = await engagementResponseBase.loginResponse()
    const requestData = JSON.stringify({ "email": email, "role": "admin" });
    await this.createInviteUser(authToken, requestData)
    await this.verifySignup(name, lastName, email, phoneNumber, password, confirmPassword)

  }
  async createInviteUser(authToken, requestData) {
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${authToken}`
      },
      data: requestData
    };
    try {
      const response = await axios.request(config);
      console.log('Response1:', response.data);
    } catch (error) {
      console.error('Error1:', error.message);
    }
  }
  async verifyPasswordMismatchValidation() {
    await this.signupNavigate();
    await swipe('down', this.agreeCheckBox)
    await waitAndSetValue(this.passwordInput, 'password')
    await browser.back()
    await waitAndSetValue(this.confirmPasswordInput, 'confirmPassword')
    await browser.back()
    if (browser.isAndroid) {
      await waitAndClick(this.signUpButton)
    } else {
      await blackClick()
      await waitAndClick(this.createAccountBtn)
    }
    await waitForDisplay(this.passwordMismatchMsg)
  }
  async verifyNavigationToGetStartedFromSignup() {
    await this.signupNavigate()
    if (browser.isAndroid) {
      await browser.terminateApp(appPackageName)
      await browser.activateApp(appPackageName)
    }
    else if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }

    await waitForDisplay(Login.welcomeScreenVerify1C, 30000)
  }
  async verifytSpaceRestrictionForLastName() {
    await this.signupNavigate()
    await Promise.all([
      waitAndSetValue(this.usernameInput, 'username'),
      waitAndSetValue(this.firstNameInput, '    '),
      waitAndSetValue(this.emailInput, 'dbidv@gmail.com'),
      waitAndSetValue(this.phoneInput, '7678767878'),
    ])
    await waitAndClick(this.signupContect1)
    if (browser.isAndroid) {
      await waitAndClick(this.signUpButton);
    } else {
      await waitAndClick(this.createAccountBtn);
    }
    await waitForDisplay(this.invalidMsg)
  }
  async verifySpaceRestrictionForFirstNameField() {
    await this.signupNavigate()
    await waitAndSetValue(this.usernameInput, '    ');
    await waitAndClick(this.signupContect1)
    if (browser.isIOS) {
      await waitAndClick(this.createAccountBtn);
    }
    else if (browser.isAndroid) {
      await waitAndClick(this.signUpButton);
    }
    await waitForDisplay(this.invalidMsg)
  }
  async verifyPasswordFieldHideAndUnhideFeature() {
    await this.signupNavigate()
    await waitAndClick(this.passwordEyeBtn)
    await waitAndSetValue(this.passwordInput, '123123'),
      await browser.back();
    const passwordFieldText = await waitAndGetText(this.passwordInput)
    await expect(passwordFieldText).toEqual('123123');
  }
  async verifyConfrimPasswordFieldHideAndUnhideFeature() {
    await this.signupNavigate()
    await swipe('down', this.agreeCheckBox)
    if (browser.isAndroid) {
      await waitAndClick(this.passwordEyeBtn)
    } else {
      await waitAndClick(this.passwordEyeBtn2)
    }
    await waitAndSetValue(this.confirmPasswordInput, '123123'),
      await browser.back();
    const confrimPasswordFieldText = await waitAndGetText(this.confirmPasswordInput)
    await expect(confrimPasswordFieldText).toEqual('123123');
  }
  async verifyFormEmptyValidation() {
    await this.signupNavigate()
    if (browser.isAndroid) {
      await waitAndClick(this.signUpButton)
    } else {
      await waitAndClick(this.createAccountBtn)
    }
    await waitForDisplay(this.emptyMsg)
    await swipe('down', this.agreeCheckBox)
    await waitForDisplay(this.checkBoxEmptyMsg)
  }
  async signupNavigate() {
    await waitForDisplay(loginBase.welcomeScreenVerify1C, 20000)
    await waitAndClick(this.signUpButton)
    await waitForDisplay(this.signupContect1);
    await waitForDisplay(this.signupContect2);
  }
  async verifyAndLogout() {
    await waitForDisplay(Login.loginVerifyC, 10000);
    await waitAndClick(Login.profileBtnC)
    await waitForDisplay(Login.profileScreenVerifyC);
    await waitAndClick(Login.logoutBtnC)
    await waitAndClick(Login.logoutConfrimBtnC)
    await waitForDisplay(Login.welcomeScreenVerify1C);
  }

}


export default new Signup();
