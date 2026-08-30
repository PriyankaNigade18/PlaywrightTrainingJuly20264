/*
What is Encapsulation:
--------------------------
Binding  of data and functions together in single unit is called Encapsulation

What is Purpose
------------------
Data hiding/ security

Examples:
-------------
Capsule,password,ATM 

In Automation
--------------
At the time of page object model design pattern

How to implement it
-----------------------
We can store data as private data and provide access to private data with public methods

In Js private data we can store using #variablename
In Js public method we can design using getters() and setters()

setters(): set the data
getters(): get the data


*/


export class Employee
{

    //public data
    id;
    name;
    //private data
    #salary=90000;

    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }

    getData()
    {
        console.log(this.id);
        console.log(this.name);
        console.log(this.#salary);
                    
    }

    //public methods for private data
    //setter
    setSalary(newSalary)
    {
        this.#salary=newSalary;
    }

    //getter
    getSalary()
    {
        return this.#salary;
    }

}
/*
//object
let e1=new Employee(101,"Jay");
console.log(e1.id);
console.log(e1.name);

e1.getData();
//Property '#salary' is not accessible outside class 'Employee' because it has a private identifier.
//console.log(e1.#salary);

//modify salary
e1.id=201;

e1.getData();
*/