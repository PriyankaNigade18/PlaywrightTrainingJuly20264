/*

1.break
----------------
- break statment applicable for switch case and loop
- break will exit control from switch or loop body/scope

2.continue
-------------
- continue statment applicable for loops
- continue statment skip certain part of the code and continue execution till the 
iteration

3.return
-----------------
- return is applicable for function
- To return any value/result from function we use return statment

*/


for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;
    }else
     {
        console.log(i);
        
    }
}

console.log("---------------");

for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }else
     {
        console.log(i);
        
    }
}

console.log("---------------");

for(let i=1;i<=10;i++)
{
    if(i===7)
    {
        continue;
    }else
    {
        console.log(i);
        
    }
}

//url validation with array










