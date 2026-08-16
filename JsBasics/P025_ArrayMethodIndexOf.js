/*

indexOf(searchelement,from index):number
=======================================
Returns the index of the first occurrence of a value in an array, 
or -1 if it is not present.
*/



let month=['Jan','Feb','Mar','Apr','May','Feb','Jun','Jul','Feb','Apr','Feb'];

console.log(month);

console.log(month.indexOf('Aug'));//-1

//index of May
console.log(month.indexOf('May'));//4

//index of Feb: first occurrence
let index1=month.indexOf('Feb');
console.log(index1);//1

//get the 2nd Feb index
let index2=month.indexOf('Feb',index1+1);
console.log("Second occurrence of Feb index: "+index2);

//get the 3rd Feb index
console.log("Index of 3rd occurrence Feb: "+month.indexOf('Feb',index2+1));


//give me last Feb index:lastIndexOf()
console.log("Last occurrence Feb index: "+month.lastIndexOf('Feb'));//10

/*
let indexes=[];
//all 'Feb' index
for(let i of month)
{
    let count=i.indexOf('Feb');
    let occ=i.indexOf('Feb',count+1);
    indexes.push(occ);
   
}

console.log(indexes);*/


let indexes = [];
let searchMonth = "feb"
for(let monthI in month)
    {
    if(month[monthI]=== searchMonth){
        indexes.push(monthI);
    }
}
console.log(`The index values for month ${searchMonth} is `,indexes);




