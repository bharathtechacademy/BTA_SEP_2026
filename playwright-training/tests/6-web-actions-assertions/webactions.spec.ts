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
        const textbox = await page.locator('//input[@name="username"]');

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

        /*=====================================
                Checkbox WebElement Actions
        =====================================*/

        //Locate the checkbox element. 
        const checkbox = await page.locator('//input[@name="subscribe"]');

        //Select the checkbox only if it is not selected already. 
        const isCheckboxSelected = await checkbox.isChecked();

        if (!isCheckboxSelected) {
                checkbox.check();
        }

        /*=====================================
                 Radio WebElement Actions
         =====================================*/

        //Locate the radio button element. 
        const radiobutton = await page.locator('//input[@name="gender"]');

        //Select the radio button. 
        await radiobutton.check();

        /*=====================================
                 Dropdown WebElement Actions
         =====================================*/

         //Locate the dropdown element. 
        const dropdown = await page.locator('//select[@name="country"]');

        //Select one of the options from the dropdown. 
        await dropdown.selectOption({label : 'JMS'});
        await dropdown.selectOption({value : 'jms'});
        await dropdown.selectOption({index : 0});

        //Verify the selected option from the dropdown. 
        const selectedOption = await dropdown.inputValue();

        //Verify all the options available in the dropdown. 
        const allOptions = await dropdown.locator('option').allTextContents();

        /*=====================================
                Image WebElement Actions
         =====================================*/

         //Locate the image element. 
        const image = await page.locator('//img[@name="logo"]');

        //Verify the image is displayed on the page. 
        const isImageDisplayed = await image.isVisible();

        //Verify the image is valid. 
        const imageSourcePath = await image.getAttribute('src');
        
        //Verify the position of the image within the webpage. 
        const imagePosition = await image.boundingBox();
        const x = imagePosition?.x;
        const y = imagePosition?.y;

        //Verify the resolution of the image. 
        const imageResolution = await image.boundingBox();
        const imageWidth = imageResolution?.width;
        const imageHeight = imageResolution?.height;

        /*=====================================
                Hyperlink WebElement Actions
         =====================================*/        
         
         //Locate the hyperlink element. 
        const hyperlink = await page.locator('//a[@name="homepage"]');

        //Get the hyperlink value from the `href` attribute. 
        const hyperlinkValue = await hyperlink.getAttribute('href');

        //Click on the hyperlink and get the URL from the new page. 
        await hyperlink.click();
        const actualUrl = await page.url();

        /*=====================================
                Text WebElement Actions
         =====================================*/    
         
        //Locate the text element. 
        const textElement = await page.locator('//h1[@name="homepage"]');

        //Get the text value from the web element. 
        const textValue = await textElement.textContent();
        
        /*=====================================
                File Upload WebElement Actions
         =====================================*/  

        //Locate the file upload element. 
        const fileUpload = await page.locator('//input[@name="upload"]');

        //Upload the files
        await fileUpload.setInputFiles(['path/to/file.jpg', 'path/to/file2.jpg'])



});