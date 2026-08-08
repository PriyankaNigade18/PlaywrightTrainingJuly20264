/*
Array
==============
- Array is dynamic data structure in Js
- Collection of records/data/information
-It is nonprimitive

Types
=========
1.single dimensional(1D)
2.Multi Dimensional(2D)

Iteration
==============
1.Using simple for loop
2.Using for...of loop


Array/Object
==============
1.for...of loop
-----------------------
- for...of loop is applicable for array/string
- this loop iterates over values

2.for...in loop
---------------------
- for...in loop applicable for Object
- this loop iterates over keys or indexes


*/


//array literal
let arr=[];
console.log(arr);//[]
console.log(typeof arr);//object



console.log("-----single D array-----");

let id=[101,102,103,104,105];

console.log("Total size of array: "+id.length);//5


//how to read single record from array: arrayVariableName[index]
console.log(id[3]);//104

//for wrong index
console.log(id[9]);//undefined

console.log(id);


console.log(id[-1]);//undefined

console.log("--------------------");


let location=["Pune","Mumbai","Delhi"];
console.log(location);//[ 'Pune', 'Mumbai', 'Delhi' ]
console.log("total locations: "+location.length);//3
console.log(location[2]);//Delhi
console.log(location[3]);//undefined

console.log("--------------------");
//mixed type of array

let empData=["Sarang","Pune",'M',26,7899878979,89.77];
//            0         1     2   3   4         5

console.log(empData);//[ 'Sarang', 'Pune', 'M', 26, 7899878979, 89.77 ]
console.log("Total record: "+empData.length);//6
console.log(empData[4]);//7899878979

console.log("---------Multi Dimensional Array--------");


let userData=[
    ["Admin","admin123"],
    ["Sumit","sumit123"],
    ["Kiran","kiran123"],
    ["Shital","shital123"]
]

console.log(userData);

console.log("Number of rows: "+userData.length);//4
console.log("Number of columns: "+userData[0].length);//2

//single entry[][]
console.log(userData[2][0]);//Kiran
console.log(userData[3][1]);//shital123

console.log(userData[2][2]);//undefined





























