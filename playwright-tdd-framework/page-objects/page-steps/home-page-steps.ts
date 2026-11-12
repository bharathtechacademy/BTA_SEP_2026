import { WebCommons } from "../../commons/ui/web-commons";
import homePageElements from "../page-elements/home-page-elements.json";
import {Page,expect} from "@playwright/test";

export class HomePageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page){
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to verify the home page is displayed 
    async verifyHomePageIsDisplayed(){
        await this.web.elementIsVisible(homePageElements.homePageHeader);
    }

}