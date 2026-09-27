/*
Data Abstraction
================
It is process of hiding implementation details of software from end user.


What is purpose?
---------------------
- Information hiding


Example
----------
ATM
Google Map

Abstraction achive using
------------------------------
1.Abstarct class(partial abstarction)
2.Interface(100% abstraction)

1.Abstarct class
===============
1.In abstract class we can have both abstract method and non abstract (concreate) Methods.
2.Abstract method and class we can declare using abstract keyword.
3.Abstract class can not be instantiated.
4.Abstract methods must be overriden by class which inherits abstract class.
meaning is every abstract method should be implemented through child class 
5.Using Abstract class partial abstraction is possible.
nheritance use extends keyword and Interface use implements keyword.


Interface
==============

- Interface is special class where we can have by default all the methods are public & abstract 
- Interface object is not possible
- Interface method implemented by its child class
- Interface help to achieve multiple inheritance & hybrid inheritance

In Typescript we can use interface at two levels
------------------------------------
1.Object level interface/prototype based interface
2.Class level interface

type alise vs interface
------------------------------
- type alises can have only key types
- interface can have keys and method types as well 

*/

//declaring for person object datatype
type person={
    id:number,
    name:string,
    profile:string,

   }

//object
let person1:person={
id:101,
name:"Parag",
profile:"QA"
}

console.log(person1);

console.log("-------------------");


//Interface base on object literal
interface product{
    //data
    pid:number,
    prodName:string,
    price:number,
    //methods
    getData():void
}

let product1:product={

    pid:111,
    prodName:"Iphone",
    price:800000,
    getData() {
         console.log("Data from Product1.....");
    }
}

let product2:product={

    pid:222,
    prodName:"Laptop",
    price:700000,
    getData() {
        console.log("Data from Product2.....");
        
    }
}

console.log(product1);
console.log(product1.pid);

//method
product1.getData();
console.log("------");

console.log(product2);




