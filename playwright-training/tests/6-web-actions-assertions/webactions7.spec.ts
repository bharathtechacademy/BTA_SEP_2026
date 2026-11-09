import { test, expect } from '@playwright/test';

test('Collecting screenshots in Playwright ', async ({ page }) => {
    
    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    // 2.verify application logo is displayed
    const logo = await page.locator('//img[@class="logo"]');
    await expect(logo).toBeVisible();

    //Take a screenshot of the logo and store it in the screenshots folder. 
    await logo.screenshot({path: 'screenshots/logo.png'});

    // 3.Verify application caption displayed as "Experience the difference"
    const caption = await page.locator('//p[@class="caption"]');
    await expect(caption).toHaveText('Experience the difference');

    // 4.Enter invalid username
    const username = await page.locator('//input[@name="username"]');
    await username.fill('invalidUser');

    // 5.Enter empty Password
    const password = await page.locator('//input[@name="password"]');
    await password.fill('');

    // 6.Click on login button
    const loginButton = await page.locator('//input[@value="Log In"]');
    await loginButton.click();

    // 7.Verify the error message "Please enter a username and password."
    const errorMessage = await page.locator('//p[@class="error"]');
    await expect(errorMessage).toHaveText('Please enter a username and password.');

    //Take a screenshot of the visible window and store it in the screenshots folder. 
    await page.screenshot({path: 'screenshots/visibleWindow.png'});

    // 8.Click on admin page link
    const adminPageLink = await page.locator('//a[text()="Admin Page"]');
    await adminPageLink.click();

    //Take a screenshot of the full page and store it in the screenshots folder. 
    await page.screenshot({path: 'screenshots/fullPage.png' , fullPage:true});

});