

//import { browserName,getData,Product} from "./P044_ModuleExport.js";

// console.log(browserName);

// getData()

// let obj=new Product(101,'laptop');
// obj.getInfo();




//alise
import * as  data from "./P044_ModuleExport.js"

console.log(data.browserName);

data.getData()

let obj=new data.Product(101,'laptop');
obj.getInfo();

