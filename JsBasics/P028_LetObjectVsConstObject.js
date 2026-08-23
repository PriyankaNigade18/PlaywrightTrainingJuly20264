

/*
In const Object only reference is immutable

In terms of object for let type and const type 
we can perform all operations(insert/modify/delete)
But while changing object reference for let which is mutable so allowed
but in case of const object as it is immutable so object reference we can not modify

Variable
=============
let
--------------
-mutable data
- redeclaration is not allowed
- reassignment allowed

const
----------------
immutable data
- redeclaration and reassignment not allowed


*/

let user1={
    id:1010,
    name:"Sumit"
}

console.log(user1);

//insert new property phno
user1.phno=9090900;

//modify name property
user1.name="Sumit sharma";

console.log(user1);

//delete 
delete user1.phno;

console.log(user1);

//change refrence for let type object
user1={address:"Pune"};
console.log(user1);

console.log("------const object------");

const user2={
    id:2222,
    name:"Kiran",
    location:"Us"
}

console.log(user2);

//insert profile key
user2.profile="QA"

console.log("Inserting new property: ",user2);

//modify existing proerty
user2.location="India";
console.log("Modification of property: ",user2);


//delete any property
delete user2.location;
console.log("After delete: ",user2);


//for const Object reference is immutable
//change const object refrence
user2={bonus:5000000};//TypeError: Assignment to constant variable.
console.log(user2);



