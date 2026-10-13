class GrandParent {

    name: string = "Bharath Reddy";
    age: number = 30;
    city: string = "Hyderabad";

    printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}

class Parent extends GrandParent {

    state: string = "Telangana";
    country: string = "India";

    printData() {
        console.log(`State: ${this.state}`);
        console.log(`Country: ${this.country}`);
    }

}

class Child extends Parent {

    printData(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
        console.log(`State: ${this.state}`);
        console.log(`Country: ${this.country}`);
    }

}