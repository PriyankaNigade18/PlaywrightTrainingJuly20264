/*
Functions
===================
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.2.Arrow function(short hand function)

*/

console.log("-----Function Declaration without any parameter-------");

function test1()//0 parameter
{
    console.log("Function declaration is calling.....");
    
}

//call
test1();
console.log(typeof test1);//function

console.log("-----Function Declaration with parameters-------");

/*
To make dynamic functions we need parameterization for functions

what is parameter?
-------------------
Parameter represent variables which store certain data 
-while defining function we declare parameters

what is Argument?
-------------------
Arguments are actual data which we pass to variable
-while call function we pass argument


*/

/**
 * document to function
 * @param {number} num1 
 * @param {number} num2 
 */
function add(num1,num2)//2 parameters and both are local variable
{
console.log("Addition is: "+(num1+num2));
}

//call
add(100,100);
add(100,"Hi");
add("Hi","hello");
add(78,88);

console.log("-----Function Declaration with parameters and return keyword-------");

/*
return keyword
===============
- To return value/result/data from function use return keyword
- return keyword should be last statment of the function
- value will return to the calling function
*/


function test2(msg)
{
return msg;
}

//call
//function will return data to calling function so store the result into variable /print it
let result=test2("Welcome to learn Playwright");
console.log(result);

//OR

console.log(test2("Hello All"));

console.log("-----Rela time use case------");
//launch browser and if browser launch then only open application

/**
 * 
 * @param {string} bname 
 * @returns 
 */
function launchBrowser(bname)
{
    switch(bname.toLowerCase().trim())
    {
        case "chrome":
            console.log("Launch chrome browser");
            return true;
            break;
        case "edge":
            console.log("Launch MsEdge browser");
            return true;
            break;
        case "firefox":
            console.log("Launch Firefox browser");
            return true;
            break;   
        default:
            console.log("Wrong browser...!");
            return false;
            
    }

}


//validate browser launch process
if(launchBrowser("Edge"))
{
    console.log("Open application on Current Browser");
    
}else{
    console.log("Browser not open!");
    
}






