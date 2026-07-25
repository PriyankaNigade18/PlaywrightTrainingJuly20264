/*
-JavaScript moves variable declarations to the top of their scope (hoisting)
-Only declarations are hoisted, not initializations
-Hoisting is the behavior where you can able to access variable before even declaring it.
- hoisting is fully applicable for var type and function declaration

let and const
---------------------
Before initialization let keyword and cost keyword variables are part of TDZ
Temporal dead zone area



*/

test1();
test2();//TDZ//ReferenceError: Cannot access 'test2' before initialization
console.log(id);//undefined

var id=100;

console.log(id);//100


//let and const

//console.log(fname);TDZ//ReferenceError: Cannot access 'fname' before initialization

let fname="Kiran";
console.log(fname);


//console.log(toolName);//TDZ: ReferenceError: Cannot access 'toolName' before initialization

const toolName="Playwright";

console.log("----function----");

function test1()
{
    console.log("declaration calling....");
    
}

let test2=function()
{
    console.log("Anonymous function");
    
}