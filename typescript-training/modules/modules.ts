//Modules in TS

//In TypeScript, each and every file will be treated as an independent component. Whenever we want to share any data or functions from one file to another file, we are going to convert this independent file or component into a separate module. Later, we are going to export this module to exchange the data. 

//Whenever we want to import or export the data in JavaScript or TypeScript, first we need to make some changes in the configuration file. 

//file name : package.json

// Before Enabling modules 

// {
//   "devDependencies": {
//     "ts-node": "^10.9.2",
//     "typescript": "^7.0.2"
//   }
// }

// After Enabling modules

// {
//   "devDependencies": {
//     "ts-node": "^10.9.2",
//     "typescript": "^7.0.2"
//   },
//   "type": "module"
// }


// file name : tsconfig.json

//add below settings

    // "allowImportingTsExtensions": true,
    // "noEmit": true,
    // "verbatimModuleSyntax": false,