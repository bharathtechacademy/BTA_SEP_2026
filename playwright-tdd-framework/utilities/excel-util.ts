import fs from 'fs';
import xlsx from 'xlsx';

export class ExcelUtil {

    //Method to read the data from an Excel sheet 

    static readExcel(filePath:string , sheetName : string){

        //Verify whether the Excel file exists. 
        if(!fs.existsSync(filePath)){ //If the file does not exist within the given file path 
            throw new Error(`File not found in the path: ${filePath}`)
        }

        //If the file is available, read the Excel file. 
        const workbook = xlsx.readFile(filePath);

        //Get the given sheet from the workbook. 
        const sheet = workbook.Sheets[sheetName];

        //Verify whether the given sheet exists in the workbook. 
        if(!sheet){
            throw new Error(`Sheet not found in the workbook. : ${sheetName}`);
        }

        //Read the complete data from the given sheet and convert it into JSON format. 
        return xlsx.utils.sheet_to_json(sheet);

    }


}

let data = ExcelUtil.readExcel("./files/TestData.xlsx", "Sheet1");
console.log(data);
console.log(data[0]["Username"]);
console.log(data[0]["Password"]);