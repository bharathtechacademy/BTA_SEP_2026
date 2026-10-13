//Inheritance : Inheritance is a concept of accessing parent class properties in a child class without creating any object. 

//There are four different types of inheritance concepts available in TypeScript. 

//1. Single inheritance => Child class extending one single parent class 
//2. Multiple inheritance => Child class extending more than one parent class (Not directly supported in TypeScript)
//3. Multilevel inheritance => Child class extending a parent class and parent class extending grand parent class
//4. Hierarchical inheritance => Multiple child classes extending a single parent class


class Class1 {

    name: string = "Bharath Reddy";
    age: number = 30;
    city: string = "Hyderabad";

    printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}

class Class2 extends Class1{ //child extends parent

state: string = "Telangana";

printData() {
        // let obj = new Class1();
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }


}

let obj = new Class2();
obj.printData();
