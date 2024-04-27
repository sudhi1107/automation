/**
 * sub page containing specific selectors and methods for a specific page
 */
import engagementResponseConstants from "../elementBase/engagementResponse.ele.js"
import axios from 'axios';
import loginBase from "./login.base.js";
import { appMailUpper, appPassword } from "../../config.js";
import { waitAndClick, waitForDisplay } from "../helper/helper.js";
const apiUrl = 'https://qa-api.walkthru.ai/response';
const loginUrl = 'https://qa-api.walkthru.ai/v2/auth/login'
const loginData = {
  "email": "q1@yopmail.com",
  "password": "123123"
}

class EngagementResponse {
  getElement(selector) {
    const element = browser.$(selector);
    element.waitForClickable({ timeout: 10000 });
    return element;
  }

  get enageScreenBtn() {
    return engagementResponseConstants.engageBtnXPath
  }
  get engageScreenVerify() {
    return engagementResponseConstants.engageScreenVerify
  }

  async VerifyClickOnEngagemenu()
  {
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper,appPassword);
    await waitAndClick(this.enageScreenBtn)
    await waitForDisplay(this.engageScreenVerify)
  }

  async checkResponseScreen() {
    var auth = await this.loginResponse()
    const data = await this.makePostRequestCollection(auth);
    const collectionID = data.collectionID
    const customerName = data.customerName
    const postData = { "section": { "videoClip": "658fcf026cc4b604bd7825de", "answer": "Skipped", "duration": 3011 }, "collectionId": `${collectionID}`, "agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", "location": { "lat": 11.0335129, "lng": 77.0131538 } };
    await this.makePostRequestResponse(postData);
    await loginBase.verifyLoginFeatureForValidCredentials(appMailUpper,appPassword);
    await this.enageScreenBtn.click()
    await browser.$(`xpath://android.widget.TextView[@text="${customerName}"]`).click();
    await browser.$(`xpath://android.widget.TextView[@text="Skipped"]`).waitForDisplayed({ timeout: 10000 });
    await expect(browser.$(`xpath://android.widget.TextView[@text="Skipped"]`)).toBeDisplayed()
  }
  async loginResponse() {
    try {
      const response = await axios.put(loginUrl, loginData);
      const responseData = response.data.data.accessToken
    
      console.log('ResponseLogin:', responseData);
      return responseData
    } catch (error) {
      console.error('ErrorLogin:', error.message);
    }
  }
  async makePostRequestResponse(postData) {
    try {
      const response = await axios.post(apiUrl,postData);
      console.log('Response1:', response.data);
    } catch (error) {
      console.error('Error1:', error.message);
    }
  }
  async makePostRequestCollection(auth) {
    var customerName = genCustomerName()
        let data = JSON.stringify({
      "collectionId": "6594cd8477afe1d14ef573b0",
      "customer": {
        "name": customerName
      },
      "location": {
        "lat": 11.010438585046193,
        "lng": 76.96401154626597
      }
    });
  
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://qa-api.walkthru.ai/users/shared-collection',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${auth}`
      },
      data: data
    };
  
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      const collectionID = response.data.data._id
      return {collectionID,customerName}
    } catch (error) {
      console.error(error);
    }
  }
  
  
}

export default new EngagementResponse();
function genCustomerName() {
  const digits = 'qwertyuiopasdfghjkzxcvbnm';
  let name = '';


  // Generating 10 random digits for the phone number
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    name += digits.charAt(randomIndex);
  }

  return name;
}