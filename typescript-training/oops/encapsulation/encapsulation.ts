//Encapsulation is the concept of hiding the information and sharing required information with required classes only. 

// Encapsulation is a concept of binding data and methods together to access private information. 

//Main Class
class Class1{

    //data
    private name: string = "Bharath Reddy";
    private age: number = 30;
    private city: string = "Hyderabad";


    //method
    protected printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

    //Creating a public method within the current class to share private information with others 
    public getName():string{
        return this.name;
    }

    public getAge():number{
        return this.age;
    }

    public getCity():string{
        return this.city;
    }

    public setAge(age: number){
        this.age = age;
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
        console.log(`Name: ${obj.getName()}`);
        console.log(`Age: ${obj.getAge()}`);
        console.log(`City: ${obj.getCity()}`);
        obj.setAge(35); // Example of using the public setter method to update age
        // obj.printData();
    }

}

let obj3 = new Class3();
obj3.printData();