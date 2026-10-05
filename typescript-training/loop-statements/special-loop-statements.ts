// Special loop statements 

//1. for...of loop => Will help us to iterate over each and every value of the array 
//2. for...in loop => Will help us to iterate over properties of an object 
//3. do...while loop

// //Array of fruits 
// let fruits: string[] = ["Apple", "Banana", "Orange"];

// //normal for loop
// for(let i:number = 1; i<fruits.length ;i++){
//     console.log(fruits[i])
// }

// //for..of loop

// //Syntax :

// // for(let value of array){
// //     console.log(value);
// // }
// for(let fruit of fruits){
//     console.log(fruit);
// }

// //for..in loop
// //Syntax : 
// // for(let key in Object){
// //     console.log(key);
// //     console.log(Object[key]);
// // }


// interface empInfo {
//     "empName": string,
//     "empId": number,
//     "visaStatus": boolean,
//     "address": {
//         "city": string,
//         "state": string,
//         "country": string
//     }
// }

// //Object
// let empData: empInfo = {
//     "empName": "Bharath Reddy",
//     "empId": 1234,
//     "visaStatus": true,
//     "address": {
//         "city": "Kadapa",
//         "state": "Andrapradesh",
//         "country": "India"
//     }
// };


// for(let key in empData){ //Get each and every key from the employee data object. 
//     console.log(key);
//     console.log(empData[key as keyof empInfo])
// }

// for(let key in empData.address){
//     console.log(key);
//     console.log(empData.address[key as keyof typeof empData.address])
// }


//do-while loop => A do-while loop will execute a block of code at least once, even if the condition is not satisfied. 

let j: number = 0;

// while(j>0){
//     console.log(j+ " Reresh the Page");
//     j++;
// }


do {
    console.log(j + " Reresh the Page");
    j++;
} while (j > 0);