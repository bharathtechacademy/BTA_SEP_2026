//Xpath : Xpath locators are all about locating the web element by using the XML path of the element.

import { test } from '@playwright/test';

//Two types of XPath are available. 
//1. Absolute XPath => /html/body/div[1]/div[1]/a[2]/img
//2. Relative XPath

//Xpath Syntaxes

//Syntax 1: //tagName[@attribute='value']
//Syntax 2: //tagName[text()='text-value']

//Syntax 3: //tagName[contains(@attribute,'partial-value')]
//Syntax 4: //tagName[contains(text(),'partial-text-value')]

//Syntax 5: //tagName[starts-with(@attribute,'partial-value-starts-with')]
//Syntax 6: //tagName[starts-with(text(),'partial-text-value-starts-with')]

//Syntax 7: //tagName[@attribute1='value' and @attribute2='value2' and text()='text-value']

// Advanced XPath with relationships 

//reference-element-xpath/relationship::target-element-xpath


//child
//parent
//ancestor
//following-sibling
//preceding-sibling
//following
//preceding
// //(with-in-family)
// / (child)


// target-element > sibling > parent > grand-parent

//grand-parent (ancestor) : //ul[@class="leftmenu"]
//parent : //li
//sibling : 
//target : //a[text()="Services"]

//ul[@class="leftmenu"]/child::li/child::a[text()="Services"]
//ul[@class="leftmenu"]//a[text()="Services"]
//li[text()="Solutions"]/following-sibling::li/child::a[text()="Services"]

test('XPath locators', async ({page}) => {
  
    //Navigate to the Google home page. 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate the Parabank logo by using syntax 1. 
    await page.locator('//img[@class="logo"]');

    //Locate the Parabank caption by using syntax 2. 
    await page.locator('//p[text()="Experience the difference"]');

    //Locate the Parabank logo by using syntax 3. 
    await page.locator('//img[contains(@src,"logo")]');

    //Locate the Parabank caption by using syntax 4. 
    await page.locator('//p[contains(text(),"difference")]');

    //Locate the Parabank logo by using syntax 5. 
    await page.locator('//img[starts-with(@src,"images/logo")]');

    //Locate the Parabank caption by using syntax 6. 
    await page.locator('//p[starts-with(text(),"Experience")]');

    //Locate the Parabank caption by using syntax 7. 
    await page.locator('//p[@class="caption" and text()="Experience the difference"]');

});