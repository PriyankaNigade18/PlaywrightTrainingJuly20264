

let student1:{readonly id:number,fname:string,subject:string}={
    id:111,
    fname:'Raj',
    subject:"Java"
}
console.log(student1);

//same structure create one more object

let student2:{readonly id:number,fname:string,subject:string}={
    id:222,
    fname:'Pooja',
    subject:"Javascript"
}
console.log(student2);

/*
type alise
-----------
-By using same template or structure we can create objects
-To create custom type of object where we can create first prototype/template
and based on the same we can create objects


type alise create template only for properties of the object not for method

*/

//prototype
type studentData={readonly id:number,fname:string,subject:string,isActive:boolean};

//obj1
let s1:studentData={
id:101,
fname:'Neelam',
subject:'testing',
isActive:true
}


let s2:studentData={
id:102,
fname:'Pallavi',
subject:'testing',
isActive:true 
}
