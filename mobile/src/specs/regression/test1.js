// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import {remote} from 'webdriverio';
async function main () {
  const caps = {
  "platformName": "Android",
  "appium:platformVersion": "14",
  "appium:deviceName": "emulator-5554",
  "appium:automationName": "uiautomator2",
  "appium:appPackage": "app.bldg.explainer",
  "appium:appActivity": ".MainActivity",
  "appium:noReset": "true",
  "appium:ensureWebviewsHavePages": true,
  "appium:nativeWebScreenshot": true,
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true
}
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps
  });
  await driver.touchAction([
    { action: 'press', x: 21, y: 1828 },
    { action: 'moveTo', x: 27, y: 1179 },
    'release'
  ]);
  await driver.deleteSession();
}

main().catch(console.log);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Example feedback scale
const feedbackScale = ["excellent", "GOOD", "aveRAge", "poOr", "VERY POOR"];

// Print the feedback scale with only the first letter capitalized
feedbackScale.forEach(item => {
  console.log(capitalizeFirstLetter(item));
});
