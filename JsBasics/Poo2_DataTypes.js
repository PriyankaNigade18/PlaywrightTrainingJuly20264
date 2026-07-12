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
console.log("This is number1: "+num1);
console.log(typeof num1);//number



let num2=-90;
console.log("This is number2:",num2);
console.log(typeof num2);//number



let num3=89.67;
console.log(num3);
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

let prof="SDET Trainer";

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












