/*
Functions
===================
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.2.Arrow function(short hand function)

*/

console.log("----Anonymous function without parameter-----");

let test1=function()
{
console.log("Anonymous function is calling.....");

}

test1();
console.log(typeof test1);//function
//return name of the function
console.log(test1.name);//test1

console.log("----Anonymous function with parameter-----");

/**
 * 
 * @param {number} id 
 * @param {string} name 
 */
let test2=function(id,name)//2 parameters
{
console.log("Hello "+name+" your id is: "+id);
}

test2(101,"Kiran");

console.log("----Anonymous function with parameter and return keyword-----");


let test3=function (msg)
{
    return msg;
}

console.log(test3("Hi..."));

let result=test3("hello all");
console.log(result);
