import { Car } from "./P050_CarClass.js";
import {BMW} from "./P051_BMWClass.js";
import {Audi} from "./P053_AudiClass.js"


//Object
console.log("------Parent Object-------");
let c1=new Car();
c1.start();//individual
c1.refule();//individual
c1.stop();//individual
c1.breakFeature();//inherited
c1.price();

console.log("------Child Object-------");

let b1=new BMW();
b1.autoEngine();//individual
b1.start();//inherited
b1.refule();//inherited
b1.stop();//inherited
b1.breakFeature();//inherited
b1.price();

console.log("---------------");


let a1=new Audi();
a1.autoGear();//individual
a1.start();//inherited
a1.refule();//inherited
a1.stop();//inherited
a1.breakFeature();//inherited
a1.price();

