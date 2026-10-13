class Employee {

    //data memebers 
    static empId : number = 1234;
    empName : string = "John Doe";
    empSalary : number = 50000;

    //methods
    static employeeProject():string{
        let empProject :string = "Project A";
        return empProject;
    }
}

class Employee2 {

    //data memebers 
    static empId : number = 1234;
    empName : string = "John Doe";
    empSalary : number = 50000;

    //methods
    static employeeProject():string{
        let empProject :string = "Project A";
        return empProject;
    }
}

class Employee3 {

    //data memebers 
    static empId : number = 1234;
    empName : string = "John Doe";
    empSalary : number = 50000;

    //methods
    static employeeProject():string{
        let empProject :string = "Project A";
        return empProject;
    }
}

//Accessing the data from the class using object
// let obj = new Employee();
console.log(Employee.empId);
console.log(Employee.employeeProject());