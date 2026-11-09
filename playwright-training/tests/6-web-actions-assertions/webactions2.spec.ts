import { test, expect } from '@playwright/test';

test('Demo QA Test', async ({ page }) => {
    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto('https://demoqa.com/automation-practice-form');

    // 2. Wait for Page-load
    const appHeader = await page.locator('//h1[text()="Practice Form"]');
    await expect(appHeader).toBeVisible();

    // 3. Enter First name and Last name
    const firstname = await page.locator('//input[@id="firstName"]');
    const lastname = await page.locator('//input[@id="lastName"]');

    await firstname.fill('Bharath');
    await lastname.fill('Reddy');

    // 4. Enter Email
    const email = await page.locator('//input[@id="userEmail"]');
    await email.fill('bharath.reddy@example.com');

    // 5. Select Gender (Male)
    await selectGender(page, 'Male');

    // 6. Enter mobile number
    const mobile = await page.locator('//input[@id="userNumber"]');
    await mobile.fill('9876543210');

    // 7.Select DOB (1-Feb-1991)
    await selectDOB(page, '1', 'February', '1991');

    // 8.Search and Select Computer Science and English
    await selectSubjects(page, ['Computer Science', 'English']);

    // 9.Select Hobbies as Sports and Reading
    const hobbies = ['Sports', 'Reading'];
    await selectHobbies(page, hobbies);

    // 10.Upload photo
    const uploadButton = await page.locator('//input[@id="uploadPicture"]');
    await uploadButton.setInputFiles('./files/Photo.png');

    //Submit the details. 
    const submitButton = await page.locator('//button[@id="submit"]');
    await submitButton.click();
});

//Common method to select the hobbies 
async function selectHobbies(page:any, hobbies:string[]) {
    for (const hobby of hobbies) {
        const hobbyLocator = await page.locator(`//label[text()="${hobby}"]`);
        await hobbyLocator.click();
    }
}

//Common method to select the subjects 
async function selectSubjects(page:any, subjects:string[]) {
   
    //Locate the subject suggestion box. 
    const subjectInput = await page.locator('//input[@id="subjectsInput"]');

    //By using a for loop, select each and every subject mentioned in the array. 
    for (const subject of subjects) {

        //Fill the subject name in the suggestion box. 
        await subjectInput.fill(subject);

        //Press the Enter button to select the suggestion. 
        await subjectInput.press('Enter');
        
    }
    
}

//Common method to select the gender value 
async function selectGender(page:any, gender:string) {
    const genderLocator = await page.locator(`//label[text()="${gender}"]`);
    await genderLocator.click();
}

//Common method to select the date of birth 
async function selectDOB(page:any, day:string, month:string, year:string) {

    //Launch the calendar 
    const dobInput = await page.locator('//input[@id="dateOfBirthInput"]');
    await dobInput.click();

    //Select the month value
    const monthDropdown = await page.locator('//select[@class="react-datepicker__month-select"]');
    await monthDropdown.selectOption({ label: month });

    //Select the year value
    const yearDropdown = await page.locator('//select[@class="react-datepicker__year-select"]');
    await yearDropdown.selectOption({ label: year });

    //Select the day value
   const dayLocator = await page.locator(`//div[text()="${day}" and contains(@aria-label,"${month}")]`);
   await dayLocator.click();
    
}
