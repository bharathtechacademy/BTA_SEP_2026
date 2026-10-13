
// //Before Parameterized Constructor
// class Employee {

//     //method 1
//     printEmployeeDetails(empId: number, empName: string) {
//         console.log("Employee Id: " + empId);
//         console.log("Employee Name: " + empName);
//     }

//     //method 2
//     printEmployeeProjects(empId: number, empProject: string) {
//         console.log("Employee Id: " + empId);
//         console.log("Employee Projects: " + empProject);
//     }

//     //method 3
//     printEmployeeRole(empId: number, empRole: string) {
//         console.log("Employee Id: " + empId);
//         console.log("Employee Role: " + empRole);
//     }
// }

// //Access the data and methods by creating an object. 
// let obj = new Employee();
// obj.printEmployeeDetails(1234, "Bharath Reddy");
// obj.printEmployeeProjects(1234, "Creatio CRM");
// obj.printEmployeeRole(1234, "SDET");

// let empId = 1222;

//After Parameterized Constructor
class Employee {

    empId:number =0;

    constructor(id:number){
        this.empId = id;   //this meaning current class instance / current class variable
    }

    //method 1
    printEmployeeDetails(empName: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Name: " + empName);
    }

    //method 2
    printEmployeeProjects(empProject: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Projects: " + empProject);
    }

    //method 3
    printEmployeeRole(empRole: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Role: " + empRole);
    }
}

//Access the data and methods by creating an object. 
let obj = new Employee(1234);
obj.printEmployeeDetails("Bharath Reddy");
obj.printEmployeeProjects("Creatio CRM");
obj.printEmployeeRole("SDET");