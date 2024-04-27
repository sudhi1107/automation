let createPersolized;
if (browser.isIOS) {
  createPersolized = {
    walkthruFirstBtnXPath: `(//XCUIElementTypeOther[@name="shareicon-click"])[1]`,
    personalizeNameXPath: `~personalize-message`,
    metaNameXPath: "~meta_input-0",
    coverImageBtnXPath: `~upload-image`,
    galleryBtnId: "~Gallery",
    selectImageXPath: "~Photo, April 24, 6:00 PM",
    personalizeBtnXPath: "~personalize-click",
    verifyPersonalizeScreen: `//XCUIElementTypeStaticText[@name="Personalize AI Funnel"]`,
    verifyPersonalizeScreen2: `//XCUIElementTypeStaticText[@name="AI Funnel is ready !"]`,
    verifyPersonalizeScreen1: `//XCUIElementTypeStaticText[@name="Upload your"]`,
    verifyPersonalizeScreenXPath: `//XCUIElementTypeStaticText[@name="Share personalized AI Funnel by scanning the Magic code."]`,
    backBtnXPath: `~agent-back`,
    engageBtnXPath: "xpath://android.widget.TextView[@text=\"Engage\"]",
    shareBtn: "~share-agent",
    verifyWalkthruView: `//XCUIElementTypeStaticText[@label="AdaptiveFunnels AI"]`,
    fillItYourselfBtn: "~Fill it yourself",
    personalizeBackBtn : '~personalize-back',
    clickEngageBtnXPath: "xpath://android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]",
    verifySharePopScreen : `//XCUIElementTypeCell[@name="Messages"]/XCUIElementTypeOther/XCUIElementTypeImage`,
    scanQrBtn : `//XCUIElementTypeOther[@name="flash-qr"]/XCUIElementTypeOther`,
    scanQrBackBtn : `~scan-back`,
    scanQrContent1 : `//XCUIElementTypeStaticText[@name="Scan QR"]`,
    uploadConfirmText : `//android.widget.TextView[@text="Please Wait! Your thumbnail is uploading...."]`
  };
} 
else if (browser.isAndroid) {
  createPersolized = {
  walkthruFirstBtnXPath: `(//android.view.ViewGroup[@resource-id="shareicon-click"])[1]`,
  personalizeNameXPath: `//android.widget.EditText[@resource-id="personalize-message"]`,
  metaNameXPath: "xpath://android.view.ViewGroup[5]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText",
  coverImageBtnXPath: `//android.view.ViewGroup[@resource-id="upload-image"]`,
  galleryBtnId: "id:android:id/button1",
  selectImageXPath: "xpath:(//android.widget.ImageView[@resource-id=\"com.google.android.providers.media.module:id/icon_thumbnail\"])[1]",
  personalizeBtnXPath: "xpath://android.widget.TextView[@text=\"Personalize\"]",
  verifyPersonalizeScreen: "xpath://android.widget.TextView[@text=\"Personalize AI Funnel\"]",
  verifyPersonalizeScreen2: "xpath://android.widget.TextView[@text=\"AI Funnel is ready !\"]",
  verifyPersonalizeScreen1: "xpath://android.widget.TextView[@text=\"Upload your Thumbnail\"]",
  verifyPersonalizeScreenXPath: "xpath://android.widget.TextView[@text=\"Share this personalized AI Funnel by scanning the QR code.\"]",
  backBtnXPath: `//android.view.ViewGroup[@resource-id="agent-back"]`,
  engageBtnXPath: "xpath://android.widget.TextView[@text=\"Engage\"]",
  shareBtn: "xpath://android.widget.TextView[@text=\"Share\"]",
  verifyWalkthruView: "xpath://android.widget.TextView[@text=\"Tap anywhere to proceed\"]",
  fillItYourselfBtn: "xpath://android.widget.TextView[@text=\"Fill it yourself\"]",
  personalizeBackBtn : '//android.view.ViewGroup[@resource-id="personalize-back"]',
  clickEngageBtnXPath: "xpath://android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]",
  verifySharePopScreen : `//android.widget.LinearLayout[@resource-id="android:id/content_preview_text_area"]`,
  scanQrBtn : `//android.widget.ImageView`,
  scanQrBackBtn : `//com.horcrux.svg.SvgView`,
  scanQrContent1 : "xpath://android.widget.TextView[@text=\"Scan QR\"]",
  uploadConfirmText : `//android.widget.TextView[@text="Please Wait! Your thumbnail is uploading...."]`
};
}
export default createPersolized;