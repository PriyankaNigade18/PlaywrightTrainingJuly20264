
import {Car} from "./T12_InheritanceBasicsCar.js"

export class BMW extends Car
{
    autoEngine()
    {
        console.log("BMW....AutoEngine()");
        
    }


   override price():void{
       console.log("BMW......50L");

    }
}



