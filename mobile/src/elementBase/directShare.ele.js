let directShare;
if (browser.isIOS) {
  directShare = {
    directShareButtonXPath: `~agent-card0`,
    verifyDirectShareScreenXPath: `//XCUIElementTypeStaticText[@name="Share AI Funnel by scanning the Magic code."]`,
    fillItBtn : `~Fill it yourself`,
    confrimScreen : `~AdaptiveFunnels AI`
  };
} else if (browser.isAndroid) {
  directShare = {
    directShareButtonXPath: `(//android.view.ViewGroup[@resource-id="agent-card"])[2]`,
    verifyDirectShareScreenXPath: "xpath://android.widget.TextView[@text=\"Share AI Funnel by scanning the Magic code.\"]",
    fillItBtn : `xpath://android.widget.TextView[@text="Fill it yourself"]`,
    confrimScreen : `//android.widget.TextView[@text="AdaptiveFunnels AI"]`
  };
}
export default directShare;