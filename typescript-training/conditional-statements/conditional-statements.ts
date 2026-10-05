//Conditional statements: writing statements along with specific conditions to execute them

//condition(){
    //line 1
    //line 2
//}

//There are mainly two different types of conditional statements available in TypeScript. 
//1. if-else statements => When we don't know the result of the condition before 
//2. switch-case statements => When we know the result and we want to choose one option among multiple 


//1.if-else conditional statements
//Syntax:
//if(condition){
    //code to be executed if condition is true
//}else-if(condition){
    //code to be executed if condition is false
//}else-if(condition){
    //code to be executed if the else-if condition is true
//}else{
    //code to be executed if all the above conditions are false
//}

let percentage : number = 54.5;

if(percentage >= 90){
    console.log("Grade: A");
}else if(percentage >= 80){
    console.log("Grade: B");
}else if(percentage >= 70){
    console.log("Grade: C");
}else if(percentage >= 60){
    console.log("Grade: D");
}else{
    console.log("Sorry, bro, you failed. ");
}


//Nested if-else statements
//Syntax:
//if(condition){
    //code to be executed if condition is true
    //if(condition){
        //code to be executed if nested condition is true
    //}else{
        //code to be executed if nested condition is false
    //}
//}else{
    //code to be executed if condition is false
//}

if(percentage >= 90){
    console.log("Grade: A");

    if(percentage >= 95){
        console.log("Hey, congratulations! You will get a gold medal. !");
    }else{
        console.log("Hey, you will get a silver medal. ");
    }
}else if(percentage >= 80){
    console.log("Grade: B");
}else if(percentage >= 70){
    console.log("Grade: C");
}else if(percentage >= 60){
    console.log("Grade: D");
}else{
    console.log("Sorry, bro, you failed. ");
}

//Switch-case statements
//Syntax:
//switch(value1){
    //case value1:
        //code to be executed if expression equals value1
        //break;
    //case value2:
        //code to be executed if expression equals value2
        //break;
    //default:
        //code to be executed if expression doesn't match any case
//}

// Example 

let env : string = "prod";

switch(env){

    case "qa":
        console.log("Environment is QA");
        console.log("launch application with www.qa.amazon.com");
        break; //to break the execution after completing the case

    case "dev":
        console.log("Environment is DEV");
        console.log("launch application with www.dev.amazon.com");
        break;

    case "prod":
        console.log("Environment is PROD");
        console.log("launch application with www.amazon.com");
        break;

    default:
        console.log("Environment is not recognized");
}