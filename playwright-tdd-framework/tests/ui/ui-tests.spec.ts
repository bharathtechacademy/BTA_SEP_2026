import { test } from '@playwright/test';
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps';
import { CookiesPageSteps } from '../../page-objects/page-steps/cookies-page-steps';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps';
import data from '../../testdata/ui/data.json';


let cookiesPage: CookiesPageSteps;
let loginPage: LoginPageSteps;
let homePage: HomePageSteps;

test.describe('UI Tests', () => {

  //Initialize the page objects before each and every test case. 
  test.beforeEach(async ({ page }) => {
    cookiesPage = new CookiesPageSteps(page);
    loginPage = new LoginPageSteps(page);
    homePage = new HomePageSteps(page);
  });

  //Test Case 1: Verify the cookies pop-up is getting displayed after launching the application. 
  test('Verify Cookies Pop-up is displayed', async () => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
  });

  //Test case 2: Verify cookies pop-up consent message. 
  test('Verify Cookies Pop-up consent message', async () => {
    const testdata = data['Verify Cookies Pop-up consent message'];
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupContent(testdata.consentMessage);
  });

  //Test case 3: verify cookies pop-up logos. 
  test('Verify Cookies Pop-up logos', async () => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupLogosAreDisplayed();
  });

  //Test case 4: Verify cookies pop-up switch buttons. 
  test('Verify Cookies Pop-up switch buttons', async () => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupSwitchButtonsAreDisplayed();
  });

  //Test case 5: verify cookies pop-up selection buttons. 
  test('Verify Cookies Pop-up selection buttons', async () => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtonsAreDisplayed();
  });

  //Test case 6: Verify cookies pop-up, Show Details link, and its functionality. 
  test('Verify Cookies Pop-up Show Details link', async () => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupShowDetailsLinkIsDisplayed();
    await cookiesPage.clickOnShowDetailsLink();
    await cookiesPage.verifyCookiesPopupExpandedViewIsDisplayed();
  });

  //Test case 7: Verify cookies pop-up is closed successfully. 
  test('Verify Cookies Pop-up is closed', async () => {
    const testdata = data['Verify Cookies Pop-up is closed'];
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtonsAreDisplayed();
    await cookiesPage.clickOnSelectionButton(testdata.buttonName);
    await cookiesPage.verifyCookiesPopupIsClosed();
  });

  //Test case 8: Verify login pages are displayed. 
  test('Verify Login Pages are displayed', async () => {
    const testdata = data['Verify Login Pages are displayed'];
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtonsAreDisplayed();
    await cookiesPage.clickOnSelectionButton(testdata.buttonName);
    await cookiesPage.verifyCookiesPopupIsClosed();
    await loginPage.verifyLoginPageIsLaunchedSuccessfully();
  });

  //Test case 9: Verify the login functionality with invalid credentials. 
  test('Verify Login with invalid credentials', async () => {
    const testdata = data['Verify Login with invalid credentials'];
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtonsAreDisplayed();
    await cookiesPage.clickOnSelectionButton('allow all');
    await cookiesPage.verifyCookiesPopupIsClosed();
    await loginPage.verifyLoginPageIsLaunchedSuccessfully();
    await loginPage.enterCredentials(testdata.username, testdata.password);
    await loginPage.clickOnLoginButton();
    await loginPage.verifyLoginErrorMessageIsDisplayed();
  });

  //Test case 10: Verify the login functionality with valid credentials. 
  test('Verify Login with valid credentials', async () => {
    const testdata = data['Verify Login with valid credentials'];
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtonsAreDisplayed();
    await cookiesPage.clickOnSelectionButton(testdata.buttonName);
    await cookiesPage.verifyCookiesPopupIsClosed();
    await loginPage.verifyLoginPageIsLaunchedSuccessfully();
    await loginPage.enterCredentials(testdata.username, testdata.password);
    await loginPage.clickOnLoginButton();
    await homePage.verifyHomePageIsDisplayed();
  });

  //Test case 11: Verify social media login options available on the login page. 
  test('Verify social media login options are available', async () => {
    const testdata = data['Verify Login Pages are displayed'];
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtonsAreDisplayed();
    await cookiesPage.clickOnSelectionButton(testdata.buttonName);
    await cookiesPage.verifyCookiesPopupIsClosed();
    await loginPage.verifyLoginPageIsLaunchedSuccessfully();
    await loginPage.verifySocialMediaLoginOptionsAreDisplayed();
  });

  //Test Case 12: verify forgot password feature. 
  test('Verify forgot password feature', async () => {
    const testdata = data['Verify forgot password feature'];
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPopupIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtonsAreDisplayed();
    await cookiesPage.clickOnSelectionButton(testdata.buttonName);
    await cookiesPage.verifyCookiesPopupIsClosed();
    await loginPage.verifyLoginPageIsLaunchedSuccessfully();
    await loginPage.verifyForgotPasswordOptionIsAvailable();
    await loginPage.enterCredentials(testdata.username);
    await loginPage.clickOnForgotPasswordLink();
    await loginPage.verifyForgotPasswordConfirmationMessageIsDisplayed();
  });

});

