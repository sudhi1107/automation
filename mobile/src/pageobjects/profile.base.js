/**
 * sub page containing specific selectors and methods for a specific page
 */
import { appMailLower, appPassword, iosAppMailUpper, iosPackageName } from "../../config.js";
import profileConstants from "../elementBase/profile.ele.js"
import { blackClick, waitAndClick, waitAndGetText, waitAndSetValue, waitForDisplay, waitForNoDisplay } from "../helper/helper.js";
import createPersolizedReportBase from "./createPersolizedReport.base.js";
import createVideoClipBase from "./createVideoClip.base.js";
import forgotPasswordBase from "./forgotPassword.base.js";
import loginBase from "./login.base.js";
import signupBase from "./signup.base.js";
import axios from "axios";
import moment from 'moment';
const mail = browser.isAndroid ? appMailLower : iosAppMailUpper
class Profile {
  get profileButton() {
    return profileConstants.profileButtonXPath
  }

  get profileScreenVerify() {
    return profileConstants.profileScreenVerifyXPath
  }

  get editProfileButton() {
    return profileConstants.editProfileButtonXPath
  }

  get settingsButton() {
    return profileConstants.settingsButtonXPath
  }

  get changePasswordButton() {
    return profileConstants.changePasswordButtonXPath
  }

  get aboutButton() {
    return profileConstants.aboutButtonXPath
  }

  get deleteAccountButton() {
    return profileConstants.deleteAccountButtonXPath
  }

  get logoutButton() {
    return profileConstants.logoutButtonXPath
  }

