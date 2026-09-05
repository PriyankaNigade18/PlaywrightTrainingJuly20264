

//synchronous programming: step by step code executes

let k=1;
for(let i=1;i<=5;i++)
{
    console.log(k);
    k++;
    
}

/*What is Asynchrounus
-------------------------
Some task required extra time to finish and then Js will allow you task 
executing without waiting for any task. so parallely we can run all the task

*/

// console.log('Program started.....');

// setTimeout(() => {
//     console.log("Task completed after 4sec....");
//     },4000);

// console.log('Program ends.....');

console.log("---------------------");
//concept of Promise

//fetch(): send reuest to server
let response=fetch("https://api.restful-api.dev/collections");
console.log(response);//Promise { <pending> }

//how to handle any method which returns promise<>

