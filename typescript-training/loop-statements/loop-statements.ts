//Loop statements are all about adding a condition to repeat the execution of statements. 


//There are mainly two major loop statements available in TypeScript. 

//1. for loop => When we know the total number of iterations to be executed before itself 
//2. while loop => When we don't know the total number of iterations to be executed before 


let name : string = "Adithya";


//Before Loops

// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

//After Loops

//1. for loop

//Syntax : 

//for(condition-to-begin ;condition-to-end ;increment/decrement){
    //code to be executed
//}

for(let i:number = 1; i <=10 ;i++){
    console.log(name);
}

//2. while loop

//Syntax :
//while(condition-to-continue){
    //code to be executed
//}


let j:number = 1;
let pageLoaded:boolean = false;

while(j >0){

    //contion to break the loop
    if(j > 10 || pageLoaded){
        break;//Break the loop if either 10 attempts are over or the page is loaded successfully. 
    }

    console.log("Refresh the Page");

    j++; //increment the counter
}
