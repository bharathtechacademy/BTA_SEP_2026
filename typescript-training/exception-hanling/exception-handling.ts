

//Exception : An exception is all about the error that occurred during the execution of any program. 

//Exception Handling : Exception handling is all about controlling the exceptions. 

//1. try-catch exception handling : When there is an exception, I want to ignore the same. 
//2. throw custom exception : When there is no exception, but I want to create one 

//try -catch
//syntax :

try{
    //code to execute (original code)
} catch (error) {
    //code to handle the exception (alternate code)
}

//Example :

//Before exception handling 
// let input :any ;
// console.log(input.toUpperCase());
// console.log("Execution completed successfully.")

//After exception handling 

let input :any ;
try{
    console.log(input.toUpperCase());
}catch(abc){
    console.log("Caught exception: " + abc);
    console.log("There is some issue with the try block. I'm executing alternate code. ");
    // console.log(input.toLowerCase());
}finally{ //It's a non-mandatory block which can be used to add some mandatory steps. 
    console.log("Execution completed successfully.");
}


//throw custom exception
//syntax :

//throw new Error("Custom exception message");

let age : number = 15;

if(age < 18){
    throw new Error("Not Eligible to Vote");
}else{
    console.log("Eligible to Vote");
}
console.log("Execution completed successfully.");