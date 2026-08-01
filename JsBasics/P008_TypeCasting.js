
/*
Type Casting
-----------------
One type of data we can convert into other type is called type casting
- Only for string,number and boolean it is applicable


1.Implicit Casting/Type Coercion
--------------------------------------
Type coercion means automation convertion for data 
-This is responsibility of Js Engine which will convert 
compatible data from one type to another type

2.Explicit casting
-------------------------
This is manual conversion here manually with constructors we convert
one type of data into type 
1.Number() constructor
2.String() constructor
3.Boolean() constructor

Constuctor
=============
It is special method which help to initialize object
-It is used inside the Class
- We can call it at the time object creation

Boolean Conversion
=========================
truthy vs falsy values
------------------------
truthy
==========
Any true value in boolean context is called truthy value

example:
any non empty string,non zero number....etc

falsy
--------------
Any false value in boolean context is called falsy value
-5 falsy values are available

Example: emptyString "",0,null,undefined,NaN

*/
console.log("-----string conversion------");

/*
If you have expression which includes string,number,boolean data with + operator
then number type and boolean type data automatically converts into string
*/

let a="Hello"+100+true;//here 100 and true will coerced into string Hello100true
console.log(a);// Hello100true
console.log(typeof a);//string


let b=100+25+"200";
console.log(b);//125200
console.log(typeof b);//string

console.log(true+"Bye");//trueBye:true is coerced into string

console.log("200"+100+25+"200");//20010025200: 100 & 25 is conerced into string

console.log(100+"10"+20);//1001020: here 100 and 20 coerced into string

console.log(true+50+"100");//51+"100"=51100: true coerced into number 1+50=51 the 51 coerced into string

console.log("------------number conversion-------------");
/*
If you have expression which includes string,number,boolean data with arithemetic (-,*,/) operator
then string type(compatible)and boolean type data automatically converts into number
*/

//non comaptibility string data
let c="hello"*10;
console.log(c);//NaN as Hello is not a number
console.log(typeof c);//number

//compatible string
let d="100"/10;//here "100" coerced into number 100/10=
console.log(d);//10
console.log(typeof d);//number

let r=90-"30";//here "30" will coerced into number 30 90-30=60
console.log(r);//60
console.log(typeof r);//number

let y="78"-15+100+"56";
console.log(y);//16356
console.log(typeof y);//string

let i=90-"30"+true;//here "30" coerced into number 30,90-30=60+true again true changed its type to number 1=61
console.log(i);//61
console.log(typeof i);//number

console.log("--------Explicit Casting------");

//string(compatible)====>number

let s1="12345";
console.log(typeof s1);//string

//do convert into number: Number()
let stringToNumber=Number(s1);
console.log(stringToNumber);//12345
console.log(typeof stringToNumber);//number

//number===>string/boolean

//number to string
let num=87956;
console.log(typeof num);//number
let numToString=String(num);
console.log(numToString);//87956
console.log(typeof numToString);//string


let s2="hello";
console.log(Number(s2));//NaN



/*
Scenario: 
---------------
validate amount from the bill
amount should be less than 10000
*/

let id=[10,20,30,40,50];
console.log(id);

//single value
console.log(id[2]);//30


let bill="your total amount is 5000";
let data=bill.split(" ")[4];
console.log(data);//5000
console.log(typeof data);//string

//string to number
let amount=Number(data);
console.log(typeof amount);//number

if(amount<10000)
{
console.log("Test Pass...amount is valid");
}
else
{
    console.log("Test Fail....amount is not valid");
    
}


console.log("------Boolean Conversion------");

/*
truthy
==========
Any true value in boolean context is called truthy value

example:
any non empty string,non zero number....etc

falsy
--------------
Any false value in boolean context is called falsy value
-5 falsy values are available

Example: emptyString "",0,null,undefined,NaN
*/

console.log(Boolean("Jay"));//true
console.log(Boolean(190));//true
console.log(Boolean(-89));//true
console.log(Boolean(56.44));//true
console.log(Boolean('T'));//true


console.log("---------------------");
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(false));//false



































