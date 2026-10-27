//hooks in Playwright

//Hooks are nothing but a set of default functions provided by Playwright to add pre- and post-conditions while executing different test cases. 

//There are mainly four different hooks available in Playwright. 

//1.test.beforeEach() => This hook will be executed before each and every test case. 
//2.test.afterEach() => This hook will be executed after each and every test case. 
//3.test.beforeAll() => This hook will be executed once before all the test cases. 
//4.test.afterAll() => This hook will be executed once after all the test cases. 

import { test } from '@playwright/test';

test.beforeEach(async ({ }) => {
    console.log('Executing before each');
});

test.afterEach(async ({ }) => {
    console.log('Executing after each');
});

test.beforeAll(async ({ }) => {
    console.log('Executing before all');
});

test.afterAll(async ({ }) => {
    console.log('Executing after all');
});


test.describe('Group1', () => {

    test('Test Case 1', async ({ page }) => {
        console.log('Executing Test Case 1');
    });

    test('Test Case 2', async ({ page }) => {
        console.log('Executing Test Case 2');
    });

});

//Grouped test cases using test.describe
test.describe('Group2', () => {

    test('Test Case 3', async ({ }) => {
        console.log('Executing Test Case 3');
    });

    test('Test Case 4', async ({ }) => {
        console.log('Executing Test Case 4');
    });

});