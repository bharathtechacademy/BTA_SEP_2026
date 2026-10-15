//Different types of functions in TypeScript 

//1. Named functions 
//2. Anonymous functions 
//3. Arrow functions 
//4. Asynchronous functions 
//5. Callback functions 


//1. Named functions => The functions declared explicitly with some name . Later, we can use the same name to call that. 

    function add(a: number, b: number): number {
        return a + b;
    }

    //calling the named function
    console.log(add(5, 3)); // Output: 8

//2. Anonymous functions => The functions declared without any name .These functions will be used as a parameter to another function. 
let multiply = function (a:number, b:number):number{
    return a*b;
}

//calling the anonymous function
console.log(multiply(2,3)); // Output: 6

//3. Arrow functions => The function is declared without any name, and the implementation will be added after the arrow. 
// These functions will be used to simplify the implementation and reduce boilerplate code. 

let sum = (a: number, b: number): number => a+b;

//calling the arrow function
console.log(sum(4,5)); // Output: 9