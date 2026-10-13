//Abstraction is a concept of hiding the implementation. 

//method => A method is nothing but a block of code or a collection of statements written inside the class. 


abstract class CommonMethods {

    abstract login(): void;

    logout(): void {
        console.log("Click on the logout button. ");
        console.log("Verify logout is successful. ");
    }
}

class Test extends CommonMethods {

    login(): void {
        console.log("Launch the Chrome browser. ");
        console.log("Enter the URL www.amazon.com. ");
        console.log("Enter the credentials. ");
        console.log("Click on the login button. ");
    }


}

// let obj = new CommonMethods();
// obj.logout();