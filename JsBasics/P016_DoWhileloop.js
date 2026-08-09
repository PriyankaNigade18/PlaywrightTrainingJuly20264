/*
Loop
=============
For Number of iterations/executions we use loop

1.for loop
------------------
- When number of iterations are fixed then use for
scenario: 
calendar days 30/31/28/29
list/menu/dropdown

2.While loop
---------------
- entry controlled loop
- When number of iterations are not fixed
Scenario: Pegination logic,month selection
    page load timeout for every page


3.dowhile
-----------
- exit control loop
- when only one time iteration is expected without matter what condition 
result it is then use dowhile


Working with Array/Object
=========================
1. for...of loop
2. for...in loop


*/

let i=1;
do{
    console.log("Playwright!");
    i++;
    
}while(i<=10);

console.log("------------------");

let j=1;

do{
    console.log(j);
    j++;
}while(j>5);

console.log("------------------");

// let k=1;
// do{
    
//     console.log("hi");
    
// }while(k<10);