/*Problem Statement:
Create a JavaScript class User for managing login credentials.
The class should contain:

username
password
isLoggedIn

Requirements:
Make password and isLoggedIn private.
Provide a login(password) method.
Provide a logout() method.
Provide an isAuthenticated() method.
The password should not be directly accessible from outside the class.
isLoggedIn should only be changed through login() and logout().
*/


class User
{
    //private data
    #password;
    #isLoggedIn=false;

    //public data
    username;

    constructor(username,password)
    {
        this.username=username;
        this.#password=password;

    }


    login(password)
    {
        if(password === this.#password)
        {
            this.#isLoggedIn=true;
            console.log("Login done!");
            
        }else{
            console.log("Invalid password");
            
        }
    }


logout()
{
    console.log("User Logged out.....");
    
}

//check login status
isAuthenticated()
{
return this.#isLoggedIn;
}


}


const user1=new User("Admin","admin123");
console.log("Current status: "+user1.isAuthenticated());//false

user1.login("1234");//Invalid password

user1.login("admin123");

