


function getTrainerName(name="Sarang")
{
    console.log("Trainer name is: "+name);
    
}

//call
getTrainerName("Priyanka");

getTrainerName();//degault parameter

console.log("-----Rela time use case------");
//launch browser and if browser launch then only open application

/**
 * 
 * @param {string} bname 
 * @returns 
 */
function launchBrowser(bname="chrome")//default parameter
{
    switch(bname.toLowerCase().trim())
    {
        case "chrome":
            console.log("Launch chrome browser");
            return true;
            break;
        case "edge":
            console.log("Launch MsEdge browser");
            return true;
            break;
        case "firefox":
            console.log("Launch Firefox browser");
            return true;
            break;   
        default:
            console.log("Wrong browser...!");
            return false;
            
    }

}


//validate browser launch process
if(launchBrowser())
{
    console.log("Open application on Current Browser");
    
}else{
    console.log("Browser not open!");
    
}






