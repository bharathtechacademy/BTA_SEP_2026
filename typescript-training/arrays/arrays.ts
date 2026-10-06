//Array : This is the data type that can store a list of values. 

//1. Storing the values within the array 
console.log("1. Storing the values within the array");
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
let prices: number[] = [250, 80, 200, 190];
let fruitsAndPrices: (string | number)[] = ["Apple", 100, "Banana", 200, "Mango", 300, "Orange", 400];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//2. Accessing the values from the array
console.log("2. Accessing the values from the array");
console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[2]);

//3. Add additional values to the existing array at the end. 
console.log("3. Add additional values to the existing array at the end.");
fruits.push("Grapes");
console.log(fruits);

//4. Delete existing values from the array at the end. 
console.log("4. Delete existing values from the array at the end.");
fruits.pop();
console.log(fruits);

//5. Add additional values to the existing array at the begining. 
console.log("5. Add additional values to the existing array at the begining.");
fruits.unshift("Grapes");
console.log(fruits);

//6. Delete existing values from the array at the begining. 
console.log("6. Delete existing values from the array at the begining.");
fruits.shift();
console.log(fruits);

//7.Adding and removing values to the array in the middle 
//Syntax: array.splice(index, numberOfElementsToRemove, elementsToAdd...);
console.log("7.Adding and removing values to the array in the middle");
fruits.splice(1,2,"Grapes","Papaya");
console.log(fruits);

//8.Find the index of a specific value within the array. 
console.log("8.Find the index of a specific value within the array. ");
console.log(fruits.indexOf("Mango")); //-1 Refers to the value does not exist within the array. 
console.log(fruits.indexOf("Orange"));

//9.Create a new array by extracting part of the values from the existing array. 
console.log("9.Create a new array by extracting part of the values from the existing array. ");
console.log(fruits.slice(1,3)); //slice(startIndex, endIndex+1)

//10. Merge two different arrays and generate a new array. 
console.log("10. Merge two different arrays and generate a new array. ");
let veggies:string[] = ["onion","beans","tomato"];
let fruitsAndveggies :string[] = fruits.concat(veggies);
console.log(fruitsAndveggies);

//11. Iterate values from the array. 
console.log("11. Iterate values from the array.");
for(let fruit of fruits){
    console.log(fruit);
}

//12. Reverse the values stored inside the array. 
console.log("12. Reverse the values stored inside the array.");
console.log(fruits);
fruits.reverse();
console.log(fruits);

//13. Sort the values stored inside the array. 
console.log("13. Sort the values stored inside the array.");
console.log(prices);
let sortedValues = prices.sort((a,b)=> b-a);
console.log(sortedValues);