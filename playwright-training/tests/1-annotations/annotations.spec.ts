//Annotations in Playwright

//Annotations are all about a set of keywords and default methods provided by Playwright to run our test cases. 

//Mainly, there are two important annotations we are going to use to run the test cases in Playwright. 

//test => Refers to an independent test method to be executed by Playwright. 
//test.describe => Refers to a block that groups multiple test cases together in Playwright. 

import { test } from '@playwright/test';

//Independent test case
test('Test Case Name', async ({ page }) => {
  await page.goto('https://example.com');
  // Add your test steps here
});


//Grouped test cases using test.describe
test.describe('Group1', () => {

  test('Test Case 1', async ({ page }) => {
    await page.goto('https://example.com');
    // Add your test steps here
  });

  test('Test Case 2', async ({ page }) => {
    await page.goto('https://example.com');
    // Add your test steps here
  });

});

//Grouped test cases using test.describe
test.describe('Group2', () => {

  test('Test Case 3', async ({ page }) => {
    await page.goto('https://example.com');
    // Add your test steps here
  });

  test('Test Case 4', async ({ page }) => {
    await page.goto('https://example.com');
    // Add your test steps here
  });

});