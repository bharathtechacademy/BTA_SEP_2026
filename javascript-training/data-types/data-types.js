//Syntax to store the data in JavaScript 
//Syntax : Declaration Variable = Data ;

//Based on the nature of the data types, data types in JavaScript are divided into two different categories. 

//1. Primitive data types => Immutable data types: meaning, can't change the original value 
//2. Non-primitive data types => Mutable data types: meaning the original value can be modified. 

// Immutable data types 
// let a = 10;
// let b = a + 10;
// console.log(a);


//Mutable Datatype 
// let empData = {
//     "name": "Bharath",
//     "id": 1234
// }
// empData.age = 35;
// console.log(empData);

/*******************************/
/****Primitive-Datatypes********/
/*******************************/

//number => The data type that can store numbers with decimals or without decimals is called the number data type. 
//Number should be stored without any quotation. 

let num1 = 10;
let num2 = 10.65;

console.log(typeof num1);
console.log(typeof num2);


//string => The Datatype that can store a collection of characters 
//String should be stored always within the quotations: single quotes, double quotes, or backticks. 


let name1 = '"Mr" Bharath Reddy';
let name2 = "'Mr' Bharath Reddy";
console.log(name1);
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

//backticks will be used to store the dynamic string. 
let firstName = "Shobhit";
let lastName = "Gupta";

//normal
let empInfo = "Employee first name is "+firstName+", and last name is "+lastName;

//with-backtics
let newEmpInfo = `Employee first name is ${firstName}, and last name is ${lastName}`;
console.log(newEmpInfo);

//boolean => A boolean represents the result of a condition in the form of true or false. 
let isJavaScriptFun = true;
let isSkyGreen = false;

console.log(typeof isJavaScriptFun);
console.log(typeof isSkyGreen);

//undefined => `undefined` represents a variable that has been declared but not assigned to any value yet. 
let empAge ;
console.log(empAge);

//null => `null` represents a variable that has been declared and assigned to a `null` value intentionally. 
let salary = 100000;
salary= null;
console.log(salary);

//symbol 



/*******************************/
/****Non-Primitive-Datatypes****/
/*******************************/

//Object => Object Datatype represents a collection of key-value pairs stored together. 


//Before Object
let empName = "Bharath Reddy";
let empId = 1234;
let visaStatus = true;
let city = "Kadapa";
let state = "Andrapradesh";
let country = "India";

//After Object
let empData = {
    "empName" :"Bharath Reddy",
    "empId" : 1234,
    "visaStatus" : true,
    "address" : {
        "city" : "Kadapa",
        "state" : "Andrapradesh",
        "country" : "India"
    }
};


console.log(empData);

console.log(empData.empName);
console.log(empData.address.city);

console.log(empData["empName"]);
console.log(empData["address"]["city"]);

//Array =>Array Datatype can represent a collection of values stored together.

//Before Array
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";

//After Array
let fruits = ["Apple", "Banana", "Orange"];
let prices = [100, 200, 300];
let fruitsAndPrices = ["Apple", 100, "Banana", 200, "Orange", 300];

console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//Accessing Array Elements
console.log(fruits[0]); // Apple
console.log(prices[1]); // 200
console.log(fruitsAndPrices[2]); // Banana
console.log(fruitsAndPrices[3]); // 200


//Function => A function represents a block of code or a collection of statements written together to complete a specific task. 

function launchBrowserAndLogin(){
    console.log("Launch the Chrome Browser");
    console.log("Enter the URL: https://www.uat.icici.com/");
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}
