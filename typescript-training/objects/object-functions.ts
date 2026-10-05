//Object => An object is a non-primitive data type. It can store a collection of key-value pairs together. 

//1. Storing data inside the object 
console.log("1. Storing data inside the object ");
interface empInfo {
    "empName": string,
    "empId": number,
    "visaStatus"?: boolean,
    "salary"?:number,
    "address": {
        "city": string,
        "state": string,
        "country": string
    }
}

//Object
let empData: empInfo = {
    "empName": "Bharath Reddy",
    "empId": 1234,
    "visaStatus": true,
    "address": {
        "city": "Kadapa",
        "state": "Andrapradesh",
        "country": "India"
    }
};
console.log(empData);

//2. Accessing data from the object
console.log("2. Accessing data from the object");
console.log(empData.empName);
console.log(empData.address.city);

console.log(empData["empName"]);
console.log(empData["address"]["city"]);

//3.Adding additional properties to the existing object 
console.log("3.Adding additional properties to the existing object ");
empData.salary = 200000;
console.log(empData);

//4.Update the existing property within the object. 
console.log("4.Update the existing property within the object. ");
empData.empId =1235;//Updating 1234 to 1235;
empData.address.city = "YSR KADAPA"; 
console.log(empData);

//5. Delete the existing property from the object. 
console.log("Delete the existing property from the object. ");
delete empData.visaStatus;
console.log(empData);

//6. Check if the property exists inside the object. 
console.log("6. Check if the property exists inside the object. ");
console.log("empId" in empData);
console.log("visStatus" in empData);
console.log("city" in empData.address);

//7. Get all the keys from the object. 
console.log("7. Get all the keys from the object. ");
console.log(Object.keys(empData));
console.log(Object.keys(empData.address));

//8. Get all the values from the object. 
console.log("8. Get all the values from the object. ");
console.log(Object.values(empData));
console.log(Object.values(empData.address));

//9. Get all the entries from the object. 
console.log("9. Get all the entries from the object. ");
console.log(Object.entries(empData));
console.log(Object.entries(empData.address));

//10. Iterate all the values of an object by using `for in` loop
console.log("Iterate all the values of an object by using `for in` loop");
for(let key in empData){
    console.log(key);
    console.log(empData[key as keyof empInfo]);
}

//11. Verify the data type of a specific property within the object. 
console.log("11. Verify the data type of a specific property within the object.");
console.log(typeof empData.empName);
console.log(typeof empData.address);

//12. Merging two objects together and combining them as another object 
console.log("12. Merging two objects together and combining them as another object ");

interface projectInfo{
    "projectName":string,
    "teamSize":number
}

let empProj : projectInfo = {
    "projectName":"Creatio",
    "teamSize":20
}

let mergedObject = {...empData , ...empProj};
console.log(mergedObject);