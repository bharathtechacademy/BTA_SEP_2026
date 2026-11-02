//WebElement => The element displayed in the application UI 
//Locator => Set off default methods provided by Playwright to identify the location of each and every web element. 

//Different types of locator methods are available in Playwright. 

//page.getByRole();
//page.getByLabel();
//page.getByPlaceholder();
//page.getByText();
//page.getByTitle();
//page.getByAltText();
//page.getByTestId();
//page.locator();//xpath
//page.locator();//css selector


//1.page.getByRole();

//Syntax : await page.getByRole('role', { name: 'value' });
//role => Nature of the element (button,textbox,link,checkbox,radio,heading,dropdown etc.)
//value => text-value / value / aria-label / title

//Ex:await page.getByRole('button', { name: 'Get started' });

//2.page.getByLabel();
//Syntax : await page.getByLabel('label-text-value');
//label-text => The text value associated with the label element

//tagName => label
//text-value => The text value associated with the label element

//Ex:await page.getByLabel('Name');

//3.page.getByPlaceholder();
//Syntax : await page.getByPlaceholder('placeholder-attribute-value');

//Ex: await page.getByPlaceholder('FirstName');

//4.page.getByText();
//Syntax : await page.getByText('text-value');

//Ex: await page.getByText('Practice Form');

//5.page.getByTitle();
//Syntax : await page.getByTitle('title-attribute-value');

//Ex: await page.getByTitle('Parabank');

//6.page.getByAltText();
//Syntax : await page.getByAltText('alt-attribute-value');

//Ex: await page.getByAltText('Parabank');

//7. page.getByTestId();
//Syntax : await page.getByTestId('data-testid-attribute-value');

//Ex: await page.getByTestId('ds-document-layout');
