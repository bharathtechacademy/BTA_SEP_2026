//Normal Function

//name of the function: calculate
//input parameter : x
//input parameter datatype : number
//return data type : number


function calculate(x:number):number{
    return x * x;
}

//calling the normal function
console.log(calculate(5)); // Output: 25


//Function as a parameter to another function 

//name of the function: calculator
//input parameter : a
//input parameter datatype : function
//return data type : number
function calculator( a : (b:number)=> number) :void { //I am expecting a function that should take an input parameter as a number and should return an output that is also a number. That kind of function I am expecting as a parameter. 
    console.log(a(2));
}

//Calling the function which has a function as a parameter 
calculator(
    function(a:number):number{
        return a*a*a;
    }
)