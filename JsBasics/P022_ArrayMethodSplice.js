
/*
splice()
---------------
To remove elements and insert elements at any position of array we can use splice()

Syntax:
=============
splice(startindex,deletecount,elementToinsert);

Removes elements from an array and, if necessary, 
inserts new elements in their place, returning the deleted elements.



*/

let fruits=['Mango','Orange','Banana','Greps',"Kiwi",'Apple'];
//index     0        1           2       3       4      5
console.log(fruits);//[ 'Mango', 'Orange', 'Banana', 'Greps', 'Kiwi', 'Apple' ]


//delete from array Banana:splice()
let deletedEntry1=fruits.splice(2,1);
console.log(deletedEntry1);//[ 'Banana' ]
console.log(fruits);//[ 'Mango', 'Orange', 'Greps', 'Kiwi', 'Apple' ]

//start with 1 and delete 2 entries
let deletedEntry2=fruits.splice(1,2);
console.log(deletedEntry2);//[ 'Orange', 'Greps' ]
console.log(fruits);//[ 'Mango', 'Kiwi', 'Apple' ]


//insert two fruits 'Orange', 'Greps'  after kiwi
fruits.splice(2,0,'Orange', 'Greps' );
console.log(fruits);//[ 'Mango', 'Kiwi', 'Orange', 'Greps', 'Apple' ]

console.log("--------------");

//-ve index   -5          -4      -3      -2         -1
let products=['mobile','laptop','mouse','keyboard','monitor'];
//index         0        1         2       3          4
console.log(products);//[ 'mobile', 'laptop', 'mouse', 'keyboard', 'monitor' ]

//delete laptop and insert printer
products.splice(1,1,'printer');
console.log(products);//[ 'mobile', 'printer', 'mouse', 'keyboard', 'monitor' ]

//-ve indexing
//starts with -2 index delete 1 and insert processor
let deletedEntry3=products.splice(-2,1,"processor");
console.log(deletedEntry3);//keyboard
console.log(products);//[ 'mobile', 'printer', 'mouse', 'processor', 'monitor' ]

//delete printer use -ve index
products.splice(-4,1);
console.log(products);//[ 'mobile', 'mouse', 'processor', 'monitor' ]

//can we insert multiple elements
products.splice(-4,0,'laptop','smartdevice','pendrive');
console.log(products);













