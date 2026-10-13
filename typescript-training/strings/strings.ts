//string => The Datatype that can store a collection of characters 
//String should be stored always within the quotations: single quotes, double quotes, or backticks. 
// let name1: string = '"Mr" Bharath Reddy';
// let name2: string = "'Mr' Bharath Reddy";
// console.log(name1);
// console.log(name2);

// //backticks will be used to store the dynamic string. 
// let firstName: string = "Shobhit";
// let lastName: string = "Gupta";

// //normal
// let empInfo: string = "Employee first name is " + firstName + ", and last name is " + lastName;

// //with-backtics
// let newEmpInfo: string = `Employee first name is ${firstName}, and last name is ${lastName}`;
// console.log(newEmpInfo);

//1.Storing a string inside the variable 
console.log("1.Storing a string inside the variable");
let originalString: string = " Username : Admin | Password : Admin123 ";
console.log(originalString);

//2.Method to calculate the total number of characters available inside the string 
console.log("2.Method to calculate the total number of characters available inside the string");
let totalCharacters: number = originalString.length;
console.log(totalCharacters);

//3.Method to Get a specific character by using an index of the string. 
console.log("3.Method to Get a specific character by using an index of the string.");
let charAtIndex5: string = originalString.charAt(5);
console.log(charAtIndex5);

// Reverse the string. 
let reverseString: string = "";
for (let x: number = originalString.length - 1; x >= 0; x--) {
    reverseString= reverseString+originalString.charAt(x);
}
console.log(reverseString);

//4. Method to eliminate unwanted spaces added in the string  (Spaces added at the beginning and end. )
console.log("4. Method to eliminate unwanted spaces added in the string ");
console.log(`Original '${originalString}'`);
console.log(` Trimmed '${originalString.trim()}'`);

//5. Method to Remove all the spaces from the string. 
console.log("5. Method to Remove all the spaces from the string. ");
console.log(originalString.replace(/ /g,""));

//5. Method to Remove all the 'a' s from the string. 
console.log("5. Method to Remove all the a's from the string. ");
console.log(originalString.replace(/a/,""));

//6. Method to Remove all the alphabets from the string. 
console.log("6. Method to Remove all the alphabets from the string. ");
console.log(originalString.replace(/[a-zA-Z]/g,""));

//7. Method to Remove all the numbers from the string. 
console.log("7. Method to Remove all the numbers from the string. ");
console.log(originalString.replace(/[0-9]/g,""));

//8. Method to Remove all the special chars from the string. 
console.log("8. Method to Remove all the special chars from the string. ");
console.log(originalString.replace(/[^0-9a-zA-Z]/g,""));

//9. Method to convert all the characters of the string into uppercase 
console.log("9. Method to convert all the characters of the string into uppercase ");
console.log(originalString.toUpperCase());

//10.Method to convert all the characters of the string into lowercase 
console.log("10. Method to convert all the characters of the string into lowercase ");
console.log(originalString.toLowerCase());

//11. Method to extract part of the text from the string 
console.log("11. Method to extract part of the text from the string ");
console.log(originalString.substring(12, 17));
console.log(originalString.substring(31, 39));

//12. Method to extract part of the text from the dynamic string 
console.log("12. Method to extract part of the text from the dynamic string ");
let splittedText = originalString.split(' ');
console.log(splittedText[3]);
console.log(splittedText[7]);

//13. Method to compare two different string values 
console.log("13. Method to compare two different string values");
//== (Loose Quality) 
//=== (Strict Equality)
//includes() => Method to check if a string contains a specific substring or not 
//startsWith() => Method to check if the string starts with a specific substring or not 
//endsWith() => Method to check if the string ends with a specific substring or not 

let name = "Bharath Reddy";
console.log(name.includes('hara'));
console.log(name.startsWith('Bharath'));
console.log(name.endsWith('Reddy'));

//14. Converting other data types to string 
console.log("14. Converting other data types to string ");
let stdCode = 123;
let ph = 456789;
let std:string = String(stdCode);
console.log(std+ph);

//15. Converting string to other data types 
console.log("15. Converting string to other data types ");
let balance: string = "Account balance is $19,999.99";
balance = balance.replace(/[^0-9.]/g, "");
let bal:number  = parseFloat(balance) ; //parseFloat => decimal , parseInt => without decimals , parseBoolean => boolean
console.log(bal>=10000);