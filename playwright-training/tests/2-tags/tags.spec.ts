//tags in Playwright 

//Tags are nothing but specific parameters we are going to add in each and every test method to group the test cases. 


import { test } from '@playwright/test';

test('TestCase1', { tag: '@Smoke' }, async ({ page }) => {
    console.log('Executing TestCase1');
});

test('TestCase2', { tag: '@Sanity' }, async ({ page }) => {
    console.log('Executing TestCase2');
});

test('TestCase3', { tag: '@Regression' }, async ({ page }) => {
    console.log('Executing TestCase3');
});

test('TestCase4', { tag: ['@Smoke', '@Sanity'] }, async ({ page }) => {
    console.log('Executing TestCase4');
});