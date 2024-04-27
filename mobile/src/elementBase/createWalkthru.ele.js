let createWalkthru;
if (browser.isIOS) {
  createWalkthru = {
    libraryButtonXPath: '~Library, tab, 4 of 5',
    addClipButtonXPath: `~addform-click`,
    addClipOnSearchBtn : `//android.view.ViewGroup[@resource-id="add-click"]`,
    addClipBtn : `(//XCUIElementTypeOther[@name="Add"])[1]`,
    addClipBtn2 : `(//XCUIElementTypeOther[@name="Add"])[2]`,
    galleryButton: '//XCUIElementTypeButton[@name="Gallery"]',
    previewScreen1: 'xpath://*[@text="Preview"]',
    editBtn: '~edit-click',
    updateScreenConten1 : 'xpath://*[@text="Update Video Clip"]',
    updateBtn : 'xpath://*[@text="Update"]',
    updateSuccessScreen : 'xpath://*[@text="Video Clip Successfully Updated!"]',
    updateSuccessScreen1 : '~AI Funnel Updated Successfully!',
    backOnUpdateVideoClipBtn : `xpath://android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]`,
    nextButtonXPath: '~Next',
    walkthruTitleFieldClassName: '~agent-title',
    metaOptionButtonXPath: '(//XCUIElementTypeOther[@name="Cookies"])[2]',
    metaDataSelectXPath: 'xpath://android.widget.TextView[@text="metaTest"]',
    cookieFormName : `~form-name`,
    cookieLabelField : `~formlabel_0`,
    labelFieldXPath: 'xpath://android.widget.TextView[@metaOptionButton="label1"]',
    createWalkthruButtonXPath: '~agent-save',
    verifyWalkthruCreateSuccessXPath: '~Your AI Funnel Created Successfully!',
    sendToCustomerBtn : `~send-customer`,
    verifyWalkthruContent1 : `//XCUIElementTypeStaticText[@name="Your AI Funnel is now ready. Share it with your customer to explain and engage!"]`,
    backToLibraryButtonXPath: `~backtoform-click`,
    backToAIFunnelButton: `~backtoform-click`,
    walkthruScreenContent1: "xpath://android.widget.TextView[@text=\"You can create a AI Funnel with the list of videos selected by you.\"]",
    visibilityBtn: "xpath://android.widget.TextView[@text=\"Visibility\"]",
    walkthruBackBtn : `~Agent-back`,
    funnelTypeBtn : `(//XCUIElementTypeOther[@name="Funnel Type Static"])[1]`,
    dynamicSelectBtn : `~selectedInput-1`,
    selectVideoClipBack : `~Agent-back`,
    walkthruEmptyCheck : `//XCUIElementTypeStaticText[@name="This field is required"]`,
    walkthruEmptyCheck1 : `//XCUIElementTypeStaticText[@name="Description field is required"]`,
    walkthruField3CharValidation : `//XCUIElementTypeStaticText[@name="Title should be min of 3 char"]`,
    selectVideoClipScreenVerify : `//XCUIElementTypeStaticText[@name="Select Video Clips"]`,
    verifyComplete: `~AI Funnels, tab, 1 of 5`,
    walkthruScreenContent1: `//XCUIElementTypeStaticText[@name="You can create a AI Funnel with the list of videos selected by you."]`,
    walkthruScreenContent2: `//XCUIElementTypeStaticText[@name="New AI Funnel"]`,
    videoClipVerify: `//XCUIElementTypeStaticText[@name="Video Clips (2)"]`,
    addVideoClipBtn: "~addform-click",
    addclipiosBtn : `~Add-videoclip`,
    addIntentClipBtn: `//XCUIElementTypeOther[@name="Add-videoclip" and @label="Add Intent Clip"]`,
    addLoopClipBtn: `//XCUIElementTypeOther[@name="Add-videoclip" and @label="Add Looping Intent Clip"]`,
    addFallbackClipBtn: `//XCUIElementTypeOther[@name="Add-videoclip" and @label="Add Fallback Clip"]`,
    agentClipDeleteBtn : `(//XCUIElementTypeOther[@name="agent-delete"])[2]`,
    agentClipDeleteBtn2 : `//XCUIElementTypeOther[@name="agent-delete"]`,
    visibilityBtn: "xpath://android.widget.TextView[@text=\"Visibility\"]",
    personalizeScreenContent1: `//XCUIElementTypeStaticText[@name="Personalize AI Funnel"]`,
    personalizeMessageInput: "~personalize-message",
    personalizeScreenContent2: `//XCUIElementTypeStaticText[@name="Your Personalized Message"]`,
    personalizeBtn: "~personalize-click",
    personalizeWalkthruContent1 : `//XCUIElementTypeStaticText[@name="Personalize AI Funnel"]`,
    personalizeBackBtn : `~personalize-back`,
    card1 : `(//android.view.ViewGroup[@resource-id="videoclip-click"])[1]/android.widget.TextView`,
    card2 : `(//android.view.ViewGroup[@resource-id="agent-card"])[2]/android.widget.TextView`,
    clipCountCloseBtn : `xpath://android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]`,
    removeBtn : `~1 Remove`,
    agentEditBtn : `~agent-details0`,
    persolizeBack : `~libraryBack`,
    saveCookieForm : `~form-save`,
    clipCountVerify : `~2 Video Clips`,
    metaFormContent1 : `//XCUIElementTypeStaticText[@name="Cookies"]`,
    saveBtn : `xpath://*[@text="Save"]`,
    searchVideoClipBtn : `//XCUIElementTypeOther[@name="videoclip-click"]`,
    videoEditBtn :`~videoclip-editclick`,
    updateAIFunnelBtn : `~agent-save`,
    clipContent1 : `//XCUIElementTypeStaticText[@name="Create AI Funnel"]`,
    searchFieldBtn : `~library search`,
    libraryContentVerify : `(//XCUIElementTypeOther[@name="My Videos"])[2]`,
    searchInputField : `~searchField`,
    deleteBtn : `xpath://android.widget.TextView[@text='Delete']`,
    deleteConfirmBtn : `xpath://*[@text='OK']`,
    searchScreenBackBtn : `~libraryBack`,
    NewFunnelDescriptionField : `~agent-description`,
    shareReportBtn : `~share-agent`,
    cookiesBackButton : `~formscreen-back`,
    editCookieBtn : `(//XCUIElementTypeOther[@name="editClick-0"])[1]`,
    deleteCookieBtn : `(//XCUIElementTypeOther[@name="editClick-0"])[2]`,
    deleteCookieConfrimBtn : `~DELETE`,
    videoClipSearchBack : `~video-clip-back`,
    selectFallbackClip : `(//XCUIElementTypeOther[@name="videoclip-select"])[1]`,
    dynamicEmptyClipMsg : `//XCUIElementTypeStaticText[@name="Please select the video clips for the fields provided below"]`,
  };
} else if (browser.isAndroid) {
  createWalkthru = {
    libraryButtonXPath: 'xpath://android.widget.TextView[@text="Library"]',
    addClipButtonXPath: `//android.view.ViewGroup[@resource-id="addform-click"]`,
    addClipOnSearchBtn : `//android.view.ViewGroup[@resource-id="add-click"]`,
    addClipBtn : `//android.widget.TextView[@text="Add"]`,
    galleryButton: 'xpath://*[@text="GALLERY"]',
    previewScreen1: 'xpath://*[@text="Preview"]',
    editBtn: 'xpath://*[@text="Edit"]',
    updateScreenConten1 : 'xpath://*[@text="Update Video Clip"]',
    updateBtn : 'xpath://*[@text="Update"]',
    updateSuccessScreen : 'xpath://*[@text="Video Clip Successfully Updated!"]',
    updateSuccessScreen1 : 'xpath://*[@text="AI Funnel Updated Successfully!"]',
    backOnUpdateVideoClipBtn : `xpath://android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]`,
    nextButtonXPath: '//android.view.ViewGroup[@resource-id="next-click"]',
    walkthruTitleFieldClassName: '//android.widget.EditText[@resource-id="agent-title"]',
    metaOptionButtonXPath: '//android.widget.TextView[@text="Cookies"]',
    metaDataSelectXPath: 'xpath://android.widget.TextView[@text="metaTest"]',
    cookieFormName : `//android.widget.EditText[@resource-id="form-name"]`,
    cookieLabelField : `//android.widget.EditText[@resource-id="formlabel_0"]`,
    labelFieldXPath: 'xpath://android.widget.TextView[@text="label1"]',
    createWalkthruButtonXPath: 'xpath://android.widget.TextView[@text="Create"]',
    verifyWalkthruCreateSuccessXPath: 'xpath://android.widget.TextView[@text="Your AI Funnel Created Successfully!"]',
    sendToCustomerBtn : `//android.view.ViewGroup[@resource-id="send-customer"]`,
    verifyWalkthruContent1 : `xpath://android.widget.TextView[@text="Your AI Funnel is now ready. Share it with your customer to explain and engage!"]`,
    backToLibraryButtonXPath: 'xpath://android.widget.TextView[@text="Back to Video Library"]',
    backToAIFunnelButton: 'xpath://android.widget.TextView[@text="Back to AI Funnel"]',
    videoClipVerify: "xpath://android.widget.TextView[@text=\"Video Clips (2)\"]",
    visibilityBtn: "xpath://android.widget.TextView[@text=\"Visibility\"]",
    walkthruBackBtn : `//android.view.ViewGroup[@resource-id="Agent-back"]`,
    funnelTypeBtn : `//android.widget.TextView[@text="Funnel Type"]`,
    dynamicSelectBtn : `//android.widget.TextView[@text="Dynamic"]`,
    selectVideoClipBack : `xpath://android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]`,
    walkthruEmptyCheck : `//android.widget.TextView[@text="This field is required"]`,
    walkthruEmptyCheck1 : `//android.widget.TextView[@text="Description field is required"]`,
    walkthruField3CharValidation : `//android.widget.TextView[@text="Title should be min of 3 char"]`,
    selectVideoClipScreenVerify : `xpath://android.widget.TextView[@text=\"Select Video Clips\"]`,
    verifyComplete: `//android.widget.TextView[@text="AI Funnels"]`,
    walkthruScreenContent1: "xpath://android.widget.TextView[@text=\"You can create a AI Funnel with the list of videos selected by you.\"]",
    walkthruScreenContent2: "xpath://android.widget.TextView[@text=\"New AI Funnel\"]",
    videoClipVerify: "xpath://android.widget.TextView[@text=\"Video Clips (2)\"]",
    addVideoClipBtn: "xpath://android.widget.TextView[@text=\"Add Video Clip\"]",
    addIntentClipBtn: "xpath://android.widget.TextView[@text=\"Add Intent Clip\"]",
    addLoopClipBtn: "xpath://android.widget.TextView[@text=\"Add Looping Intent Clip\"]",
    addFallbackClipBtn: "xpath://android.widget.TextView[@text=\"Add Fallback Clip\"]",
    agentClipDeleteBtn : `//android.view.ViewGroup[@resource-id="agent-delete"]`,
    visibilityBtn: "xpath://android.widget.TextView[@text=\"Visibility\"]",
    personalizeScreenContent1: "xpath://android.widget.TextView[@text=\"Personalize AI Funnel\"]",
    personalizeMessageInput: "class name:android.widget.EditText",
    personalizeScreenContent2: "xpath://android.widget.TextView[@text=\"Your Personalized Message\"]",
    personalizeBtn: `//android.view.ViewGroup[@resource-id="personalize-click"]`,
    personalizeWalkthruContent1 : "xpath://android.widget.TextView[@text=\"Personalize AI Funnel\"]",
    personalizeBackBtn : `xpath://android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]`,
    card1 : `(//android.view.ViewGroup[@resource-id="videoclip-click"])[1]/android.widget.TextView`,
    card2 : `(//android.view.ViewGroup[@resource-id="agent-card"])[2]/android.widget.TextView`,
    clipCountCloseBtn : `xpath://android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]`,
    removeBtn : `xpath://*[@text="Remove"]`,
    agentEditBtn : `(//android.view.ViewGroup[@resource-id="agent-details"])[1]`,
    persolizeBack : `//android.view.ViewGroup[@resource-id="personalize-back"]`,
    saveCookieForm : `//android.view.ViewGroup[@resource-id="form-save"]`,
    clipCountVerify : `//android.widget.TextView[@text="2 Video Clips"]`,
    metaFormContent1 : `xpath://*[@text="Cookies"]`,
    saveBtn : `xpath://*[@text="Save"]`,
    updateAIFunnelBtn : `//android.view.ViewGroup[@resource-id="agent-save"]`,
    clipContent1 : `xpath://*[@text="Create AI Funnel"]`,
    searchFieldBtn : `//android.view.ViewGroup[@resource-id="library search"]`,
    libraryContentVerify : `xpath://android.widget.TextView[@text=\"My Videos\"]`,
    searchInputField : `class name:android.widget.EditText`,
    deleteBtn : `xpath://android.widget.TextView[@text='Delete']`,
    deleteConfirmBtn : `xpath://*[@text='OK']`,
    searchScreenBackBtn : `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]`,
    NewFunnelDescriptionField : `//android.widget.EditText[@resource-id="agent-description"]`,
    shareReportBtn : `//android.view.ViewGroup[@resource-id="share-agent"]`,
    cookiesBackButton : `//android.view.ViewGroup[@resource-id="formscreen-back"]`,
    editCookieBtn : `(//android.view.ViewGroup[@resource-id="editClick-0"])[1]`,
    deleteCookieBtn : `(//android.view.ViewGroup[@resource-id="editClick-0"])[2]`,
    deleteCookieConfrimBtn : `//android.widget.Button[@resource-id="android:id/button1"]`,
    videoClipSearchBack : `//android.view.ViewGroup[@resource-id="video-clip-back"]`,
    selectFallbackClip : `(//android.view.ViewGroup[@resource-id="videoclip-select"])[1]`,
    dynamicEmptyClipMsg : `//android.widget.TextView[@text="Please select the video clips for the fields provided below"]`,
  };
}
export default createWalkthru;