//CSS locators => CSS locators are all about locating the web element by using CSS properties of the element. 

//Syntax :

//Syntax 1: tagName#id
//Syntax 2: tagName.className
//Syntax 3: tagName[attribute='value']
//Syntax 4: tagName[attribute*='value'] (* refers contains)
//Syntax 4: tagName[attribute*='value'] (* refers contains)
//Syntax 5: tagName[attribute^='value'] (^ refers starts with)
//Syntax 6: tagName[attribute$='value'] ($ refers ends with)
//Syntax 7: tagName[attribute1='value'][attribute2='value']

//Advanced CSS locator with relationship (e.g., parent > child)
//target -> parent -> grandparent -> grand-parents'parent


//grand-parent : ul[class="leftmenu"]
//parent : li
// target : a[href="services.htm"]

// ul[class="leftmenu"] > li > a[href="services.htm"]

//n-th child
//Syntax : parent > child:nth-child(n)
//ul[class="leftmenu"] > li:nth-child(3) > a

import {test} from '@playwright/test'

test('CSS locators', async ({page}) => {
  
    //Navigate to the Google home page. 
    await page.goto('https://www.google.com');

    //Locate the 'Google search' text box by using syntax 1. 
    await page.locator('textarea#ti6dpd');

    //Locate the 'Google search' text box by using syntax 2. 
    await page.locator('textarea.gLFyf');

    //Locate the 'Google search' text box by using syntax 3. 
    await page.locator("textarea[aria-label='Search']");

     //Locate the 'How Search Works' text box by using syntax 4. 
    await page.locator("a[href*='howsearchworks']");

    //Locate the 'How Search Works' text box by using syntax 5. 
    await page.locator("a[href^='https://google.com']");

    //Locate the 'How Search Works' text box by using syntax 6. 
    await page.locator("a[href$='howsearchworks/?fg=1']");

    //Locate the 'Google search' text box by using syntax 7. 
    await page.locator('textarea[aria-label="Search"][name="q"]');

});

test('Advanced CSS locators', async ({page}) => {
  
    //Navigate to the Google home page. 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate the 'Services' element by using a CSS locator 
    await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');

});