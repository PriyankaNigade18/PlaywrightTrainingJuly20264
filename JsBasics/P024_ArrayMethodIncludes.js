


/*

this is common method for string and array in Js
===========================================
includes('element'):boolean
Determines whether an array includes a certain element, 
returning true or false as appropriate.


*/

let product=['Monitor','Mouse','Keyboard','Printer','HardDrive'];

let productStatus=product.includes('Mobile');
console.log("Is products have Mobile?: "+productStatus);//false

console.log("Look for Mouse?: "+product.includes('Mouse'));//true


