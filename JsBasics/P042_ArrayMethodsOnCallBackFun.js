
/*
forEach(): Iteration and basic operation
map():transform the array elements 
filter():search element of array
reduce():reduce array in one format
*/

//foreach()
let arr=[10,20,30,40,50];
console.log(arr);//[ 10, 20, 30, 40, 50 ]

for(let num of arr)
{
    console.log(num*num);
    
}

console.log("----------");

arr.forEach((num)=>{
console.log(num*num*num);

})

console.log("---------map()---------");

let loc=['Pune','Mumbai','Delhi','Nashik'];
console.log(loc);//[ 'Pune', 'Mumbai', 'Delhi', 'Nashik' ]

//print array element in uppercase
//map():Calls a defined callback function on each element of an array, and returns an array that contains the results.
let finalLoc=loc.map(city=>city.toUpperCase());
console.log(finalLoc);//[ 'PUNE', 'MUMBAI', 'DELHI', 'NASHIK' ]

//secnario : for footerlinks add appname
let footerlinks=['AboutUs','Help','Cart','PrivacyPolicy'];
console.log(footerlinks);

let resultArr=footerlinks.map(link=>"Amazon "+link);
console.log(resultArr);//[  'Amazon AboutUs',  'Amazon Help',  'Amazon Cart',  'Amazon PrivacyPolicy']


//3.filter()

let elements=[1,2,3,4,5,6,7,8,9,10];
console.log(elements);
//filter():Returns the elements of an array that meet the condition specified in a callback function.
//find even numbers abnd store/print it
let evenNumbers=elements.filter(num=>num%2===0);
console.log(evenNumbers);//[ 2, 4, 6, 8, 10 ]

let product=['Mobile','Keyboard','Mouse','Monitor','HardDrive'];

//search for Mouse?
let expEle=product.filter((ele)=>{

    if(ele==='Mouse')
    {
        return ele;
    }
})

console.log("Found: "+expEle);

//3. reduce(): creating array in one form:sum of elements of array


let data=[10,20,30,40,50];

//sum of array elements
let sum=0;
for(let num of data)
{
    sum=sum+num;

}

console.log("Sum of array elements: "+sum);

console.log("------");
//reduce((prevvalue,currentvalue)=>,initialvalue)
let result=data.reduce((sum,num)=>sum+num,0);//sum=0
console.log(result);
