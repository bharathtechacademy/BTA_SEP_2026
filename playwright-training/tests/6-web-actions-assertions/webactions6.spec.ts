import { test, expect } from '@playwright/test';

test('Handling multiple windows in Playwright ', async ({ page }) => {

    //1. Enter URL and launch the application. (https://demoqa.com/browser-windows )
    await page.goto("https://demoqa.com/browser-windows");

    //2. Locate the new tab button. 
    const newWindowButton = await page.locator('//button[@id="windowButton"]');

    //3. Click on the new tab button. 
    await newWindowButton.click();

    //4. Wait until the new tab is launched. 
    await page.waitForEvent('popup');

    //5. Collect all the tabs launched currently within the browser. 
    const allWindows = await page.context().pages();
    console.log('Total windows available are ' + allWindows.length);

    //6. Navigate to the new tab. 
    const newWindow = allWindows[1];

    //7. Locate the element from the new tab, copy the message, and print the same. 
    const newWindowElement = await newWindow.locator('//h1[@id="sampleHeading"]');
    const message = await newWindowElement.textContent();
    console.log('Message from new window: ' + message);

})

