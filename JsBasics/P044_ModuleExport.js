

/*
Any folder/file structure in Js we called module
export : to share variable,class,function
import : to read exported data use import
*/

export let browserName="chrome";


export function getData()
{
    console.log("This is automation test data");
    
}

export class Product
{
    pid;
    pname;

    constructor(id,name)
    {
        this.pid=id;
        this.pname=name;
    }

    getInfo()
    {
        console.log(this.pid+" : "+this.pname);
        
    }
}