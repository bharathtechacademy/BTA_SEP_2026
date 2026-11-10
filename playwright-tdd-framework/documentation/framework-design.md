# Playwright TDD Framework design (step by step)


## 1. `Creating local working directory`
Creating a local working directory means creating a separate project folder to maintain all the libraries, folder structure, and different components to automate our application. 

Ex: playwright-tdd-framework
Terminal Command : cd C:\Training\PlaywrightTrainings\Sep_2026\playwright-tdd-framework

## 2. Install all the necessary packages based on project needs. 
1. **TypeScript** - `npm install -g typescript` and `npx tsc --init` (tsconfig.json) - Backend programming language support
2. **Playwright** - `npm init playwright@latest` - To automate web and APIs 
3. **PostgreSQL** - `npm install pg @types/pg` - To connect to the database and perform DB validations 
4. **Excel** - `npm install excel xlsx` - To read and work with Excel sheets 
5. **PDF** - `npm install pdf-parse-new` - To read and work with PDF files 

## 3. Update the global configurations at the project level within the package.json and tsconfig.json files. 
* package.json => "type": "module" //To import data or methods from one file to another file 
* tsconfig.json => "types" : ["node"] //To include the Node.js type definitions in the current project 
* tsconfig.json => "allowImportingTsExtensions" : true //To allow importing TypeScript-related files in the current project 
* tsconfig.json => "noEmit" : true //Whenever I am importing TypeScript-related files, don't emit any .js files. Silently run the TypeScript program. 

## 4. Creating the folder structure to maintain different components of the framework 

* commons => To maintain all the common methods related to UI(commons\ui\web-commons.ts), API(commons\api\api-commons.ts), database(commons\db\db-commons.ts), performance testing(commons\load\jmeter-commons.ts), and AI (commons\ai\ai-commons.ts)

* config => config\config.json => To maintain all the configurations related to web API, database, etc. Configurations mean the common data, like URLs, database connections,API base URLs, etc. 

* testdata => To maintain the artist data related to each and every component, like UI(testdata\ui\data.json), API(testdata\api\data.json), database(testdata\db\data.json), performance testing(testdata\load\data.json), and AI (testdata\ai\data.json)

* utilities => To maintain the common methods related to different types of utilities we are going to use in our framework based on our application needs (for example, Excel utility, PDF utility, database utility, etc.) 

* page-objects => To maintain page-wise locators (page-objects\page-elements\login-page-elements.json) and page-wise common methods(page-objects\page-steps\login-page-steps.ts) separately to implement the page object model design pattern within the framework 

* tests => To maintain all the playwright test cases related to each and every component .

* .env => To maintain environment-specific secrets and credentials on the local computer without sharing them in the cloud environment 

* test-results => To maintain the test results related to the latest test execution and to capture the failed test cases and related information Playwright will use this folder. 

* playwright-report => To maintain the test results reports along with video traces, etc., for each and every test case we are going to execute with Playwright 

* playwright-report/screenshots => To maintain all the screenshots collected during the test execution process 