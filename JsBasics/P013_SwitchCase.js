/*
Switch case also used to validate multiple conditions
Key===value
- we dont use any relational operator
- we can use break after every case value

break statement
-----------------
- break we can use only in loop and switch case
- break will exit from switch body or loop body


switch (key) {
    case value:
        
        break;

    default:
        break;
}
        */

let color="red"

switch (color)
 {
    case "red":
        console.log("STOP");
         break;
    case "yellow":
        console.log("READY");
         break;  
    case "green":
        console.log("GO");
         break;    
          
   default:
        console.log("Wrong Choice!");
        
        break;
}

console.log("=============");


//browser use case

let browserName="edge".toLowerCase();

switch (browserName) {
    case "chrome":
        console.log("Test case is executing on Chrome");
        
        break;
    case "edge":
        console.log("Test case is executing on edge");
        
        break;
    case "firefox":
        console.log("Test case is executing on firefox");
        
        break;

    default:
        console.log("Invalid Browser so session started with Chrome!!");
        
        break;
}






