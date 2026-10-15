//Polymorphism is a concept of having a single method with multiple implementations. 

//Generally, polymorphism can be implemented in two different ways. 

//1. Compile-time polymorphism (Method overloading ) (This is not allowed in TypeScript. )
//2. Runtime polymorphism (Method overriding)

//1. Compile-time polymorphism (Method overloading )
//Creating multiple methods with the same name within the same class with different parameters 

// class Parenet {

//     // compile-time polymorphism
//     add(a:number, b:number) :number{
//         return a+b;
//     }

//     add(a:number, b:number , c:number) :number{
//         return a+b+c;
//     }

//     add(a:string, b:string ) :string{
//         return a+b;
//     }
// }



// class Parent {

// add(a,b){
//     return a+b;
// }

// add(a,b,c){
//     return a+b+c;
// }

// add(a,b){
//     return a+b;
// }

// }


//2. Runtime polymorphism (Method overriding)
//Runtime polymorphism is all about having multiple methods with the same name and same parameters between parent and child classes. 

class Parent {

   

    printEmpData(empName:string):void{
        console.log(`Employee Name: ${empName}`);
    }

}

class Child extends Parent {

    printEmpData(empName:string):void{
        console.log(`Employee Name: ${empName} (from Child class)`);
    }

}

let child = new Child();
child.printEmpData("Bharath");