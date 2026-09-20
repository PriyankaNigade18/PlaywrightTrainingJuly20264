/*
In Js Object is key:value
1. Object literal
2. Class level
*/


//Js
let user={
    name:"Jay",
    id:1010,
    city:'Pune',
    profile:"QA"
}
console.log(user);
console.log(typeof user);//object


let newUser:{id:number,fname:string,address:string}={
id:111,
fname:"Ketan",
address:"Pune"
}

console.log(newUser);//{ id: 111, fname: 'Ketan', address: 'Pune' }

//modify new property
newUser.address="Mumbai";
console.log(newUser);//{ id: 111, fname: 'Ketan', address: 'Mumbai' }

newUser.id=222;
console.log(newUser);//{ id: 222, fname: 'Ketan', address: 'Mumbai' }


console.log("---------------------------------");

/*
readonly
--------
readonly prevents a property or array element
from being reassigned after initialization.

const
------------
const protects the variable/reference.

readonly protects the property or element.
*/

let updatedUser:{readonly id:number,fname:string,address:string}={
id:111,
fname:"Ketan",
address:"Pune"
}

//here id assigned with value only at the time of object creation but now you cant reassign

//updatedUser.id=888;//Cannot assign to 'id' because it is a read-only property.

//Example2
let appData:{readonly baseUrl:string,readonly browser:string}={

    baseUrl:"https://www.google.com",
    browser:"chrome"
}

console.log(appData);

console.log("--------------");


