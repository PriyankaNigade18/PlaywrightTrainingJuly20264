
/*
Spread Operator in Js/Rest parameters(...)
=============================================
Using spread operator we can store n number of entries in array and 
even we can pass n number of parameters into function

1.How to copy array[...]
2.Destructuring of array elements
3.to pass parameters to functions

- To create/design dynamic function we need rest parameter
- spred operator/rest parameter is always last parameter of function
-A rest parameter must be last in a parameter list.
*/


function getEmployeeDetails(id,name,...address)
{
console.log("Employee name: "+name+": id is: "+id+" : Address is: "+address );

}

getEmployeeDetails(101,"Kiran","India","Us","Uk");


function testSkill(...skill)
{
    console.log(skill);
    

}

testSkill("C","C++","Java","Python","Js","Ts"); 

