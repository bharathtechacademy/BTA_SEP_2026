import { Page, expect } from '@playwright/test';
import config from '../../config/config.json';

export class WebCommons {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Common method to launch the application and verify the title of the application 
    async launchTheApplication() {
        await this.page.goto(config.web.url);
        await expect(this.page).toHaveTitle(config.web.title);
    }

    // Common method to generate a web element from the locator 
    async element(locatorText:string){
        return await this.page.locator(locatorText);
    }

    // Common method to click on the element 
    async click(locator:string){
        const element = await this.element(locator);
        await element.click();
    }

    //Common method to enter text into an element 
    async enterText(locator:string, text:string){
        const element = await this.element(locator);
        await element.clear();
        await element.fill(text);
    }

    // Common method to scroll to the web element 
    async scrollToElement(locator:string){
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    // Common method to perform a right-click on the element 
    async rightClick(locator:string){
        const element = await this.element(locator);
        await element.click({ button: 'right' });
    }

    // Common method to perform a double-click on the element 
    async doubleClick(locator:string){
        const element = await this.element(locator);
        await element.dblclick();
    }

    // Common method to perform a force click on the element 
    async forceClick(locator:string){
        const element = await this.element(locator);
        await element.click({ force: true });
    }

    // Common method to mouse over the element 
    async mouseOver(locator:string){
        const element = await this.element(locator);
        await element.hover();
    }

    // Common method to verify an element is visible 
    async elementIsVisible(locator:string ){
        const element = await this.element(locator);
        await expect(element).toBeVisible();
    }

    // Common method to verify an element is hidden 
    async isHidden(locator:string){
        const element = await this.element(locator);
        await expect(element).toBeHidden();
    }

    // Common method to verify an element is already checked if it is a checkbox 
    async isChecked(locator:string){
        const element = await this.element(locator);
        await expect(element).toBeChecked();
    }

    //Common method to select the option from the dropdown 
    async selectOption(locator:string, optionValue:string){
        const element = await this.element(locator);
        await element.selectOption(optionValue);
    }

    // Common method to select /deselect the checkbox 
    async selectCheckbox(locator:string , check:boolean){
        const element = await this.element(locator);
        if(check){
            await element.check();
        } else {
            await element.uncheck();
        }
    }

    // Common method to verify an element is enabled 
    async isEnabled(locator:string){
        const element = await this.element(locator);
        await expect(element).toBeEnabled();
    }

    // Common method to copy the text from the web element 
    async getText(locator:string){
        const element = await this.element(locator);
        return await element.textContent();
    }

    // Common method to get the attribute value from the web element 
    async getAttribute(locator:string, attributeName:string){
        const element = await this.element(locator);
        return await element.getAttribute(attributeName);
    }

    // Common method to upload the file 
    async uploadFile(locator:string, filePath:string){
        const element = await this.element(locator);
        await element.setInputFiles(filePath);
    }

    // Common method to take the element screenshot 
    async takeElementScreenshot(locator:string, path:string){
        const element = await this.element(locator);
        await element.screenshot({ path });
    }

    // Common method to take a page screenshot / Full-page screenshot 
    async takePageScreenshot(path:string, fullpage:boolean){
        await this.page.screenshot({ path, fullPage: fullpage });
    }

    // Common method to compare two values or match 
    async compareValues(actual:any, expected:any){
        expect(actual).toBe(expected);
    }

    // Common method to compare whether the actual value contains the expected value 
    async compareValuesContains(actual:any, expected:any){
        expect(actual).toContain(expected);
    }

    // Common method to handle the alert 
    async handleAlert(action:string, promptText?:string){
        this.page.once('dialog', async dialog => {
            if(action.toLowerCase() === 'accept'){
                await dialog.accept(promptText);
            } else {
                await dialog.dismiss();
            }
        });
    }

    // Common method to locate the element inside the frame 
    async frameElement(frameLocator:string, elementLocator:string){
        const frame = await this.page.frameLocator(frameLocator);
        return await frame.locator(elementLocator);
    }

    // Common method to get the current URL 
    async getCurrentURL(){
        return this.page.url();
    }
    

}