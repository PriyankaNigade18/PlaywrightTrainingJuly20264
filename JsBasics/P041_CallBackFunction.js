
/*

CallBack function/Higher order function
----------------------------------------
If any function itself passed as parameter to other function then it is called Call back function

*/


function greetName(name)
{
console.log("Hello  "+name);

}


//business logic
function greet(name,callbackfun)//here callbackfun this is parameter where we are passing function
{
callbackfun(name);
}


//call
greet("Sujit",greetName);//here greetName() is call back function


console.log("---------------");


function add(num1,num2)
{
    console.log("Addition is: "+(num1+num2));
    
}



function sub(num1,num2)
{
    console.log("Subtraction is: "+(num1-num2));
    
}


function mul(num1,num2)
{
    console.log("Multiplication is: "+(num1*num2));
    
}


function div(num1,num2)
{
    console.log("Division is: "+(num1/num2));
    
}

function calculation(num1,num2,callback)
{
    callback(num1,num2);

}


calculation(100,20,div);
calculation(200,34,sub);
calculation(300,200,add);
calculation(300,24,mul);

console.log("---------");

let arr=[10,20,30,40];

//just iterate and print elements
//forEach()
arr.forEach((num)=>{
console.log(num);

})

//map(),filter(),reduce()
//destructuring in Js--->Pw
//share data/object from one file to file
//OOP- Encapsulation/polymorphism/Inheritance
//Asynchronous programming
//await,async,promise
//TypesScript




