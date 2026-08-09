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


Declaration Ways
==================
1.Array literal
2.Array constructor
3.Array.of()....added in Es6 version


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


console.log("----------Array literal-------------");
let id=[10,20,30,40,50,60];
console.log(id);//[ 10, 20, 30, 40, 50, 60 ]
console.log("total ids: "+id.length);//6
console.log(id[4]);//50

console.log("----------Array constructor-------------");
/*
Constructor
==============
-This is special function which is responsible to initialize object
- Constructor will get called at the time object creation
- call Array() with new keyword
- new keyword is used to create Object

Array()
*/

let arr=new Array(10,20,30,40,50);
console.log("Total elements: "+arr.length);//5
console.log(arr);//[ 10, 20, 30, 40, 50 ]
console.log(arr[3]);//40
console.log("---------------");

/*
In Array() if we provide 1 element then this will consider as length
*/
let arr1=new Array(5);//length
console.log("Total elements: "+arr1.length);//5
console.log(arr1);//[ <5 empty items> ]

let arr2=new Array('Pune');
console.log("Total locations: "+arr2.length);
console.log(arr2);

console.log("----------Array.of()-------------");

let arr3=Array.of(100,200,300,400);
console.log(arr3);
console.log("Total Elements are: "+arr3.length);
console.log(arr3[2]);//300
console.log(arr3[5]);//undefined












