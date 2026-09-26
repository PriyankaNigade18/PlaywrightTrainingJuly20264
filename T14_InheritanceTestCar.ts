

import {Car} from "./T12_InheritanceBasicsCar.js"
import {BMW} from "./T13_InheritanceBMW.js"


//object
console.log("Scenario1: Parent class ref and Parent class object:Parent");
let c1:Car=new Car();
c1.start();//individual method
c1.refule();//individual method
c1.stop();//individual method
c1.price();//individual method


console.log("Scenario2: child class ref and child class object:Parent+child");

let b1:BMW=new BMW();
b1.autoEngine();//individual method
b1.start();//inherited method
b1.refule();//inherited method
b1.stop();//inherited method
b1.price();//inherited method

//Ts:Data abstraction
console.log("Scenario3: Parent class ref and child class object:Parent");

let c2:Car=new BMW();
c2.start();//individual method
c2.refule();//individual method
c2.stop();//individual method
c2.price();
