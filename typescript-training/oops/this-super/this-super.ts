//this and super in TypeScript

//1.this => 'this' keyword refers to the current class instance. 
//2.super => The 'super' keyword refers to the parent class instance. (The `super` keyword won't work for calling the parent class data in TypeScript. )

class Parent {

    name:string ="Bharath";

    printAge():void{
        console.log(`Age is 35`);
    }
}

class Child extends Parent {

    name:string ="Sarath";

    printAge():void{
        console.log(`Age is 40`);
    }

    printDetails():void{

        //calling data
        console.log(`Child Name is ${this.name}`);
        // console.log(`Parent Name is ${super.name}`);

        //calling methods
        this.printAge();
        super.printAge();
    }

}

let child = new Child();
child.printDetails();