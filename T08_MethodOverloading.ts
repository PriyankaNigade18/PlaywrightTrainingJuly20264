/*
Method Overloading/Function Overloading
------------------------------------------
Method can be overloaded only when method is declare with same name in same class multiple number of 
time with different signature

what is different signature
--------------------------
1.Number of parameters
2.Change order of parameters
3.Change type of parameter

Method Overloding/function overloading not supported in Js and Ts

Solution
--------------
We can partially achieve this using prototype of function
*/

class Test 
{

    login()
    {
        console.log("Login with default data!");
        
    }

    
    //Duplicate function implementation.
    // login(un:string,psw:string)
    // {
    //     console.log("Login with default data!");
        
    // }

}

function testLogin()
{

}

//Duplicate function implementation.
// function testLogin()
// {
    
// }

console.log("---------------");

//prototype(structure)
function calculation(num1:number,num2:number):number;
function calculation(num1:string,num2:number):string;
function calculation(num1:number,num2:string):string;
function calculation(num1:boolean,num2:string):string;
function calculation(num1:string,num2:string):string;


function calculation(num1:any,num2:any):any
{
 return num1+num2;
}

//call
console.log(calculation(100,100));
console.log(calculation("Hi","hello"));
console.log(calculation("Hello",80));
console.log(calculation(90,"Hi"));
console.log(calculation(true,"hello"));
//calculation(true,false);









