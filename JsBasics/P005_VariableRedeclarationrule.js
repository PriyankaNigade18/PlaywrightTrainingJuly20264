
/*
var type: redelcaration and reassignment is allowed
let type: redeclaration is not allowed and reassignment allowed
const type: redeclaration is not allowed and reassignment is not allowed
*/

//redelcaration
var bookName="Java Learning";
var bookName="Python Learning";

console.log(bookName);//Python Learning

//reassign
bookName="Js learning";
console.log(bookName);//Js 

console.log("--------------");
//let : redeclaration not allowed

let toolName="Selenium";
//let toolName="Playwright";//SyntaxError: Identifier 'toolName' has already been declared

toolName="Playwright";//reassignment is allowed
console.log(toolName);

console.log("--------------");
//const: redeclaration and reassignment not allowed

const pi=3.14;
//const pi=4.13;//SyntaxError: Identifier 'pi' has already been declared

//reassignment
//pi=4.14;//TypeError: Assignment to constant variable.




