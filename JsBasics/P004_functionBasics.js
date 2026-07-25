/*

Functions
===================
1.Function declaration
2.Function Expression
    2.1. Anonymous function(function without name)
    2.2 Arrow function(short hand function)



*/

console.log("----function declaration------");

//function definition
function test1()
{
    console.log("This is function declaration is calling....");
    
}

// function call
test1();

console.log("-----Anonymous function------");

let test2=function()
            {
                console.log("This is anonymous function is calling....");
                
            }


            //call
        test2();
        console.log(typeof test2);//function

console.log("-----Arrow function-----");

let test3=()=>{console.log("This is arrow function calling....");}

    //call
    test3();    










