/*
In Ts we have Error is predefined interface

When Error occurs in code/program it will interrupt normal flow of execution

What is Errorhandling
----------------------
- To maintain normal flow of the execution error handling is requireed
- We can handle error by showing some meaningfull message to the user

In Ts we use try-catch to handle error
-----------------------
1.try-catch
2.finally block

*/

/*
//design function which throw some error
function division(num1:number,num2:number):number
{
    if(num2===0)
    {
        //throw error
        throw new Error("Divide by 0 error: cannot devide any number by 0")
    }else
        {
        return num1/num2;
    }
}

//call
console.log(division(200,10));
console.log(division(100,0));
console.log(division(191,12));
*/
console.log("------------------------");

let payload={
    "id":111,
    "fname":"Jay"
}

console.log(typeof payload);//object


function parsing()
{
    try{
     let jsObject=JSON.parse("payload");//is not valid JSON
     console.log(jsObject);
    console.log(typeof jsObject);
    }catch(error)
    {
        console.log("ERROR Message: Provide valid Json string payload");
        
    }
      
}

//calling
parsing();

console.log("-----------");
function division(num1:number,num2:number):number
{
    try{
        if(num2===0)
    {
        //throw error
        throw new Error("Divide by 0 error: cannot devide any number by 0")
    }else
        {
        return num1/num2;
    }
    }catch(e)
    {
        console.log("ERROR Message: Please provide second number other than 0!");
        return num2;
    }
   
}
//call
console.log(division(200,10));
console.log(division(100,0));
console.log(division(191,12));


console.log("-------------Finally block-------");
/*
finally block
---------------
- this is block used to run special code 
- server,database,service.....
- finally block will run with or without error
-finally block we can add with try block

*/

//test should run only on chrome
function testBrowser(bname:string)
{
    try{
    if(bname=== "chrome")
    {
        console.log("Test executing on Chrome!");
        
    }else{
        throw new Error("Invalid browser: "+bname);
    }
    }catch(e)
    {
        console.log("ERROR Message: Please provide chrome as browser name!");
        
    }
    finally{

        console.log("Finally block is executing....");
        console.log('Server closed!');
        
        
    }
    
}

//call
testBrowser("chrome");
testBrowser("safari");//Error: Invalid browser: safari



