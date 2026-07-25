/*
Variable:
---------------
It is name of storage location where we can store data

Syntax:
=============
keyword(let/const) variableName=value;

let x=100;
let name="Jay";

In Js to declare variable  we use 3 keywords
---------------------------------------------
1.var(older & not recommended)
----------------------
- Scope: Global + functional
- Var is fully Hoisted
- Var redeclaration and reassignment is allowed


2.let (modern)
----------------------
- Scope: Global + Block 
- For Mutable data
- Redeclaration is not allowed
- Reassignment is allowed
-let is also hoisted but due TDZ(temporal dead zone) if you access varibale
before declaration then you will get reference error


3.const(modern) : (like final keyword in Java)
------------------------
- Scope: Global + Block 
- For Immutable data
- Redeclaration is not allowed
- Reassignment is not allowed
-const is also hoisted but due TDZ(temporal dead zone) if you access varibale
before declaration then you will get reference error

Scope:
=============
1.Global scope:
----------------
variable declare inside js file and outside function or block is called globalscope
-global scope data anywhere in file we can call


2.Functional scope/local
-----------------------
Variable declared inside the function then you can access it withing function that is functional scope

3.Block scope(let and const)
-------------------------
Variable declared inside if() block,for() block ,while()block called block scope


*/

console.log("---------Global scope--------------");

var fname="Hiteshi";
let email="hiteshi@gmail.com";
const location="US";

console.log("first name is: ",fname);
console.log("Email id is: ",email);
console.log("Location is: ",location);

console.log("---Global data from function-----");

function show()
{
console.log("first name is: ",fname);
console.log("Email id is: ",email);
console.log("Location is: ",location);
}

//call
show();

console.log("-----Functional scope--------");

function test1()
{
    var browserName="Chrome";//local
    console.log("browser name is: ",browserName);

    let browserVersion=150;//block 
    const browserVendor="Google";//block
    console.log("browser version: "+browserVersion);
    console.log("browser vendor name: "+browserVendor);
    
}

//call
test1();

console.log("-----functional scope data calling outside the function");

 //console.log("browser name is: ",browserName);//ReferenceError: browserName is not defined

 //console.log("browser version: "+browserVersion);//ReferenceError: browserVersion is not defined
//console.log("browser vendor name: "+browserVendor);//ReferenceError: browserVendor is not defined
    
//After ES6 : Block scope let and const is allowed

//if block
if(true)
{
    let toolVersion=1.59;
    const toolName="Playwright";

    console.log("Tool version is: "+toolVersion);
    console.log("Tool name is: "+toolName);
    
}

//outside
   //console.log("Tool version is: "+toolVersion);//ReferenceError: toolVersion is not defined
   // console.log("Tool name is: "+toolName);//ReferenceError: toolName is not defined

console.log("----------------------------");

var a=10;
console.log(a);//10

function test2()
{
    var a=20;
    console.log(a);//20

    if(true)
    {   
        var a=30;//declare inside function as block scope is not applicable for var
        console.log("if..."+a);//30
        
    }
    console.log("Value of a "+a);//30
    
    
}


test2();

console.log("-----------------");


//let and const

let b=10;
console.log(b);//10

function test3()
{
    //let b=20;
    //console.log(b);//20

    if(true)
    {
        let b=30;
        console.log("if: "+b);//30
        
    }

    console.log("function: "+b);//20
    
}


test3();















