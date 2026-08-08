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


Wonking with Array/Object
=========================
1. for...of loop
2. for...in loop


*/

//print hello statement 5 times
let i=1;
while(i<=5)
{
    console.log("Hello");
    i++;
    
}

/*
Number of ietrations are unknown: sum of digits logic

num=12 =1+2=3
num=123
num=1234

digit count is not fixed

*/

let num=102034,rem,sum=0;

while(num>0)
{
    rem=num%10;
    num=Math.floor(num/10);
    sum=sum+rem
}

console.log("Sum of digits : "+sum);

console.log("-----------------");
//reverse number logic

let number1=12345,r,rev=0;

while(number1>0)
{
    r=number1%10;
    number1=Math.floor(number1/10);
    rev=rev*10+r;
}


console.log("Reverse number is: "+rev);

console.log("-----------------");

// let j=1;

// while(j<=10)
// {
//     console.log("Welcome!");
//     //j++ code will run infinite times
// }









