class Parent1 {

    name: string = "Bharath Reddy";
    age: number = 30;
    city: string = "Hyderabad";

    printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}

class Parent2 {

    state: string = "Telangana";
    country: string = "India";

    printData() {
        console.log(`State: ${this.state}`);
        console.log(`Country: ${this.country}`);
    }

}

//Multiple inheritance is all about extending more than one parent class into a child class at a time. 
//It is not allowed directly for the normal classes in TypeScript. 

// class Child extends Parent1,Parent2{

// }