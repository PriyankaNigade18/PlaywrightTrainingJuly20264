/*
Object
=============
-It is real world entity which has state and Behavior that is Object
-Object is instance of a class
- In Javascript everything represented as dynamic object
- In Js Object is all about key: value pair data

Ways
============
1.Using object literal
2.Using Class level (ES6)
3.Using cionstructor function(ES6)
4.Prototype based(Object interface)

*/
console.log("--------Literal Object--------");

//Js object keys are by default string type
let user={};
console.log(user);//{}
console.log(typeof user);//object

let person={
    id:1010,
    fname:"Jay",
    address:"Pune"
}
console.log(person);//{ id: 1010, name: 'Jay', address: 'Pune' }
console.log(typeof person);//object
//Operations: read/insert/update/delete

/*
To read any property/key value from object
----------------------------------------------
1. dot notation
----------------------
objectName.key

2.square bracket notation
-------------------------
objectName["key"]
*/

console.log(person.id);//1010
console.log(person.address);//Pune

console.log(person['fname']);//Jay

//insert the new property into existing object
person.phno=8908809809;
console.log(person);

//modify existing property from object
person.id=2020;
console.log(person);

//delete any property from object
delete person.address;
console.log(person);

