/*

Js Datatype
-----------
Primitive
--------------
1.number
2.string
3.boolean
4.undefined
5.null
6.bigInt
7.symbol


NonPrimitive
----------------------
Any object comes under nonprimitive
-Object
-Array
-String
-Number
-Boolean

TypesScript Datatypes
------------------------
any, unknown, union , void, never


*/

//1.number: status code,timeout
let age:number=25;
let timeout:number=30000;
let statusCode:number=200;

console.log("Age is: "+age);
console.log("AutoWait timeout: ",timeout);
console.log("Api status code: "+statusCode);

//2.boolean: true/false
// test codition/flags

let isUserLoggedIn:boolean=true;
let isActive:boolean=false;
let isPaymentSuccessful:boolean=true;
console.log("Boolean data: "+isUserLoggedIn);
console.log("Boolean data: "+isPaymentSuccessful);
console.log("Boolean data: "+isActive);

//string: URl,name,password,message
let username:string="Admin";
let password:string="admin123";
let baseUrl:string="https://www.google.com";

console.log(`User credentials are: ${username} & ${password}`);
console.log(`Base url is: ${baseUrl}`);

//4.null -intentionally we are adding empty value

let browername=null;
console.log(browername);//null
console.log(typeof browername);//object

//5.undefined- variable declared and value is not assigned then its undefined
let browserVersion;
console.log(browserVersion);//undefined
console.log(typeof browserVersion);//undefined


console.log("------Typescript Data types------");

/*
any:
- TypeScript allows almost anything.
- Type checking is largely disabled.
- Use carefully.

*/
//6. any type: legacy/But for dynamic data use it(API) 
let bookingId:any;
bookingId=1234;
bookingId="abcd";
bookingId="123abc";
bookingId=true;

console.log("Booking id is: "+bookingId);//true

//7.unknown type
/*
unknown:
- Type is not known yet.
- We must validate/narrow the type before using it.
- Safer than any.
it will maintain type safety

Example:
API response/ external data that you dont trust/know yet
*/

let responseData:unknown;

responseData=1234;
responseData="abcd";

console.log(responseData);//abcd

//8.union (|) pipe: in Automation it is usefull

let postalCode:number|string;
postalCode=411047;
postalCode="411047";
//postalCode=true;//Type 'boolean' is not assignable to type 'string | number'.


//vaidate postalCode
function enterPostalCode(code:string|number)
{
console.log("PostalCode is: "+code);

}

//call
enterPostalCode(411014);
enterPostalCode("411047");


/*
Function 
-----------------
void : return type 
When function never return anything we can design that function 
with void return type

*/

//9. void type: applicable for fucntion

function greet():void
{
    console.log("Hello All!");
    
}

//this function does not return any Data

//call
greet();


let title="Google";

function getTitle():string
{
 return title;
}

//call
console.log("Application title is: "+getTitle());


//10.never
/*
never: framework level error-handling
-----------------------------
- never applicable for function
- never we use as function return type and
never means the function will never complete or execute normally

- In Automatio while designing framework if you wanted to
add utilities which returns or throws error then use never

Error is Predefined class in Js/Ts
*/

//scenario: looking for element to identify if element not found it should return error

//utility which returns/throws error

function throwLocatorError(element:string):never
{
//throws some error
throw new Error(`${element} ELEMENT NOT Found!`);
}

//call
//throwLocatorError('Forgot Password Link');
//Error: Forgot Password Link ELEMENT NOT Found!


//11.bigInt: largest integer value we use bigint

// let transactionId:bigint=6588768970988798098n;
// console.log("Transaction id is: "+transactionId);


//12.Symbol:

let data=Symbol("testData");

let user1={
    [data]:{
        username:"Admin",
        role:"SrAdmin"
    }
}

console.log(user1);
console.log(user1[data]);
console.log(user1[data]?.role);
//Automation we never use symbol type



























