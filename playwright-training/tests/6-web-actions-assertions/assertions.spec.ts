//Assertions : Assertions are nothing but a set of default methods provided by Playwright to compare the expected result versus the actual result. 

//In Playwright, there are two different types of assertions available. 

//1. Hard assertions  => It will fail the program immediately when the expected result does not match the actual result. 
//2. Soft assertions  => It will continue the program execution even when the expected result does not match the actual result, Fail the program at the end of the execution. 

//Syntax for hard assertion :  expect(actual).toBe(expected) 
//Syntax for soft assertion :  await expect.soft(actual).toBe(expected) 

//Playwright provides multiple default assertion methods for day-to-day validations related to automation. 

// const element = await page.locator('selector');

//expect(element).toBeVisible()  => Hard assertion to check if the element is visible.
//expect(element).toBeHidden()  => Hard assertion to check if the element is hidden.
//expect(element).toBeEnabled()  => Hard assertion to check if the element is enabled.
//expect(element).toBeDisabled()  => Hard assertion to check if the element is disabled.
//expect(element).toBeChecked()  => Hard assertion to check if the element is checked.
//expect(element).toHaveText(expected)  => Hard assertion to check if the element has the expected text.
//expect(element).toHaveAttribute(attribute-name, expected-value)  => Hard assertion to check if the element has the expected attribute with the expected value.
//expect(element).toHaveClass(expected)  => Hard assertion to check if the element has the expected class.
//expect(page).toHaveURL(url)  => Hard assertion to check if the page has the expected URL.
//expect(page).toHaveTitle(title)  => Hard assertion to check if the page has the expected title.
