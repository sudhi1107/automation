
import Login from "../pageobjects/login.base.js";
describe("Login Module", () => {
    it("verify login flow", async () => {    
        await Login.performLogin('dec261@yopmail.com','Test123');
    });
    it("verify login flow", async () => {    
        await Login.performLogin('9898989898','123123');
    });
});