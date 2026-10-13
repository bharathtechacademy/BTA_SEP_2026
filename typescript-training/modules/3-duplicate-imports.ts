import {PI, sumOfNumbers} from '../modules/1-named-exports.ts';
import {PI as pi, sumOfNumbers as sum , multiplyNumbers} from '../modules/2-export-all.ts';//Adding alias names, we can solve the problem. 

console.log(PI);
console.log(sumOfNumbers(1,2));
console.log(multiplyNumbers(1,2));
console.log(pi);
console.log(sum(1,2));