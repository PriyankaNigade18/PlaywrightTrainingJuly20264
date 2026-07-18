/*

Variable:
==============
Variable is name of storage location where we can store data

Variable Syntax:
================
In modern Js we use let(mutable)and const(Immutable) keywordto declare any function expression and variable

keyword(let/const) variableName=value;
let x=100;
let name="Priyanka";

DataTypes
=================
Datatypes define what type of data you store into variable
-JS is dynamically type language means while declaring any variable
you dont need to specify type of variable

Js Support two types of Data types
-----------------------------------
1.Primitive type(primary data types : which stores some value)
=======================
    1.number
    2.string
    3.boolean
    4.undefined
    5.null
    After ES6 added datatypes
    6.BigInt(NA for automation)
    7.Symbol(NA dor automation)

2.Non-primitive types(which store object reference /Object)
======================
In Js everything is Just Object
All the Objects comes under Non primitive
-array []
-Object {}


typeof operator
====================
used to understand what type of data we store into variable

*/

console.log("-----Number types------");
/*
In Js all the numbers +ve int/ -ve int ,decimal digit 45.78
*/

let num1=100;
console.log("This is number1: "+num1);//This is number1: 100
console.log(typeof num1);//number



let num2=-90;
console.log("This is number2:",num2);//This is number2: -90
console.log(typeof num2);//number



let num3=89.67;
console.log(num3);//89.67
console.log(typeof num3);//number

console.log("------String types-------");
/*
String is collection of characters
String is Object and primitive data type

Ways to declare String
-------------------------
1.single quoat 'hello'
2.double quoat "hello"
ES6
3.template string `hello` backtick

*/



let fname="Priyanka";
console.log(fname);//Priyanka
console.log(typeof fname);//string

let prof='SDET Trainer';

let profile="My current profile is: "+prof;
console.log(profile);//SDET
console.log(typeof profile);//string

let email=`piyu18181@gmail.com`;
console.log(email);//piyu1818@gmail.com
console.log(typeof email);//string



const info=`My name is Priyanka, I have over 15 years experience in testing
I completed matsers in Computers and ISTQB certification and currently working
as Freelance trainer`;
console.log(info);
console.log(typeof info);

let yr=2026;

let requestPayload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": ${yr},
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`;
console.log(requestPayload);
console.log(typeof requestPayload);//string

console.log("------boolean types-------");
/*
true/false boolean values
*/

let isActive=true;
console.log("current status is: ",isActive);
console.log(typeof isActive);//boolean

let isEmployee=false;
console.log(isEmployee);//false
console.log(typeof isEmployee);//boolean

console.log("------undefined types-------");
/*
If any variable declare without any value(variable declare without initialization)
then value of variable is undefined and typeof variable also undefined
*/

let dateOfBirth;
console.log(dateOfBirth);//undefined
console.log(typeof dateOfBirth);//undefined

console.log("------null types-------");
/*
null means unknown data
- For null variable data type will be Object & this
is introduced as Bug in Js languages

*/
let policyMaturityDate=null;
console.log(policyMaturityDate);//null
console.log(typeof policyMaturityDate);//object

console.log("------------------------");
//Js is dynamically type
let data="Jay";
data=100;
data=true;

console.log(data);//true
console.log(typeof data);//boolean

console.log("-----------------");
//ES6
//BigInt: write int number with n suffix 
console.log("Max number is: "+Number.MAX_VALUE);//1.7976931348623157e+308

let num4=17976931348623157308;
console.log(typeof num4);//number

//A bigint literal must be an integer.:AST
let num5=17976931348623157308n;
console.log(typeof num5);//bigint

console.log("--------------------");
//Symbol type
/*
Symbol type is used to store unique properties for object.
*/

/*
Object 
==========
-Any real world entity which has state and functionality is called Object
-Every object is Instance of Class
- In Js Everything dynamic object
- In Js Object is defined with {}
-In Js Object is key and value pair info

Ways
=======
1.Using literal way
2.Using class level
ES6
3.Using constructor function
4.Using prototypebase Object interface


*/

let x={};
console.log(x);//{}
console.log(typeof x);//object


let user={
      id:1010,
      name:"Jay"
        }

    console.log(user);//{ id: 1010, name: 'Jay' }
    console.log(typeof user);//object
  /*
  To retrieve values of object
  ----------------------------------
  1. dot notation
  Objectname.key

  2. bracket notation
    ObjectName["key"]
  */  
  
console.log(user.id);//1010
console.log(user["name"]);//Jay

console.log(user);

//externally new property
user.city="Pune";

console.log(user);

//delete any property
delete user.city;
console.log(user);

//Symbol type(automation it is not applicable)
/*
Symbol type is used to store unique properties for object.
*/
//Returns a new unique Symbol value.
let profile1=Symbol("QA");
console.log(profile1);
console.log(typeof profile1);//symbol


let profile2=Symbol("QA");
console.log(profile2);
console.log(typeof profile2);//symbol

//to test equality we use in Js strict equality ===


console.log(100 === 100);//true

console.log(profile1 === profile2);//false

let product={
  name:"iphone",
  price:800000
}

console.log(product);
console.log(typeof product);//object

//create unique property is pid
let id=Symbol('pid');

//attached this symbol property to product object
product[id]=1234;
console.log(product);

product.id=899;
console.log(product);

//delete symbol property
delete product[id];
console.log(product);//{ name: 'iphone', price: 800000, id: 899 }

























































