//Callback function meaning: Call the function after some time, at the end of the execution. Instead of holding all the next lines 

//Syntax 
// setTimeout(() => {
//     // code to be executed after the delay
// }, delayInMilliseconds);


console.log("Execution Started");
console.log("Step 1 Completed");
console.log("Step 2 Completed");
console.log("Step 3 Completed");
setTimeout(() => {
    console.log(getSumUpto(10000000000));
}, 5000);
console.log("Step 5 Completed");
console.log("Step 6 Completed");
console.log("Step 7 Completed");
console.log("Execution Finished");



//Function to get the sum of numbers from 1 to a given number 
function getSumUpto(n: number): number {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}