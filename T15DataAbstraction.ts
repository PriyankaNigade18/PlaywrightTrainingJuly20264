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


*/


abstract class Page
{

    //implemented method:Method with body
    pageLoad():void
    {
        console.log("Page is loading in 2sec...");
        
    }

    //nonImplemented method/abstract method: method without body
    abstract getTitle():void;



}

//for abstract class we can not create object
//Cannot create an instance of an abstract class.
//let p1:Page=new Page();

//to call and implement abstract method we need child class of abstract class

class LoginPage extends Page
{

     override getTitle(): void {
        console.log("Get the title of Application.....Implemented by child");
        
    }

    gotoLoginPage()
    {
        console.log("This will open Login page first...");
        
    }

}

//Object
//scenario1: child class ref and child class object: parent +child
let l1:LoginPage=new LoginPage();
l1.pageLoad();//inherited method
l1.gotoLoginPage();//individual method
l1.getTitle();//inherited abstract method

console.log("-------");
//Scenario2: parent class ref and child class object(Parent class)
let p1:Page=new LoginPage();
p1.pageLoad();//individual
p1.getTitle();//override method

