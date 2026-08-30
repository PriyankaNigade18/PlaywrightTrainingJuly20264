/*
What is Destructuring?
----------------------
It is a clean way to extract data/values from Array or from Oject and 
assign it to variable

Automation
---------------
1.to design test case in Pw we use destructuring of PW object
2. for window / tab automation Promise.all()==>destructuring
*/

//array destructuring we use []
let arr=[10,20,30,40];
console.log(arr);//[10,20,30,40]
console.log(arr[2]);//30

//destructuring
let [firstEle]=arr;
console.log(firstEle);//10

let[n1,n2,n3]=arr;
console.log(n1);//10
console.log(n2);//20
console.log(n3);//30

//can i have one variable which store all the elements of array
let [...pop]=arr;
console.log(pop);//[ 10, 20, 30, 40 ]

console.log("----Object------");
/*
For Object variable name should be same as Object key name
*/


let user={
    id:101,
    fname:"Sarang",
    age:20,
    address:'Pune',
    profile:"QA",
    phno:80909090,
    postalcode:411047
}

console.log(user);

//For desructuring with object we use {}
let {fname,address,profile}=user;
console.log(fname,address,profile);
console.log("Hello "+fname);


//function
function placeOrder({fname,address,phno,postalcode})
{
console.log("Hello "+fname+" your order placed and you will received on given address: "+address);

}

//call
//placeOrder(user);