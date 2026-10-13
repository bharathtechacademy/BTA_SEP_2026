//Class => A class is a template or a data type that can hold data and methods together in one place. 

//Creating an `Employee` class to store employee information 


//method vs function
//A function is a block of code that we are going to write outside of the class. 
//A method is a block of code that we are going to write inside the class.

class Employee {

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
let obj1 = new Employee();
console.log(obj1.empId);
console.log(obj1.employeeProject());

let obj2 = new Employee();
console.log(obj2.empId);
console.log(obj2.employeeProject());