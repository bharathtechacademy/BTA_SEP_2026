//Syntax to store the data in JavaScript 
//Syntax : Declaration Variable = Data ;

//Operators : Operators are a set of special characters used in the JavaScript program to perform different types of operations. 

//Based on the nature of the operation that we are going to perform, we can divide these operators into five different categories. 

//1. Arithmetic operators 
//2. Assignment operators 
//3. Comparison operators 
//4. Logical operators 
//5. Ternary operator 


//1. Arithmetic operators => Arithmetic operators are all about , st of special characters used to perform mathematical operations. 
console.log("1. Arithmetic operators");
//+ => Addition 
//- => subtraction 
//* => Multiplication 
/// => Division 
//% => Modulus (Reminder of the division)
//++ => Increment (Increase the value by 1. )
//-- => Decrement (Decrease the value by 1. )

let a = 10;
let b = 20;

//a++ => Post-increment => Post execution of current line, increase the value. 
//++a => Pre-increment => First, increase the value, then execute the current line. 

console.log(++a);
console.log(a);
console.log(--b);
console.log(b);

//2. Assignment operators => Set of special characters used to assign a value to the variable 
console.log("2. Assignment operators");
// = 
// +=
// -=
// *=
// /=
// %=

let i = 10;
console.log(i);

i+=5; // i+=5 => i = i+5 ; 10+5 = 15
console.log(i);

i-=10; //i-=10 => i = i-10 ; 15-10 = 5;
console.log(i);

i*=20;
console.log(i);

i/=5;
console.log(i);

i%=2;
console.log(i);

//3. Comparison operators => Set of special characters used in a programming language to compare two different values 
console.log("3. Comparison operators ");

// == (Loose equality), === (Strict equality), > , < , >= , <= , != , !==
// == (Loose equality) => Loose equality can verify only data without considering the data type. 
// === (Strict equality) => Strict equality can verify both data as well as datatypes. 

let x = 10; //number
let y = 10; //number
let z = "10"; //text

console.log(x+y);
console.log(x+z);

console.log(x==y);
console.log(x==z);

console.log(x===y);
console.log(x===z);

console.log(x!=z);

console.log(x!==z);


// 4. Logical operator => Set of special characters used to build logic by combining multiple conditions together 

// && => Logical AND => It will return true if all conditions are true. 
// || => Logical OR => Will return true if at least one condition is true. 
// ! => Logical NOT => Will return opposite result 

let p = 10;
let q = 20;
let r = 30;

console.log(p<q && q >r) ; // true and false => false
console.log(p<q || q >r) ; // true or false => true
console.log(!(p<q || q >r)) ; // not (true or false ) => not (true) => false

// 5. Ternary operator => Ternary operator is a special character used to perform a conditional operation. It's a shorthand of an if-else conditional statement. 
//Syntax : let result = (condition) ? value-if-true : value-if-false

let age = 27;

let result = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(result);