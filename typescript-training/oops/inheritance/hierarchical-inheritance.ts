
class Parent {

    name: string = "Bharath Reddy";
    age: number = 30;
    city: string = "Hyderabad";

    printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}

//Hierarchical inheritance is all about multiple child classes inheriting the properties from a single parent class. 

class Child1 extends Parent{ //child1 extends parent

state: string = "Telangana";

printData() {
        // let obj = new Class1();
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }


}

class Child2 extends Parent{ //child extends parent

state: string = "Karnataka";

printData() {
        // let obj = new Class1();
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }


}