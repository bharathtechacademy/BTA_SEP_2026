//A constructor is a default method created by the class, and we are going to use this constructor method to initialize the object. 

//In TypeScript, there are two different types of constructors that will be used. 

//1. Default constructor. 
//2. Parameterized constructor 

class Employee {

    //default constructor
    constructor(){

    }

    //parameterized constructor
    // constructor(abc:string){

    // }

    //data memebers 
    readonly empId : number = 1234;
    empName : string = "John Doe";
    empSalary : number = 50000;

    //methods
    employeeProject():string{
        let empProject :string = "Project A";
        return empProject;
    }
}

//Accessing the data from the class using object
let obj = new Employee();
console.log(obj.empId);
console.log(obj.employeeProject());
