/*

Ways
============
1.Using object literal
2.Using Class level (ES6)
3.Using constructor function(ES6)
4.Prototype based(Object interface)


*/

console.log("---------Object Literal--------");

let user={
    id:1010,
    name:"Pooja"
}

console.log(user);
console.log(typeof user);//object

console.log("---------Class Level Object --------");

class Product
{
    pid;
    pname;
    price;

    constructor(pid,pname,price)
    {
        this.pid=pid;
        this.pname=pname;
        this.price=price;
    }

    getData()
    {
       console.log("ProductId: "+this.pid+"\nProductName is: "+this.pname+"\nPrice is: "+this.price);
        
    }
}

//create object
let p1=new Product(111,"Macbook Pro",999999);
p1.getData();

console.log("---------Constructor function(ES6) --------");

/*
constructor function  
=====================
- Is used to create and initialize object
- It always declare with function keyword and starts with capital letter

*/
function Employee(eid,ename,eaddress)
{
    this.eid=eid;
    this.ename=ename;
    this.eaddress=eaddress;

    //modern syntax method
    this.getData=()=>
    {
        console.log(this.eid+" : "+this.ename+" : "+this.eaddress);
        
    }

}


//create object
let emp1=new Employee(2020,"Sarang","Pune");
emp1.getData();//2020 : Sarang : Pune

let emp2=new Employee(3030);
emp2.getData();//3030 : undefined : undefined


console.log("-----Prototype Based Object-------");
/*
Object will create based on given structure

Object.create(object prototype)
*/
//prototype of literal object

let student={
    id:222,
    sname:"Amit",
    suject:"Testing",
    score:89
}


//to create object for same student prototype 
//create():Creates an object that has the specified prototype or that has null prototype.
let s1=Object.create(student);
console.log(s1); //{}
console.log(typeof s1);

console.log(s1.id);
console.log(s1.sname);
console.log(s1.subject);
console.log(s1.score);















