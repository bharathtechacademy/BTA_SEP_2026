//Asynchronous functions in TypeScript 

//Asynchronous functions are all about the functions that will return a promise. 

//Problem Statement : Generate a random number which should be greater than 0.5

//Normal Function
// function generateRandomNumber(): number {
//     return Math.random();
// }

// console.log("Random Number (Normal Function):", generateRandomNumber());


//Async function
async function getRandomNumber(): Promise<number> {

    return new Promise<number>((resolve, reject) => { //resolve => Fulfilling the promise, reject => Rejecting the promise

        setTimeout(() => {

            const randomNumber = Math.random();

            if(randomNumber > 0.5) {
                resolve(randomNumber);
            } else {
                reject(new Error("Generated number is not greater than 0.5"));
            }

        },10000);

    });

}

//Usage of async function
console.log("Random Number (Async Function):", await getRandomNumber());
