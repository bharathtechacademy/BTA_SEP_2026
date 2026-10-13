//`interface` is a special abstract class. 
// The specialty of this interface is that it's a 100% abstract class. It allows only abstract methods. 

interface CommonMethods1 {

    login(): void;
    logout(): void;
}

interface CommonMethods2 {
    verifyHomePage(): void;
    verifyProfileSection(): number;
}

class Test implements CommonMethods1, CommonMethods2 {

    login(): void {
        console.log("Launch the Chrome browser. ");
        console.log("Enter the URL www.amazon.com. ");
        console.log("Enter the credentials. ");
        console.log("Click on the login button. ");
    }

    logout(): void {
        console.log("Log out of the application.  ");
    }

    verifyHomePage(): void {
        console.log("Verify the home page is displayed. ");
    }

    verifyProfileSection(): number {
        console.log("Verify the profile section is displayed. ");
        return 1;
    }

}

// let obj = new CommonMethods();
// obj.logout();