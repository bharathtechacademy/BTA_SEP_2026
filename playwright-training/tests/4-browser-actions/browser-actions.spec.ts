import { chromium, expect, test } from '@playwright/test';

    //browser engine => browser context => page

test('playwright browser actions', async ({ }) => {

    //Launch the 'Chromium' browser engine to launch the Edge browser. 
    // const browserEngine = await chromium.launch(); //launch chrome browser engine 
    const browserEngine = await chromium.launch({channel: 'msedge' , headless: false}); //launch edge browser engine in headed mode

    //Launch the browser context within the browser engine. (incognito)
    const browserContext = await browserEngine.newContext();

    //Clear all the cookies within the browser context. 
    await browserContext.clearCookies();

    //Launch the new page or tab within the browser context. 
    const page = await browserContext.newPage();

    //Set the browser resolution to 1920x1080. 
    await page.setViewportSize({width:1920, height:1080});

    //Enter the URL www.playwright.dev and navigate to the application page. 
    await page.goto("https://playwright.dev/");

    //Verify whether the Playwright application is launched successfully by verifying the title of the web page. 
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

    //Then enter a different URL Www.google.com  within the same page and navigate to a different application. 
    await page.goto("https://www.google.com/");

    //Navigate back to the Playwright application from the Google page.
    await page.goBack();
    
    //Navigate forward to the Google application from the Playwright page. 
    await page.goForward();

    //Refresh the browser page.
    await page.reload();
    
    //Launch the new tab. 
    const page2 = await browserContext.newPage();

    //Enter the URL www.selenium.dev and navigate to the Selenium application. 
    await page2.goto("https://www.selenium.dev/");

    //Again, go back to the Google application and display the Playwright application among all three. 
    await page.bringToFront();

    //Verify the application URL is updated in the browser. 
    const currentUrl = await page.url();
    console.log(currentUrl);

    //Close current page. 
    await page.close();

    //Close all the pages. 
    await browserContext.close();

    //Close the browser engine.
    await browserEngine.close();
    

});