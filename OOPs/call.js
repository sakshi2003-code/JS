function  setUsername(username){
    this.username=username
    console.log("setuser is called");
    
}
function setuser(username,email,password){
    // setUsername(username);=>it will called but not sent execution context
    setUsername.call(this,username)
    this.email=email;
    this.password=password
}
const sakshi= new setuser("sakshi","sakshi@123","124");
console.log(sakshi);

