// How to store data in JavaScript? 

//Syntax : Declaration  Variable = Data ;

// Variable : A variable is nothing but the name of the memory location where we are going to store the data. At a later point in time, this is going to act like a reference to access the data. 


// Rules of variables in JavaScript 

let empName = "Bharath";

//1. Variable must not be a reserved keyword. 
// let const = "Bharath";

//2. Variable must not be literal (true , false , null , undefined)
// let true = "Bharath";

//3. Variable must not contain white space. 
// let emp Name = "Bharath"; 

//4. A variable must not begin with a number. 
// let 1empName = "Adithya";

//5. Variable must not contain special characters except $ and _ symbols. 
// let emp#name = "Bharath";

//6. A variable must be unique always. 
// let empName = "Aditya";

console.log(empName);

//Standards to be followed 

//1. The variable should be meaningful and self-explanatory. 
let gateRank = 2233;

//2. Variable name must follow the standard naming convention. 

//Regular variables or methods or functions to be declared with camel case. 
//Ex: 
let myFullNameIs = "Bharath Reddy";

//When we are going to store any constant value which is fixed, then we are going to use upper-case letters along with an underscore to separate each and every word. 
const MAX_EMPLOYEES_NEEDED = 10;

//We declare classes. We are going to use Pascal case. (Starts with an upper-case letter, followed by camel casing. )
class CommonMethods {

}