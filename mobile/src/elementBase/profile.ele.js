let profile;
if (browser.isIOS) {
  profile = {
    profileButtonXPath: `~home-profile`,
    profileScreenVerifyXPath:
      `//XCUIElementTypeStaticText[@name="Profile"]`,
    editProfileButtonXPath:
      `~Edit Profileclick`,
    settingsButtonXPath:
      `~Settingsclick`,
    changePasswordButtonXPath: `~Change Passwordclick`,
    aboutButtonXPath:
      `~Aboutclick`,
    deleteAccountButtonXPath:
      `~Delete Accountclick`,
    logoutButtonXPath:
      `~Logoutclick`,
    backButtonXPath:
      `~profile-back`,
    changePasswordScreenContent1: `//XCUIElementTypeStaticText[@name="Your new password must be different from previous used passwords"]`,
    newPassField: `~change-new`,
    changePasswordField: `~change-password`,
    changePassBackBtn: `~changepassword-back`,
    savePassBtn: `~changepassword-save`,
    profileBackBtn: `~profile-back`,
    deleteScreenBackBtn: `~Back`,
    deleteConfrimBtn: `~delete-account`,
    connectionBtn: `~Connectionclick`,
    connectAgentField: `~connectAgentText`,
    connectAgentBackBtn: `~connectAgentBack`,
    sendConnection: `~SendConnection`,
    disconnectCheck: `~Disconnect`,
    logoBrowseBtn: `~browse-image`,
    saveSettingBtn: `~save-settings`,
    saveEditProfileBtn: `~profile-save`,
    editProfileBackBtn: `~edit-profileback`,
    profileIconBtn: `~open-profile`,
    profileIconEditBtn: `~edit-btnclick`,
    galleryBtn: `~Gallery`,
    logoutConfrimBtn: `~OK`,
    manageSubcripBtn: `~Manage Subscriptionclick`,
    switchAccountBtn: `~Switch Accountclick`,
    freePlanCheck: `~You are currently on the free plan (14 Days Trail)`,
    cancelSubcripbtn: `(//XCUIElementTypeOther[@name="Cancel"])[2]`,
    cancelSubcripConfirmBtn: `~Yes`,
    policyBtn: `~Privacy Policy select`,
    termsBtn: `~Terms & Conditions select`,
    aboutBackBtn: `~select-policy-back`,
    addOrganization: `~Add Organization`,
    switchOrganization: `(//XCUIElementTypeOther[@name="Switch Organization"])[3]`,
    addOrganizationBackBtn: `~backSwitch`,
    organozationNameField: `~organizationField`,
    addOrgBtn: `~addOrgBtn`,
    emptyFieldValidation: `//XCUIElementTypeStaticText[@name="This field is required"]`,
    emailField: `//XCUIElementTypeTextField[@name="Email ID"]`
  };
} else if (browser.isAndroid) {
  profile = {
    profileButtonXPath: `//android.view.ViewGroup[@resource-id="home-profile"]`,
    profileScreenVerifyXPath:
      `//android.widget.TextView[@text="Profile"]`,
    editProfileButtonXPath:
      `//android.view.ViewGroup[@resource-id="Edit Profileclick"]`,
    settingsButtonXPath:
      `//android.view.ViewGroup[@resource-id="Settingsclick"]`,
    changePasswordButtonXPath: `//android.view.ViewGroup[@resource-id="Change Passwordclick"]`,
    aboutButtonXPath:
      `//android.view.ViewGroup[@resource-id="Aboutclick"]`,
    deleteAccountButtonXPath:
      `//android.view.ViewGroup[@resource-id="Delete Accountclick"]`,
    logoutButtonXPath:
      `//android.view.ViewGroup[@resource-id="Logoutclick"]`,
    backButtonXPath:
      `//android.view.ViewGroup[@resource-id="profile-back"]`,
    changePasswordScreenContent1: `//android.widget.TextView[@text="Your new password must be different from previous used passwords"]`,
    newPassField: `//android.widget.EditText[@resource-id="change-new"]`,
    changePasswordField: `//android.widget.EditText[@resource-id="change-password"]`,
    changePassBackBtn: `//android.view.ViewGroup[@resource-id="changepassword-back"]`,
    savePassBtn: `//android.view.ViewGroup[@resource-id="changepassword-save"]`,
    profileBackBtn: `//android.view.ViewGroup[@resource-id="profile-back"]`,
    deleteScreenBackBtn: `//android.widget.TextView[@text="Back"]`,
    deleteConfrimBtn: `//android.view.ViewGroup[@resource-id="delete-account"]`,
    connectionBtn: `//android.view.ViewGroup[@resource-id="Connectionclick"]`,
    connectAgentField: `//android.widget.EditText[@resource-id="connect agent"]`,
    connectAgentBackBtn: `//android.view.ViewGroup[@resource-id="connect agent"]`,
    sendConnection: `//android.widget.TextView[@text="Send Connection"]`,
    disconnectCheck: `//android.widget.TextView[@text="Disconnect"]`,
    logoBrowseBtn: `//android.view.ViewGroup[@resource-id="browse-image"]`,
    saveSettingBtn: `//android.view.ViewGroup[@resource-id="save-settings"]`,
    saveEditProfileBtn: `//android.view.ViewGroup[@resource-id="profile-save"]`,
    editProfileBackBtn: `//android.view.ViewGroup[@resource-id="edit-profileback"]`,
    profileIconBtn: `//android.view.ViewGroup[@resource-id="open-profile"]`,
    profileIconEditBtn: `//android.view.ViewGroup[@resource-id="edit-btnclick"]`,
    galleryBtn: `//android.widget.Button[@resource-id="android:id/button1"]`,
    logoutConfrimBtn: `//android.widget.Button[@resource-id="android:id/button1"]`,
    manageSubcripBtn: `//android.view.ViewGroup[@resource-id="Manage Subscriptionclick"]`,
    switchAccountBtn: `//android.view.ViewGroup[@resource-id="Switch Accountclick"]`,
    freePlanCheck: `//android.widget.TextView[@text="You are currently on the free plan"]`,
    cancelSubcripbtn: `//android.widget.TextView[@text="Cancel"]`,
    cancelSubcripConfirmBtn: `//android.widget.Button[@resource-id="android:id/button2"]`,
    policyBtn: `//android.view.ViewGroup[@resource-id="Privacy Policy select"]`,
    termsBtn: `//android.view.ViewGroup[@resource-id="Terms & Conditions select"]`,
    aboutBackBtn: `//android.view.ViewGroup[@resource-id="select-policy-back"]`,
    addOrganization: `//android.widget.TextView[@text="Add Organization"]`,
    switchOrganization: `(//android.widget.TextView[@text="Switch Organization"])[2]`,
    addOrganizationBackBtn: `//android.view.ViewGroup[@resource-id="connect agent"]`,
    organozationNameField: `//android.widget.EditText[@resource-id="connect agent"]`,
    addOrgBtn: `(//android.widget.TextView[@text="Add Organization"])[2]`,
    emptyFieldValidation: `//android.widget.TextView[@text="This field is required"]`,
    emailField: `//android.widget.EditText[@resource-id="Email ID"]`
  };
}
export default profile;