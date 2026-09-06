/*
- A Promise is an object used to managing asynchronous operataion
- promise allow you to write code that continue after a specific event occur
- Promises enabled the handling of data that is not currently available
but will be available in the future

- A promise has 3 states pending, resolve and reject
pending: This is initial state when the promise is neither fullfilled or rejetcted

fullfilled: This state means asynchronous operation associated with
promise has been successfully completed

Rejected: This state indicates that the asynchronus operation has failed
or been rejected

setteled
============
-when promise is either fullfilled or rejected it enter the settled state

-In this state there are two important methods
1.then():
------------
when promise successfully transitions to the fullfilled state, then method
allows you to specify a callback function that will work with completed data
-this is used to define what should happen when a successfull result is obtained

catch():
-----------
when promise transitions to the "rejected" state the catch method let you specify
a callback function that will work with rejected error
-This is used to handle situation where the operation fails
*/

//design then promise --> handle the promise
let myPromise=new Promise((resolve,reject)=>{

            let status=false;

            if(status)
            {
                resolve("Test Pass!");
            }else
            {
                reject("Test Fail!")
            }

         })

//setteled
myPromise.then((result)=>{//here result is variable which holds result of resolve state
console.log("Resolve state: "+result);

}).catch((error)=>{//here error is variable which holds result of reject state
console.log("Reject state: "+error);

})

console.log("-----------");

//resolve state
let resolvePromise=new Promise((resolve,reject)=>{
    resolve("Promise is completed!");
})

resolvePromise.then((status)=>{
console.log(status);
})

console.log("-----------");
//reject state
let rejectPromise=new Promise((resolve,reject)=>{
reject("Promise is Failed!")
})

rejectPromise.catch((status)=>{
console.log(status);

})

console.log("-----------------");

//modern syntax
let p1=Promise.resolve("Test Pass!");

p1.then((res)=>{
    console.log(res);
   })


let p2=Promise.reject("Test Fail!");

p2.catch((status)=>{
console.log(status);

})
console.log("--------------");

//Promise with asynchronus

let p11=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise get fullfill after 4seconds")
    },4000);
})

p11.then((res)=>{
console.log(res);

})

//reject with async
let p12=new Promise((resolve,reject)=>{

    setTimeout(() => {
        reject("Promise get rejected after 2sec")
        
    },2000);
})


p12.catch((error)=>{
console.log(error);

})


console.log("-=-------Playwright promises--------");

//promise with function

//step1: design promise withing function 
function getStatus()
{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            //resolve("Status is Pass...result updated in 2sec")
            reject("Promise is rejected!")
        },2000);
    })
}


//step2: what will happen if you call function and store result
//we are storing this result--->pending
// let result=getStatus();
// console.log(result);//Promise { <pending> }

//setp3: how to setteled any promise
//way1:
//using tradinational technique--then()
getStatus().then((result)=>{
console.log(result);
}).catch((error)=>{
console.log("Error: "+error);
})

console.log("----modern syntax---");

//way2:
//using modern technique---async and await keyword
async function testStatus()
{
// let result=await getStatus();
// console.log(result);

await getStatus().then((msg)=>{
console.log(msg);

}).catch((error)=>{
console.log(error);

});

}

testStatus();

console.log("--------------");
//then() catch() and finally()

//finally(): code placed in finally() method will always run with promise status
function getUserData()
{
    return new Promise((resolve,reject)=>{

        let status=true;

        if(status)
        {
            setTimeout(() => {
                let user={
                    name:"Smita",
                    id:1010
                }
                
                resolve(user)
            },2000);

        }else
        {
            setTimeout(() => {
                reject("User not found!")
            },2000);
            

        }



    })
}


getUserData().then((status)=>{
console.log(status);

}).catch((errorlog)=>{
console.log("Error:"+errorlog);

}).finally(()=>{
    console.log("Finally () is runnig and looking for next profile");
    
})





