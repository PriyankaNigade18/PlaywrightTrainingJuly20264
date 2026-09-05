/*
Inheritance
----------------
- Acquaring properties of one class into ather class is Inheritance

Purpose
--------
- To avoid code duplication
- For Reusability of method
- To achieve Run time polymorphism

Example
----------
Parent and child relation


How to implement
-----------------
We can define relataion between the classes is called (IS-A) relation using extends keyword

Note
----------
- Every parent class can access only parent property
- Every child class can access parent + child property

Types
===========
1. single level Inheritance
2. multi level Inheritance
3. Hierarchical Inheritance


Not implemented by Js but we can implement using typescript
------------------------------------------
4. Multiple Inheritance
5. Hybrid(Dimond problem)Inheritance


*/

class A
{
    m1()
    {
        console.log("M1() is calling....");
        
    }
}



class B extends A//here A is parent class and B is child class: Single level Inheritance
{
    m2()
    {
        console.log("M2() is calling....");
        
    }
}


class C extends B// here B is parent and C is child: Multi level Inheritance
{
    m3()
    {
        console.log("M3() is calling....");
        
    }
}


class D extends A//Heirarchical inheritance
{
    m4()
    {
        console.log("M4() is calling....");
        
    }
}

//Object creation
console.log("Parent class Object: Parent class properties");
let a1=new A();
a1.m1();//individual method


console.log("---------------");

console.log("Child class Object:Parent and child properties");
let b1=new B();
b1.m1();//inherited method
b1.m2();//individual method


console.log("-----------------");
//object of C
let c1=new C();
c1.m1();//inherited
c1.m2();//inherited
c1.m3();//individual


console.log("-----------");
let d1=new D();
d1.m1();//inherited
d1.m4();//individual


