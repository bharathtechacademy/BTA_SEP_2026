import { WebCommons } from "../../commons/ui/web-commons";
import cookiesPageElements from "../page-elements/cookies-page-elements.json";
import {Page,expect} from "@playwright/test";

export class CookiesPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page){
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to verify the cookies pop-up is displayed 
    async verifyCookiesPopupIsDisplayed(){
        await this.web.elementIsVisible(cookiesPageElements.cookiesPageHeader);
    }

    // Method to verify cookies pop-up content 
    async verifyCookiesPopupContent(expectedContent: string){
        const actualContent = await this.web.getText(cookiesPageElements.cookiesPageContentMsg);
        await this.web.compareValuesContains(actualContent, expectedContent);
    }

    // Method to verify cookies pop-up logos 
    async verifyCookiesPopupLogosAreDisplayed(){
        await this.web.elementIsVisible(cookiesPageElements.creatioLogo);
        await this.web.elementIsVisible(cookiesPageElements.cookiebotLogo);
    }

    //Method to verify cookies pop-up switch buttons are displayed 
    async verifyCookiesPopupSwitchButtonsAreDisplayed(){
        await this.web.elementIsVisible(cookiesPageElements.necessarySwitchButton);
        await this.web.elementIsVisible(cookiesPageElements.preferencesSwitchButton);
        await this.web.elementIsVisible(cookiesPageElements.statisticsSwitchButton);
        await this.web.elementIsVisible(cookiesPageElements.marketingSwitchButton);
    }

    // Method to verify the cookies pop-up selection buttons are displayed 
    async verifyCookiesPopupSelectionButtonsAreDisplayed(){
        await this.web.elementIsVisible(cookiesPageElements.allowAllButton);
        await this.web.elementIsVisible(cookiesPageElements.allowSelectionButton);
        await this.web.elementIsVisible(cookiesPageElements.denyButton);
    }

    // Method to click on the selection button. 
    async clickOnSelectionButton(buttonName:string){
        switch(buttonName.toLowerCase()){
            case "allow all":
                await this.web.click(cookiesPageElements.allowAllButton);
                break;
            case "allow selection":
                await this.web.click(cookiesPageElements.allowSelectionButton);
                break;
            case "deny":
                await this.web.click(cookiesPageElements.denyButton);
                break;
            default:
                throw new Error(`Button with name "${buttonName}" not found`);
        }
    }

    // Method to verify the "Show Details" link is displayed 
    async verifyCookiesPopupShowDetailsLinkIsDisplayed(){
        await this.web.elementIsVisible(cookiesPageElements.showDetailsLink);
    }

    // Method to click on the "Show Details" link 
    async clickOnShowDetailsLink(){
        await this.web.click(cookiesPageElements.showDetailsLink);
    }

    // Method to verify cookies pop-up expanded view 
    async verifyCookiesPopupExpandedViewIsDisplayed(){
        await this.web.elementIsVisible(cookiesPageElements.expandedView);
    }

    // Method to verify the cookies pop-up is closed successfully 
    async verifyCookiesPopupIsClosed(){
        await this.web.isHidden(cookiesPageElements.cookiesPageHeader);
    }

}