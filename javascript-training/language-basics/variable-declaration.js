// How to store data in JavaScript? 

//Syntax : Declaration  Variable = Data ;

// Declaration is all about specifying the nature of the data by using a set of keywords in JavaScript. 

// In JavaScript, we can declare the variables by using three different keywords. 

//1. var / empty (We should avoid) => var will be used to store the data which can be changed any time 
//2. let => let will be used to store the data which can be changed any time, but it has block scope.

//3. const => const will be used to store the data which cannot be changed later

//1. Initialization. 
//2. Reassignment. 
//3. Redeclaration. 
//4. Scope of the data 


//1. Initialization 

// Initialization is all about adding the value at the time of declaring, that is, storing the data while creating the variable itself. 

var a; //It is not mandatory to initialize the variable when we are declaring with `var`. 
let b; //It is not mandatory to initialize the variable when we are declaring with `let`. 
const pi = 3.14;//Is it mandatory to initialize the variable when we are going to declare it with a 'const'


//2. Reassignment 

// Reassignment is all about modifying the original value during the execution process. 
a = 100; // Reassignment is possible with the variable declared with `var`. 
b = 200; // Reassignment is possible with the variable declared with `let`. 
//pi = 3.15; // Reassignment is not possible with the variable declared with `const`. 

//3. Redeclaration. 

// Declaring the variable once again to store different data 
var a = "Bharath"; //Redeclaration is possible with the variable declared with `var`. 
// let b = "Sarath"; // Redeclaration is not possible with the variable declared with `let`.
// const pi = 500; // Redeclaration is not possible with the variable declared with `const`.

console.log(a);
console.log(b);
console.log(pi);


//4. Scope of the data 

// Once we are going to store the data, where can we access this data? 

// When we declare the variable with either `let` or `const`, it will act like a block-scoped variable. 
// When we declare the variable with `var`, it will act like a non-block-scoped variable. 


{
    var x = 100;
    let y = 200;
    const z = 300;

    // console.log(x);
    // console.log(y);
    // console.log(z);
}

    console.log(x); // This will work because `x` is not block-scoped.
    console.log(y); // This will throw an error because `y` is block-scoped.
    console.log(z); // This will throw an error because `z` is block-scoped.