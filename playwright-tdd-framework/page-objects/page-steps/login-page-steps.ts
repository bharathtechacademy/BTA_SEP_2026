import { WebCommons } from "../../commons/ui/web-commons";
import loginPageElements from "../page-elements/login-page-elements.json";
import {Page,expect} from "@playwright/test";

export class LoginPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page){
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to launch the application 
    async launchApplication(){
        await this.web.launchTheApplication();
    }

    // Method to verify login pages launched successfully 
    async verifyLoginPageIsLaunchedSuccessfully(){
        await this.web.elementIsVisible(loginPageElements.loginPageHeader);
    }

    //Method to enter credentials With password as an optional parameter 
    async enterCredentials(username: string, password?: string){
        await this.web.enterText(loginPageElements.businessEmailTextBox, username);
        if(password){
            await this.web.enterText(loginPageElements.passwordTextBox, password);
        }
    }

    // Method to click on the login button. 
    async clickOnLoginButton(){
        await this.web.click(loginPageElements.loginButton);
    }

    // Method to verify login error message is displayed 
    async verifyLoginErrorMessageIsDisplayed(){
        await this.web.elementIsVisible(loginPageElements.loginErrorMessage);
    }

    // Method to verify social media login options displayed on the login page 
    async verifySocialMediaLoginOptionsAreDisplayed(){
        await this.web.elementIsVisible(loginPageElements.googleIcon);
        await this.web.elementIsVisible(loginPageElements.linkedInIcon);
    }

    // Method to verify the signup link is available within the login page 
    async verifySignupLinkIsAvailable(){
        await this.web.elementIsVisible(loginPageElements.signUpLink);
    }

    // Method to click on the sign-up link 
    async clickOnSignUpLink(){
        await this.web.click(loginPageElements.signUpLink);
    }

    // Method to verify the Forgot Password option is available on the login page 
    async verifyForgotPasswordOptionIsAvailable(){
        await this.web.elementIsVisible(loginPageElements.forgotPasswordLink);
    }

    // Method to click on the Forgot Password link
    async clickOnForgotPasswordLink(){
        await this.web.click(loginPageElements.forgotPasswordLink);
    }

    // Method to verify the forgot password confirmation message 
    async verifyForgotPasswordConfirmationMessageIsDisplayed(){
        await this.web.elementIsVisible(loginPageElements.forgotPasswordConfirmationMsg);
    }


}