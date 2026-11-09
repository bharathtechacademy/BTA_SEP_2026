import { test, expect } from '@playwright/test';

test('Handling frames in Playwright ', async ({ page }) => {

    //1. Enter the URL and launch the application: https://demoqa.com/frames
    await page.goto("https://demoqa.com/frames");

    //2. Locate the page header. 
    const pageHeader = await page.locator('//h1[@class="text-center"]');

    // Locate the main frame element. 
    const mainFrameElement = await page.frameLocator('//iframe[@id="frame1"]');

    //3. Locate the frame element (This is a sample page)
    const frameElement = await mainFrameElement.locator('//h1[@id="sampleHeading"]');

    //4. Copy and print the frame element text. 
    console.log(await frameElement.textContent());

    //5. Copy and print the page header text. 
    console.log(await pageHeader.textContent());

});