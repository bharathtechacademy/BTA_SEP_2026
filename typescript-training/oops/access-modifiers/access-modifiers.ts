// Access modifiers in TypeScript 

//Access modifiers are nothing but a set of keywords we are going to use to control the access of class properties (data /methods)

// There are three different types of access modifiers available in TypeScript. 

//1. public/no access modifier => A public property can be accessible from anywhere. 
//2. protected => A protected property can be accessible within the class and its subclasses only. 
//3. private => A private property can be accessible within the class only. 

//1.public / no access modifiers

// Public access modifiers are the default access modifiers in TypeScript. 
// Public data or methods can be accessed within the class. 
// Public data or methods can be accessed within the child class as well.
// Public data or methods can be accessed outside of the class also.

//2.protected modifiers

// protected data or methods can be accessed within the class. 
// protected data or methods can be accessed within the child class as well.
// protected data or methods cannot be accessed outside of the class.


//3.private modifiers

// private data or methods can be accessed within the class. 
// private data or methods cannot be accessed within the child class.
// private data or methods cannot be accessed outside of the class.

//Main Class
class Class1{

    //data
    public name: string = "Bharath Reddy";
    public age: number = 30;
    public city: string = "Hyderabad";


    //method
    public printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}


//Child Class
class Class2 extends Class1{

    //Method to access the data from class 1 
    printData(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}

//Outside Class
class Class3{

    //Method to access the data from class 1 
    printData(){
        let obj = new Class1();
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`City: ${obj.city}`);
        // obj.printData();
    }

}