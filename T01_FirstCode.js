"use strict";
//single line comment
/*
Multiple line comment
*/
//variable
let id = 101;
console.log(id);
let fname = "Jay";
console.log("First name is: " + fname);
let isActive = true;
console.log("Boolean type: " + isActive);
//function
function add(num1, num2) {
    console.log("Addition is: " + (num1 + num2));
}
//call
add(100, 89);
//add('Hi',100);


let user={
    name:"Jay",
    id:1010,
    city:'Pune',
    profile:"QA"
}
console.log(user);
console.log(typeof user);//object

//insert new property
user.phno=898089;
console.log(user);


console.log("-----------------");


class Product
{
    //global
    pid;
    pname;

    constructor(pid,pname)
    {
        this.pid=pid;
        this.pname=pname;
    }

    getProductData()
    {
        console.log(`Product details are:...\nproduct id is:${this.pid}\nproduct name is:${this.pname} `);
        
    }
}

//object
let p1=new Product(111,'mackbook');
p1.getProductData();









