import { test } from '@playwright/test';

test('Web actions and assertions', async ({ page }) => {

    //Navigate to Google homepage. 
    await page.goto('https://www.google.com');

    //Locate the web element. 
    const element = page.locator('input[name="q"]');

    /*=====================================
            Common WebElement Actions
    =====================================*/

    //Check if the element is visible or not. 
    const isElementVisible = await element.isVisible();

    //Check if the element is enabled or not. 
    const isElementEnabled = await element.isEnabled();

    //Check if the checkbox is already checked. 
    const isCheckboxChecked = await element.isChecked();

    //Check if the element has disappeared. 
    const isElementHidden = await element.isHidden();


    /*=====================================
            Button WebElement Actions
    =====================================*/

    //Locate the button element. 
    const button = page.locator('button[name="login"]');

    //Verify the label of the button. 
    const label = await button.getAttribute('value');//If the label is added as an attribute value 
    const labelText = await button.textContent();//If the label is added as inner text value

    //Click on the button. 
    await button.click();

    //Double-click on the button. 
    await button.dblclick();

    //Right-click on the button. 
    await button.click({ button: 'right' });

    //Mouse hover on the button. 
    await button.hover();

    //Force click on the button.
    await button.click({ force: true });

    //Drag the button and drop it on some other element. 
    const targetElement = await page.locator('//input[name="target"]');
    await button.dragTo(targetElement);

    //Scroll to the button element until it is visible. 
    await button.scrollIntoViewIfNeeded();

    /*=====================================
            Textbox WebElement Actions
    =====================================*/

    //Locate the button element. 
    const textbox =await page.locator('//input[@name="username"]');  

    //Verify the placeholder of the text box. 
    const placeholderText = await textbox.getAttribute('placeholder');

    //Clear the pre-populated text within the text box. 
    await textbox.clear();

    //Type the text within the text box. 
    await textbox.fill('Text');

    //Verify the text entered into the text box. 
    const textEntered = await textbox.getAttribute('value');

    //Press the function keys within the text box. 
    await textbox.press('Enter');




});