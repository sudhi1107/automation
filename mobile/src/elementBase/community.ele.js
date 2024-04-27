let createPersolized;
if (browser.isIOS) {
  createPersolized = {
    communityBtn: `~Community, tab, 5 of 5`,
    searchFieldBtn : `~ListSearchScreen`,
    selectAiClicp : `~selectagent-0`,
    selectVideoClip : `~selectvideo-0`,
    searchField : `~searchField`,
    cloneAiFunnelBtn : `~clone-aiagent`,
    cloneVideoClipBtn : `~clone-video`,
    cloneConfrimBtn : `~OK`,
    noDataMsg: `~noData`,
    videoLibraryBtn : `//XCUIElementTypeOther[@name="Video Library" and @value="tab"]`,
    AiFunnelsBtn : `//XCUIElementTypeOther[@name="AI Funnels" and @value="tab"]`,
    communityText : `//XCUIElementTypeStaticText[@name="Community"]`,
    funnelText : `//XCUIElementTypeStaticText[@name="AI Funnel"]`,
    videoLibraryText : `//XCUIElementTypeStaticText[@name="Video Library"]`,
    agentDetailBtn : `~agent-card0`,
    agentEditBtn : `~edit-click`
  };
} else if (browser.isAndroid) {
  createPersolized = {
  communityBtn: `//android.widget.TextView[@text="Community"]`,
  searchFieldBtn : `//android.view.ViewGroup[@resource-id="ListSearchScreen"]`,
  selectAiClicp : `//android.view.ViewGroup[@resource-id="selectagent-0"]`,
  selectVideoClip : `//android.view.ViewGroup[@resource-id="selectvideo-0"]`,
  searchField : `//android.widget.EditText`,
  cloneAiFunnelBtn : `//android.view.ViewGroup[@resource-id="clone-aiagent"]`,
  cloneVideoClipBtn : `//android.view.ViewGroup[@resource-id="clone-video"]`,
  cloneConfrimBtn : `//android.widget.Button[@resource-id="android:id/button1"]`,
  noDataMsg: `//android.widget.TextView[@text="No Data found"]`,
  videoLibraryBtn : `//android.widget.TextView[@text="VIDEO LIBRARY"]`,
  AiFunnelsBtn : `//android.widget.TextView[@text="AI FUNNELS"]`,
  communityText : `(//android.widget.TextView[@text="Community"])[1]`,
  funnelText : `//android.widget.TextView[@text="AI Funnel"]`,
  videoLibraryText : `//android.widget.TextView[@text="Video Library"]`
};
}
export default createPersolized;