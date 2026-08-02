/*
To validate multiple conditions we use ladderIf
*/

//validate 3 numbers are equal or greater

let num1=10000,num2=10000,num3=10000;


if(num1>num2 && num1>num3)
{
    console.log(num1+" greater number than "+num2+" & "+num3);
    
}else if(num2>num1 && num2>num3)
{
    console.log(num2+" greater number than "+num1+" & "+num3);
}else if(num1===num2 && num2===num3)
{
    console.log("All 3 numbers are equal!");
    
}else{
        console.log(num3+" greater number than "+num1+" & "+num2);

}

console.log("==================");


/*
validate browser scenario:
--------------------------------
To perform string equality check in Js we dont have any methods but we can use
=== strict equality

"hello"==="hello"

To validate partial string: includes()
------------------------------------------
"Google search"=====>includes("search")

To covert string into uppercase or into lowsercase 
-------------------------------------------------
toUpperCase()

toLowserCase()

let browserName="chrome";
console.log(browserName);
console.log(browserName.toUpperCase());
console.log(browserName.toLowerCase());

*/

let browserName="EDGE".toLowerCase();

if(browserName==="chrome")
{
    console.log("Test case is executing on chrome!");
    
}else if(browserName==="edge")
{
    console.log("Test case is executing on Edge!");
    
}else if(browserName==="firefox")
{
    console.log("Test case is executing on Firefox!");
    
}else{
    console.log("Wrong browser so session started with default browser: Chrome");
    
    
}