  get backButton() {
    return profileConstants.backButtonXPath
  }
  get changePasswordScreenContent1() {
    return profileConstants.changePasswordScreenContent1
  }
  get newPassField() {
    return profileConstants.newPassField
  }
  get changePasswordField() {
    return profileConstants.changePasswordField
  }
  get changePassBackBtn() {
    return profileConstants.changePassBackBtn
  }
  get savePassBtn() {
    return profileConstants.savePassBtn
  }
  get profileBackBtn() {
    return profileConstants.profileBackBtn
  }
  get deleteScreenBackBtn() {
    return profileConstants.deleteScreenBackBtn
  }
  get deleteConfrimBtn() {
    return profileConstants.deleteConfrimBtn
  }
  get connectionBtn() {
    return profileConstants.connectionBtn
  }
  get connectAgentField() {
    return profileConstants.connectAgentField
  }
  get connectAgentBackBtn() {
    return profileConstants.connectAgentBackBtn
  }
  get sendConnection() {
    return profileConstants.sendConnection
  }
  get disconnectCheck() {
    return profileConstants.disconnectCheck
  }
  get logoBrowseBtn() {
    return profileConstants.logoBrowseBtn
  }
  get saveSettingBtn() {
    return profileConstants.saveSettingBtn
  }
  get saveEditProfileBtn() {
    return profileConstants.saveEditProfileBtn
  }
  get editProfileBackBtn() {
    return profileConstants.editProfileBackBtn
  }
  get profileIconBtn() {
    return profileConstants.profileIconBtn
  }
  get profileIconEditBtn() {
    return profileConstants.profileIconEditBtn
  }
  get galleryBtn() {
    return profileConstants.galleryBtn
  }
  get logoutConfrimBtn() {
    return profileConstants.logoutConfrimBtn
  }
  get manageSubcripBtn() {
    return profileConstants.manageSubcripBtn
  }
  get switchAccountBtn() {
    return profileConstants.switchAccountBtn
  }
  get freePlanCheck() {
    return profileConstants.freePlanCheck
  }
  get cancelSubcripbtn() {
    return profileConstants.cancelSubcripbtn
  }
  get cancelSubcripConfirmBtn() {
    return profileConstants.cancelSubcripConfirmBtn
  }
  get policyBtn() {
    return profileConstants.policyBtn
  }
  get termsBtn() {
    return profileConstants.termsBtn
  }
  get aboutBackBtn() {
    return profileConstants.aboutBackBtn
  }
  get addOrganization() {
    return profileConstants.addOrganization
  }
  get switchOrganization() {
    return profileConstants.switchOrganization
  }
  get addOrganizationBackBtn() {
    return profileConstants.addOrganizationBackBtn
  }
  get organozationNameField() {
    return profileConstants.organozationNameField
  }
  get addOrgBtn() {
    return profileConstants.addOrgBtn
  }
  get emptyFieldValidation() {
    return profileConstants.emptyFieldValidation
  }
  get emailField() {
    return profileConstants.emailField
  }
  async checkPasswordChange(pass) {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.changePasswordButton)
    await waitForDisplay(this.changePasswordScreenContent1)
    await waitAndSetValue(this.newPassField, pass)
    await waitAndSetValue(this.changePasswordField, pass)
    if (browser.isIOS) {
      await waitAndClick(this.changePasswordScreenContent1)
    }
    await waitAndClick(this.savePassBtn)
    await waitForDisplay(loginBase.loginVerifyC)
  }


  async createuser(type, agent) {
    let data1 = JSON.stringify({
      "firstName": "Hello",
      "lastName": "M",
      "contractorName": "hello",
      "contractorType": type,
      "agent": agent,
      "email": generateRandomEmail(),
      "password": "123123"
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://qa-api.digitalreps.ai/v2/auth/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data1
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(await response.data.data.email));
      const indiMail = response.data.data.email
      const auth = response.data.data.accessToken
      return { indiMail, auth };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async addSubcription(type, agent, period) {
    const getData = await this.createuser(type, agent);
    const mail = getData.indiMail
    const auth = getData.auth
    let data = JSON.stringify({
      "planName": "individual",
      "period": period,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://qa-api.walkthru.ai/v2/users/subscriptions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      },
      data: data
    };

    try {
      await axios(config);
      console.log(mail, 'suyfdty')
      return mail
    } catch (error) {
      console.log(error);
    }
  }

  async linkAgentCheck(data) {
    switch (data) {
      case 'Org':
        var { indiMail } = await this.createuser('organization', false);
        break;
      case 'Indi':
        var { indiMail } = await this.createuser('individual', false);
        break;
      default:
        break;
    }
    var { indiMail: agentMail } = await this.createuser('organization', true);
    await loginBase.verifyLoginFeatureForValidCredentials(indiMail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.connectionBtn)
    await waitAndSetValue(this.connectAgentField, agentMail)
    if (browser.isIOS) {
      await waitAndSetValue(this.connectAgentField, agentMail)
      await blackClick()
    }
    await waitAndClick(this.sendConnection)
    await waitAndClick(this.connectionBtn)
    const getMail = await waitAndGetText(this.connectAgentField)
    await expect(getMail).toBe(agentMail);
    await waitForDisplay(this.disconnectCheck)
    await waitAndClick(this.disconnectCheck)
    await waitAndClick(this.connectionBtn)
    const getMailEmpty = await waitAndGetText(this.connectAgentField)
    await expect(getMailEmpty).toBe('');

  }

  async saveEditProfile() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.editProfileButton)
    await waitAndClick(this.profileIconBtn)
    await waitAndClick(this.profileIconEditBtn)
    await waitAndClick(this.galleryBtn)
    await waitAndClick(createPersolizedReportBase.selectImage)
    await browser.pause(5000);
    await waitAndClick(this.saveEditProfileBtn)
    await waitForDisplay(this.profileScreenVerify)
    await browser.pause(1000);
    await waitAndClick(this.logoutButton)
    await waitAndClick(this.logoutConfrimBtn)
    await waitForDisplay(loginBase.welcomeScreenVerify1C)
  }

  async logoUploadCheck() {
    var { indiMail } = await this.createuser('individual', false);
    await loginBase.verifyLoginFeatureForValidCredentials(indiMail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.settingsButton)
    await waitAndClick(this.logoBrowseBtn)
    await waitAndClick(createPersolizedReportBase.selectImage)
    await browser.pause(5000);
    await waitAndClick(this.saveSettingBtn)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.settingsButton)
    await waitForNoDisplay(this.logoBrowseBtn)
  }

  async deleteAccountCheck() {
    const { indiMail } = await this.createuser('individual', false);
    await loginBase.verifyLoginFeatureForValidCredentials(indiMail, appPassword);
    if (browser.isIOS) {
      await browser.terminateApp(iosPackageName)
      await browser.activateApp(iosPackageName)
    }
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await browser.pause(1000);
    await waitAndClick(this.deleteAccountButton)
    await waitAndClick(this.deleteConfrimBtn)
    await browser.pause(3000);
    const otp = await forgotPasswordBase.getOtp(indiMail);
    await waitAndSetValue(forgotPasswordBase.otpInputField1, otp.charAt(0)),
    await waitAndSetValue(forgotPasswordBase.otpInputField2, otp.charAt(1)),
    await waitAndSetValue(forgotPasswordBase.otpInputField3, otp.charAt(2)),
    await waitAndSetValue(forgotPasswordBase.otpInputField4, otp.charAt(3)),
    await waitAndClick(forgotPasswordBase.verifyButton)
    await waitAndClick(this.deleteScreenBackBtn)
    await waitForDisplay(loginBase.welcomeScreenVerify1C)
  }

  async verifyProfileButtonOnVeriousScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(signupBase.WalkthruBtn)
    await waitForDisplay(this.profileButton)
    await waitAndClick(signupBase.EngageBtn)
    await waitForNoDisplay(this.profileButton)
  }
  async verifyBackForWalkthruScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(signupBase.WalkthruBtn)
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.backButton)
    await waitForDisplay(signupBase.WalkthruBtn)
  }
  async verifyElementsOnProfileScreen(data) {
    switch (data) {
      case 'Indi':
        var { indiMail } = await this.createuser('individual', false);
        break;
      case 'Org':
        var { indiMail } = await this.createuser('organization', false);
        break
      case 'Agent':
        var { indiMail } = await this.createuser('organization', true);
        break
      default:
        break;
    }
    await loginBase.verifyLoginFeatureForValidCredentials(indiMail, appPassword);
    await waitAndClick(signupBase.WalkthruBtn)
    await waitAndClick(this.profileButton)
    await Promise.all([
      waitForDisplay(this.profileScreenVerify),
      waitForDisplay(this.editProfileButton),
      waitForDisplay(this.settingsButton),
      waitForDisplay(this.manageSubcripBtn),
      waitForDisplay(this.connectionBtn),
      waitForDisplay(this.changePasswordButton),
      waitForDisplay(this.aboutButton),
      waitForDisplay(this.deleteAccountButton),
      waitForDisplay(this.logoutButton)
    ])
    if (data === "Agent") {
      await waitForDisplay(this.switchAccountBtn)
    }
  }
  async verifyAboutScreenNavigation() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(signupBase.WalkthruBtn, 30000)
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.aboutButton)
    await Promise.all([
      waitForDisplay(this.policyBtn),
      waitForDisplay(this.termsBtn)
    ])
    await waitAndClick(this.aboutBackBtn)
    await waitForDisplay(this.profileScreenVerify)
  }

  async verifyForAgentConnectFeature() {
    var { indiMail } = await this.createuser('organization', true);
    await loginBase.verifyLoginFeatureForValidCredentials(indiMail, appPassword);
    await waitAndClick(signupBase.WalkthruBtn)
    await waitAndClick(this.profileButton)
    await waitAndClick(this.connectionBtn)
    await waitForDisplay(this.disconnectCheck)
  }

  async addOrganizationFeature() {
    var { indiMail } = await this.createuser('organization', true);
    await loginBase.verifyLoginFeatureForValidCredentials(indiMail, appPassword);
    await waitAndClick(signupBase.WalkthruBtn)
    await waitAndClick(this.profileButton)
    await waitAndClick(this.switchAccountBtn)
    await waitAndClick(this.addOrganization)
    await waitAndSetValue(this.organozationNameField, '')
    await waitAndClick(this.addOrgBtn)
    await waitForDisplay(this.emptyFieldValidation)
    await waitAndSetValue(this.organozationNameField, 'hello1')
    await waitAndClick(this.addOrgBtn)
    await waitForDisplay(signupBase.choosePlanScreenVerify)
    await browser.closeApp();
    await browser.launchApp();
    await waitAndClick(this.profileButton)
    await waitAndClick(this.editProfileButton)
    const email = await waitAndGetText(this.emailField);
    await expect(indiMail).toBe(email);
  }

  async verifyMailFeature() {

  }

  async verifySubCriptionValidity(data) {
    switch (data) {
      case 'free':
        var indiMail = await this.addSubcription('individual', false);
        break;
      case 'monthly':
        var indiMail = await this.addSubcription('organization', true, data);
        break;
      case 'yearly':
        var indiMail = await this.addSubcription('organization', false, data);
        break;
      default:
        break;
    }
    await loginBase.verifyLoginFeatureForValidCredentials(indiMail, appPassword);
    await waitAndClick(signupBase.WalkthruBtn)
    await waitAndClick(this.profileButton)
    await waitAndClick(this.manageSubcripBtn)
    switch (data) {
      case 'free':
        await waitForDisplay(this.freePlanCheck)
        break;
      case 'montly':
        const expirationDateMontly = moment().add(1, 'month').format('D MMMM YYYY');
        const element = `//android.widget.TextView[@text="Your plan expires on ${expirationDateMontly}"]`
        await waitForDisplay(element)
        await waitAndClick(this.cancelSubcripbtn)
        await waitAndClick(this.cancelSubcripConfirmBtn)
        await waitForDisplay(loginBase.loginVerifyC, 10000)
        break;
      case 'yearly':
        await waitForDisplay(this.freePlanCheck)
        break;
      default:
        break;
    }
  }

  async verifyBackForEngageScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(signupBase.EngageBtn)
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.backButton)
    await waitForDisplay(signupBase.WalkthruBtn)
  }
  async verifyBackForLibraryScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(signupBase.LibraryBtn)
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.backButton)
    await waitForDisplay(signupBase.WalkthruBtn)
  }
  async verifyBackForCommunityScreen() {
    await loginBase.verifyLoginFeatureForValidCredentials(mail, appPassword);
    await waitAndClick(signupBase.CommunityBtn)
    await waitAndClick(this.profileButton)
    await waitForDisplay(this.profileScreenVerify)
    await waitAndClick(this.backButton)
    await waitForDisplay(signupBase.WalkthruBtn)
  }
}

function generateRandomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = 'automation_';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    email += characters.charAt(randomIndex);
  }

  email += '@yopmail.com';
  return email;
}

export default new Profile();
