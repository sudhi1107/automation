let engagementResponse;
if (browser.isIOS) {
  engagementResponse = {
    appVerify: "//*[@value='It is quick and easy to log in. Enter your credentials.']",
    mailID: "//*[@name='login-email']",
    password: "//*[@name='login-password']",
    loginBtn: "//*[@name='login_with_pass']",
    verifyLogin: "//*[@name='Dashboard, tab, 1 of 3']",
    logoutBtn: "//*[@name='navigate-logout']",
    logoutConfirmBtn: "//*[@name='Logout']",
    invalidEmail: "//*[@name='Please enter a valid email address']",
    logoutCancelBtn: "//*[@name='Cancel']",
    profileConfirmScreen: "//*[@label='Delete Account']"
  };
} else if (browser.isAndroid) {
  engagementResponse = {
    engageBtnXPath: "xpath://android.widget.TextView[@text=\"Engage\"]",
    engageScreenVerify: "xpath://android.widget.TextView[@text=\"My Engagement\"]"
  };
}
export default engagementResponse;