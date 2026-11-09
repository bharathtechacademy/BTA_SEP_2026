import { test, expect } from '@playwright/test';

test('Demo QA -Alerts', async ({ page }) => {

    // 1. Enter URL and Launch the application (https://demoqa.com/alerts)
    await page.goto('https://demoqa.com/alerts');

    //2. Wait for the page to load. 
    const header = await page.locator('//h1[text()="Alerts"]');
    await expect(header).toBeVisible();

    //3. Locate the alert buttons. 
    const infoAlert = await page.locator('//button[@id="alertButton"]');
    const confirmationAlert = await page.locator('//button[@id="confirmButton"]');
    const promptAlert = await page.locator('//button[@id="promtButton"]');

    //4. Handle the alerts. 

    //Suppose an alert displays. Copy the message from the alert, and I want to click on the OK button. 
    await page.once('dialog', async dialog => {

        //Print the alert message in the console. 
        console.log(dialog.message());

        //Click on the OK button of the alert.
        await dialog.accept();

    });

    //trigger the information alert by clicking the button.
    await infoAlert.click();

    //Suppose an alert displays. Copy the message from the alert, and I want to click on the cancel button. 
    await page.once('dialog', async dialog => {

        //Print the alert message in the console. 
        console.log(dialog.message());

        //Click on the Cancel button of the alert.
        await dialog.dismiss();

    });

    //trigger the confirmation alert by clicking the button.
    await confirmationAlert.click();

    //Suppose an alert displays. Copy the message from the alert, and I want to click on the ok button along with input text. 
    await page.once('dialog', async dialog => {

        //Print the alert message in the console. 
        console.log(dialog.message());

        //Click on the OK button of the alert along with input text.
        await dialog.accept('Playwright');

    });

    //trigger the prompt alert by clicking the button.
    await promptAlert.click();

});