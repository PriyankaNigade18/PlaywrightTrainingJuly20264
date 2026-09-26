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

- Interface is special clas where we can have by default all the methods are public & abstract 
- Interface object is not possible
- Interface method implemented by its child class
- Interface help to achieve multiple inheritance & hybrid inheritance

In Typescript we can use interface at two levels
------------------------------------
1.Object level interface/prototype based interface
2.Class level interface

type alise vs interface
------------------------------
*/


//class level


interface WHO
{
    covid19Test():void;
}
interface IMA extends WHO
{
    cardio():void;
    dental():void;
    
}

interface USMA extends WHO
{
    physio():void;
    nero():void
}

class NobleHs implements IMA,USMA
{
    covid19Test(): void {
        console.log("NobleHs......Covid19TestService()");
    }
    physio(): void {
        console.log("NobleHs.......PhysioService()");
    }
    nero(): void {
         console.log("NobleHs.......NeroService()");
    }
    cardio(): void {
        console.log("NobleHs.......cardioService()");
        
    }
    dental(): void {
         console.log("NobleHs.......dentalService()");
    }

    getcustomersDetails()
    {
        console.log("NobleHs.....customerDetails()");
        
    }
}

//Object
//child class ref and child class object

let n1:NobleHs=new NobleHs();
n1.getcustomersDetails();//individual
n1.cardio();//abstract inherited method
n1.dental();//abstract inherited method
n1.nero();//abstract inherited method
n1.physio();//abstract inherited method
n1.covid19Test();


console.log("---------------------");

//Parent ref and child object

let i1:IMA=new NobleHs();
i1.cardio();
i1.dental();
i1.covid19Test();