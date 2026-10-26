# Playwright folder structure 

1. node-modules : `node_modules` is a default folder created by Node.js to download and add all the additional libraries, like Playwright, TypeScript, Excel, PDF, and all those things. 

* No need to share the node_modules folder with teammates because whenever they are going to run the command `npm install`, automatically it is going to check package.json to understand what all the packages are downloaded and installed in our project folder. By using that command, it is going to directly download from the internet and install on their main machine also. 

2. tests : This is the default folder created by Playwright to maintain all our test cases in the form of .spec.ts. Every time we want to add new test cases, we need to create a spec file inside the `tests` folder only. Then only Playwright is going to recognize the test cases. 

3. package.json => In this file, Node.js is going to update the details about each and every external package installed in the project. And also different configurations and settings related to JavaScript .

4. package-lock.json =>In this file, all the additional dependencies required to run additional libraries will be added. 

5. .gitignore => This is the file created to avoid exporting all the unnecessary files into the cloud repository. 

6. playwright-report => This folder will have all the test result reports in the form of HTML. Every time we run the test cases in Playwright, within the Playwright report, we can have test results, screenshots, videos, and traces as well. 

7. test-results => This results folder will have the details about the last run in the form of a JSON file. In this JSON file, it will maintain failure test case details to re-execute if needed. 

8. playwright.config.ts => This is the main or most important file that has all the settings and configurations related to Playwright. By using this file, we can actually control the entire Playwright framework and test suites. 


- testDir: './tests' => This will represent the default test directory that needs to be referred to by Playwright every time a user is going to run the Playwright test command. 

- fullyParallel: true => This will represent the setting to run the test cases in parallel. `true` setting will run the test cases in parallel. `false` setting will run the test cases in sequential mode, one after another. 

- forbidOnly: !!process.env.CI => This will avoid `test.only` methods in CI/CD execution. When a user is going to update any test cases with `test.only` in the cloud repository and tries to run in the CI/CD pipeline, it is going to throw an error and stop the execution. 

-   retries: process.env.CI ? 2 : 0, => This will represent how many times you want to Rerun the test cases in Playwright when a test case fails. Current setting represents: if a test case fails in the CI/CD pipeline, rerun 2 times. If it fails on the local computer, no need to retry (0 times). 

- workers: process.env.CI ? 1 : undefined, => This represents how many parallel sessions you want to launch to run the test cases in parallel. In the current setting, if it is a CI/CD pipeline, use one worker, meaning one session only. If it is a local computer (undefined), launch the workers based on the system processor capacity. 

- reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  This will represent the report and report-related settings every time a test execution completes in Playwright. By default, it will generate an HTML report. Optionally, we can include screenshots, traces, and videos inside the report. 

  - projects:  This currently represents all the different browser engines enabled to run all our test cases. By default, it will enable all three browser engines, and each and every test case will be executed in all three browsers. Anytime we want to run in a particular browser, we can always comment out the other browser engine configurations. (run in chrome only : npx playwright test --headed --project=chromium)

  * Please, execution will happen in headless mode. That is the reason why, physically, the browser window won't be launched. Anytime we want to launch the browser window in headed mode, that needs to be added to the command. (npx playwright test --headed
  )