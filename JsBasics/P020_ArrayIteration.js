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

let id=[10,20,30,40,50,60];
console.log(id);

console.log("------simple for loop------");
for(let i=0;i<id.length;i++)
{
    console.log(id[i]);
    
}

console.log("------for...of loop------");

//Iterates over values
for(let i of id)
{
    console.log(i);
    
}

console.log("------for...in loop------");
//Iterates over index/keys

for(let i in id)
{
    console.log(i);
    
}

console.log("-------------");

for(let i in id)
{
    console.log("at index: "+i+" value is: "+id[i]);
    
}

console.log("-----------------");
//sum of elements of array

let arr=[1,2,3,4,5];

let sum=0;
for(let i of arr)
{
sum=sum+i;
}

console.log(sum);



console.log("--------------------");

let arr1=[
    [100,200,300],
    [400,500,600]];

   for(let i of arr1)
    {
        console.log(i);
        
    } 














