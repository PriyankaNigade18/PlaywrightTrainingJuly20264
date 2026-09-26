/*

-Encapsulation means wrapping data and function in single unit 
-Encapsulation help to hide data
-Encapsulation we can achieve by having private data 
and using public method(getters and setters)

here in Ts we can declare private data using private modifier

Encapsulation= private data +public method
*/

export class EmployeeData
{
//data
eid:number;
ename:string;
private salary:number=50000;

constructor(eid:number,ename:string)
{
    this.eid=eid;
    this.ename=ename;
}

//method
getData():void
{
    console.log("Employee id is: ",this.eid);
    console.log("Employee name is: ",this.ename);
    console.log("Employee salary is: ",this.salary);
}

//setter:set the data
setSalary(salary:number):void
{
this.salary=salary;
}

//getter:get the data
getSalary():number
{
    return this.salary;
}

}


//Object
// let e1:EmployeeData=new EmployeeData(101,"Jay");
// e1.getData();
