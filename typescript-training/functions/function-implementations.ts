//Functions 

//Function : A function is nothing but a block of code or a collection of statements written together to complete a specific task. 

//There are multiple ways we can implement the function to complete specific tasks. 

//1. Functions without parameters and without a return type 
function printName(): void {
    console.log("John Doe");
}

//calling function
printName();

//2. Functions with parameters and without any return type 
function printEmpName(name: string): void {
    console.log(name);
}

//calling function
printEmpName("Bharath");

//3. Functions with return type 
function getAccountBalance(): number {
    console.log("Navigate to the application. ");
    console.log("Check the account balance. ");
    const accountBalance: number = 10000; //local variable
    return accountBalance;
}

//calling function
console.log(getAccountBalance());

//4. Functions with optional parameters 
function empDetails(empId: number, empName: string, empAge?: number): void { //? refers optional parameter
    console.log(empId);
    console.log(empName);
    if (empAge) {
        console.log(empAge);
    }
}

//calling function
empDetails(1234, "Bharath");

//4. Functions with default parameters 

function empInfo(empId: number, empName: string, empVisaStatus: boolean = false): void {
    console.log(empId);
    console.log(empName);
    console.log(empVisaStatus);
}

//calling function
empInfo(1234,"Bharath");


//6. Functions with rest parameters (Meaning function with unlimited arguments )
function sumOfNumbers(...input:number[]):number{
    let sum = 0;
    for(let val of input){
        sum = sum+val;
    }
    return sum;
}

console.log(sumOfNumbers(1,2,3,4));

