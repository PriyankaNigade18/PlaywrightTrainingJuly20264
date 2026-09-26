/*
Access modifier
===================
- To provide access permissions to variable,method,classes,constructor
- There are 3 types of access modifiers available
1.private 2.public 3.protected

Note:
---------------
- Even you dont specify any modifier, by default in ts it will be public
- public is default modifier
- Any protected data or private data we can call using public method(Encapsulation)


Access Modifier         sameClass           sub/clid class          outsidetheclass
1.public                yes                     yes                     yes
2.private               yes                     No                      No
3.protected             yes                     yes                     No                     

*/

class Tester
{
   public tid:number=2020;
   private salary:number=80000;
   protected acNo:number=666666;

   public testing()
   {
    console.log("Testing.....This is public method....");
    
   }

   private coding()
   {
    console.log("Coding....this is private method");
    
   }

   protected monitor()
   {
    console.log("Monitor....this is protected method");
    
   }

   public getPrivateProtectedData()
   {
    console.log("Salary: "+this.salary);
    this.coding();
    console.log("AccountNumber: "+this.acNo);
    this.monitor();
       
   }

}

//Object
let test:Tester=new Tester();
console.log(test.tid);
test.testing();
test.getPrivateProtectedData();
console.log("--------------");


//Protected data we can access using child class of Tester
class Employee extends Tester//here Tester is parent class and Employee is child class
{

getInfo()
{
    console.log("This is getInfo().....");
    
}

//object created inside class
getEmpProtectedData()
{
let e1:Employee=new Employee();
console.log("Protected data: "+e1.acNo);
e1.monitor();

}



}

//outside object
let e1:Employee=new Employee();
e1.getEmpProtectedData();
