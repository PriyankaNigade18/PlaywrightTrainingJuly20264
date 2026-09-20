/*

Array
===========
- Array is Dynamic Data structure in Js/Ts
- In Ts we use data type for array


Syntax
===========
let arrayName:type[]=[val,val,val...];

2.Syntax Array<type>
===============
let arrayName:Array<type>=[val,val,val...]

*/

//Js
let sid=[10,20,30,40];
console.log(sid);//[ 10, 20, 30, 40 ]

//Ts
let id:number[]=[101,201,301,401];
console.log(id);//[ 101, 201, 301, 401 ]

//single id
console.log(id[2]);//301
console.log(id[8]);//undefined
console.log(id[-2]);//undefined

//Array Methods
//push()
id.push(501,601,701);
console.log(id);

//total elements in array:length
console.log("Total ids are: "+id.length);//7

//unshift()
id.unshift(100,110,111);
console.log(id);

//pop()
let deletedId=id.pop();
console.log(deletedId);//701
console.log(id);

//shift()
let deletedId2=id.shift();
console.log(deletedId2);
console.log(id);

//[110, 111, 101, 201, 301, 401,  501, 601]
// 0    1   2      3    4    5     6     7

//slice
let slice1=id.slice(2);
console.log(slice1);

let slice2=id.slice(2,5);
console.log(slice2);

//splice: remove/insert at any position
id.splice(1,0,100);
console.log(id);
//start with 1st index and delete the element
id.splice(1,1);
console.log(id);

//search/find elememnt in array: includes()

let location:string[]=['Pune','Mumbai','Delhi'];

for(let i of location)
{
    if(i.includes('Delhi'))
    {
        console.log("Location available: "+i);
        
    }
}

let res=location.filter((ele)=>{
if(ele==='Pune')
return ele;
})

console.log(res);


console.log("-----Array declaration syntax------");

let product:Array<string>=['laptop','keyboard','mobile','desktop'];
console.log(product);

//Array with different type
let data:Array<string|number>=[1234,'abcd',1818,'hjkjhkjh'];
console.log(data);


/*
Tuple/ Tuple array
--------------------
 A tuple is a TypeScript array type where the
 number, order, and types of elements are known 
 and defined in advance.

*/

let personData:[string,string,number,boolean]=["Sarang","Pune",123,true];
console.log(personData);

//define login credentials un +password

let loginData:[string,string]=["Admin","admin123"];
console.log(loginData[0]);//Admin
console.log(loginData[1]);//admin123

//API: Schema validation:Ajv library





















