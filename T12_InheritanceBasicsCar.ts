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


export class Car
{

    price():void
    {

        console.log("Car.....1L");
        
    }
    start():void
    {
        console.log("Car.....strat()");
        
    }

     refule():void
    {
        console.log("Car.....refule()");
        
    }


     stop():void
    {
        console.log("Car.....stop()");
        
    }
}






