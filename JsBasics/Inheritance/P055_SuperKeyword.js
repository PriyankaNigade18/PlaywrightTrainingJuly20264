
/*
Super Keyword
=================
In Js to call any property from Immediate parent class we use super keyword
-we can call variable,method,constructor

Rule
----------
-When Classes are in relation then use Super() to call parent class constructor in child class.
-constcrutor call should be first line of child constructor


*/


class Parent
{
    pid=1010;

    constructor()
    {
        console.log("Parent class constructor");
        
    }
    getParentIncome()
    {
        console.log("Parent income is $17000");
        
    }

    //public method
    getPid()
    {
        return this.pid;
    }

}

class Child extends Parent
{
    cid=2020;

    constructor()
    {
        super();//by default call parent class constructor
        console.log("Child class constructor");
        
    }

    getchildIncome()
    {
        //console.log("Parent id: "+super.pid);
        
        //method
        console.log("Parent Id: "+super.getPid());
        super.getParentIncome();
        console.log('child id: '+this.cid);
        
        console.log("Child income is $70000");
        
    }
}



//object
let c1=new Child();
// console.log(c1.pid);
// console.log(c1.cid);
// c1.getParentIncome();
c1.getchildIncome();

