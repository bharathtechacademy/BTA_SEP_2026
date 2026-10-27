//Annotations in Playwright

//Annotations are all about a set of keywords and default methods provided by Playwright to run our test cases. 

//Mainly, there are two important annotations we are going to use to run the test cases in Playwright. 

//test => Refers to an independent test method to be executed by Playwright. 
//test.describe => Refers to a block that groups multiple test cases together in Playwright. 

//Additional conditions on top of annotations 

//test.only() => This annotation will be used to run only a particular test case by ignoring all other tests. 
//test.skip() => This annotation will be used to skip a particular test case. 
//test.fixme() => This annotation will be used to mark a specific test case that needs to be fixed. Until then, don't run. (to be fixed later)
//test.fail() => This annotation will be used to mark a specific test case that is expected to fail.
//test.slow() => This annotation will be used to mark a specific test case as a slow test case so that Playwright can increase the wait time three times more than the regular wait time. 
//test.describe.only() => This annotation will be used to run only a particular block of test cases by ignoring all other test blocks.
//test.describe.skip() => This annotation will be used to skip a particular block of test cases.

import { test, expect } from '@playwright/test';

test.fail('TestCase1', async ({ page }) => {
    expect(1).toBe(2); // Example assertion to indicate the test needs fixing
    console.log('Executing TestCase1');
});

test('TestCase2', async ({ page }) => {
    test.slow();
    await new Promise(resolve => setTimeout(resolve, 35000)); // Example wait to simulate async operation
    console.log('Executing TestCase2');
});

test('TestCase3', async ({ page }) => {
    console.log('Executing TestCase3');
});
