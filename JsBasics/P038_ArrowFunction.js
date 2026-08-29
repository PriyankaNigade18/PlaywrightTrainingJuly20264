

console.log("-------Arrow function without parameter------");

let test1=()=>{console.log("Arrow function is calling....")};

//call
test1()

console.log("-------Arrow function with parameter------");

//single parameter: () are not required
let test2=data=>{
console.log("Data is "+data);
}

//call
test2("Playwright is E2E automation framework");
console.log(typeof test2);//function

//multiple parameters
let test3=(a,b)=>{
console.log("Multiplication: "+(a*b));
}

test3(10,4);

console.log("-------Arrow function with parameter and return keyword------");

let test4=data=>{
    return data;
}

console.log(test4('thank you!'));


