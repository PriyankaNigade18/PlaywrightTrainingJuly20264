
/*
In Js String is an Immutable object
Once string declare value of string will not be modified
if you modified the value string will change its reference

String is collections  of character
String in Js is primitive data types and dynamic Object

*/



let s1="Hello";
console.log(s1);
let s2="Hello";
console.log(s2);
console.log(s1===s2);//true

s1=s1+"All";
console.log(s1);

console.log(s1===s2);//false it is matching reference(address of object)

//s1[0]='h'//TypeError: Cannot assign to read only property '0' of string 'HelloAll'
console.log(s1);

//String Methods

//length property:Returns the length of a String object.

let ss1="Hello All";
console.log("Length of total characters : "+ss1.length);//9


//String conversion: toLowerCase() toUpperCase()
console.log(ss1.toUpperCase());
console.log(ss1.toLowerCase());

//for Equality test=== no method
console.log("Google" === "Google");//true


//for searching substring: includes()
let ss2="Playwright is webui and api testing end to end framework";

console.log("search for webui?: "+ss2.includes('webui'));//true
console.log("search for automation testing?: "+ss2.includes('automation testing'));//false


//for serach string prefix value: startsWith('prefix value')
console.log("string starts with Playwright?: "+ss2.startsWith('Playwright'));//true
console.log("string starts with Play?: "+ss2.startsWith('Play'));//true
console.log("string starts with P?: "+ss2.startsWith('P'));//true
console.log("string starts with wright?: "+ss2.startsWith('wright'));//false

//for search string suffix vale: endsWith()
console.log("String ends with framework?: "+ss2.endsWith('framework'));//true
console.log("String ends with work?: "+ss2.endsWith('work'));//true
console.log("String ends with k?: "+ss2.endsWith('k'));//true
console.log("String ends with frame?: "+ss2.endsWith('frame'));//false


//trim():Removes the leading and trailing white space and line terminator characters from a string.
//To ignore white space before and after string:trim()
let ss3="     Welcome All      ";
console.log(ss3);
console.log(ss3.trim());

//charAt(index): return character/string for specific index

let ss4="Hello All To learn String";
console.log(ss4.length);//25 [0 to 24]

console.log("character at 8th index: "+ss4.charAt(8));//l
console.log("Character at index 15: "+ss4.charAt(15));//a
//string is not an array
console.log("Character at wrong index 30: "+ss4.charAt(30));//empty string


//indexOf()
console.log(ss4.indexOf('A'));//6


//concat()
let ss5="hi";
let ss6="how are you?";
console.log(ss5.concat(" "+ss6));
console.log(ss5+" "+ss6);

//replace() and replaceAll():Replaces text in a string, using a regular expression or search string.
let ss7="Automation Testing is evoled with AI Automation Testing";
console.log(ss7);
console.log(ss7.replace('Testing',"******"));

console.log(ss7.replaceAll('Testing',"#####"));


//convert this string even position character into uppercase 
// and odd position character into lowercase
let result="";
let fname="Priyanka";
console.log(fname);

for(let i=0;i<fname.length;i++)
{
    if(i%2===0)
    {
        //even
        result=result+fname.charAt(i).toUpperCase();
    }else
    {
        //odd
        result=result+fname.charAt(i).toLowerCase();
    }
}

console.log(result);


console.log("==========");

for(let i in fname)
{
    console.log(i+" : value is: "+fname[i]);
    
}





//split(regular express)

//write logic for reverse string























