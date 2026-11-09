import { test, expect } from '@playwright/test';

test('Handling tabs in Playwright ', async ({ page }) => {

    //1. Enter URL and launch the application. (https://demoqa.com/browser-windows )
    await page.goto("https://demoqa.com/browser-windows");

    //2. Locate the new tab button. 
    const newTabButton = await page.locator('//button[@id="tabButton"]');

    //3. Click on the new tab button. 
    await newTabButton.click();

    //4. Wait until the new tab is launched. 
    await page.waitForEvent('popup');

    //5. Collect all the tabs launched currently within the browser. 
    const allTabs = await page.context().pages();
    console.log('Total tabs available are ' + allTabs.length);

    //6. Navigate to the new tab. 
    const newTab = allTabs[1];

    //7. Locate the element from the new tab, copy the message, and print the same. 
    const newTabElement = await newTab.locator('//h1[@id="sampleHeading"]');
    const message = await newTabElement.textContent();
    console.log('Message from new tab: ' + message);

})

