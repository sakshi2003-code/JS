const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this
    // agar hm this ka use b ni krenge tb b ye by defalut return kr deta h
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// agar hm new keyword ka use nhi krenge to ye overwrite kr denge value ko
console.log(userOne.constructor);
console.log(userTwo.greeting());