

//all(), race(), allsetteled()
/*
Promise.all([])
-----------------
Creates a Promise that is resolved with an array of results 
when all of the provided Promises resolve,
 or rejected when any Promise is rejected.

 - It executes all promises in parallel
*/


let p1=new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("Test1 is completed")
            },3000);
            })

let p2=new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("Test2 is completed")
            },1000);
            })


let p3=new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("Test3 is fail!")
            },2000);
            })


   /* Promise.all([p1,p2,p3]).then((res)=>{
        console.log(res);
        
    }).catch((err)=>{

        console.log(err);
        
    })*/

    //race():rece() returns first resolve/reject promise

//     Promise.race([p1,p2,p3]).then((msg)=>{
// console.log("Pass:"+msg);

//     }).catch((error)=>{
// console.log("Error:"+error);

//     })

    /*
    Creates a Promise that is resolved 
    with an array of results when all of the provided 
    Promises resolve or reject.
    */
    Promise.allSettled([p1,p2,p3]).then((msg)=>{
        console.log("Pass: ",msg);
        
    }).catch((err)=>{
        console.log("Fail:",err);
        
    })