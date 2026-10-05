//Jumping statements : Jumping statements are nothing but a set of keywords used inside the loop to skip the iterations. 

//In loops, Mainly, we are going to use two different types of jumping statements. 

// 1. break => It will be used to break the entire loop. 
// 2. continue => It will skip the current iteration only within the loop, and it will jump to the next iteration without continuing the execution. 


for (let i:number = 1; i<=10 ; i++){

    if(i==5){
        //break; //break the entire loop
        continue; //Will skip the current iteration and jump to the next one. 
    }

    console.log(i);
}