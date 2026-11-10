import fs from 'fs';
import {PDFParse} from 'pdf-parse';


export class PdfUtil {

    static async readPdf(filePath: string): Promise<string> {

        //Verify whether the PDF file exists. 
        if(!fs.existsSync(filePath)){
            throw new Error(`PDF file not found within the file path : ${filePath}`)
        }

        //Read the PDF file as a buffer. (Read the PDF file and convert it into raw byte format.)
        const pdfBuffer = fs.readFileSync(filePath);

        //Convert the PDF buffer into Uint8Array. (This can wrap all the byte content into a single file. )
        const unit8Array = new Uint8Array(pdfBuffer);

        //Convert all the bytes collected in `Uint8Array` into a regular string. 
        const pdfData = new PDFParse(unit8Array);
        const pdfText = await pdfData.getText();

        //Return the string from the PDF file. 
        return pdfText.text;  //text will give you text content , pages will give you the number of pages in the PDF.

    }
}

//Read the data from the PDF file. 
const output = await PdfUtil.readPdf('./files/Pdf.pdf');
console.log(output);
console.log(output.includes("How to install Playwright"));