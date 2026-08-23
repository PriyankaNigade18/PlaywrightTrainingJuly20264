/*
To create Object completely immutable then we can use freeze()
- we cannot insert/modify/delete

Syntax
----------
Object.freeze(ObjectName)

seal()
================
using seal() we can modify only existing properties of object we cant insert or delete
any existing property

Syntax:
==========
Object.seal(ObjectNAme)
*/

const student={
        id:1010,
        name:"Smita",
        profile:"QA"

        }

    console.log(student);
    console.log(typeof student);

    //To make it immutable
    Object.freeze(student);

    //isert new property
    //student.phno=798908;//TypeError: Cannot add property phno, object is not extensible
  
    //modification of any existing property
    //student.profile="SDET";//TypeError: Cannot assign to read only property 'profile' of object 

    //delete any existing property
    //delete student.name//TypeError: Cannot delete property 'name' of #<Object>
    
    //reading
    console.log(student.id);
    
console.log("----------------------");


const browser={
    name:"Chrome",
    version:150
}

console.log(browser);
console.log(typeof browser);

Object.seal(browser);

//insert new property
//browser.vendor="Google";//TypeError: Cannot add property vendor, object is not extensible

//delete any property
//delete browser.name;//TypeError: Cannot delete property 'name' of #<Object>

//modification of only existing property
browser.name="MsEdge";
console.log(browser);









