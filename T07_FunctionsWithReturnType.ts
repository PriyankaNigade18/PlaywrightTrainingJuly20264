

//normal function
let test1=function():void
{
    console.log("This is Anonymous function....");
    
}

//call
test1()

console.log("--------");

let test2=():void=>{
    console.log("Arrow function is executing....");
    
}

//call
test2()

console.log("--------");

function test3():void
{
    console.log("This is function declaration...");
    
}
//call
test3();

console.log("-------------------");
//parameter: data-type 

//call back function
function calculation(num1:number,num2:number,callBack:Function)
{
callBack(num1,num2);
}


let add=(a:number,b:number)=>{console.log("Addition is:",(a+b))};
let sub=(a:number,b:number)=>{console.log("Subtraction is:",(a-b))};
let mul=(a:number,b:number)=>{console.log("Multiplication is:",(a*b))};
let div=(a:number,b:number)=>{console.log("Division is:",(a/b))};

//call
calculation(100,20,add);
calculation(100,20,sub);
calculation(100,20,mul);
calculation(100,20,div);

console.log("-----");

function info(msg:string)
{
console.log("Information is: "+msg);

}


//call
info("Hello ALL");

//function with return type
function testData(un:string,psw:string):string
{
    return un;
}

let returnData=testData("Admin","admin123");
console.log(returnData);

//OR

console.log(testData("Sumit","sumit123"));

//functions with void 

function test4():void
{
console.log("Function does not return anything...");

}

test4();

console.log("------");
//functions with promises

function myData():Promise<string>
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Expected data found")
        },3000);
       
    })
}

let functionStatus=myData();
console.log(functionStatus);

//solution how to handle this promise function
async function promiseHandling()
{
   let res:string=await myData();
   console.log(res);
   
}
//call
promiseHandling();


//functions with promise

function getTrainerName():Promise<string>
{
    return Promise.resolve("Priyanka");
}

//call
console.log(getTrainerName());

function getStatus():Promise<boolean>
{
    return Promise.resolve(true);
}
//call
console.log(getStatus());

console.log("-------------------------");

//Functions with Optional parameters : ? 
//it should be the last parameter
function getNewData(fname:string,age?:number,profile?:string)
{
console.log(fname);
if(age)
{
console.log(age);
}

}

getNewData("Jay",12);
getNewData("Sarang");


//spread /rest parameters in function
function getIds(...id:number[])
{
console.log(id);

}

getIds(10,20,304,0,50);