let promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("first promise exexuted");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})
// resolve then ko connect krta h code se

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})
let promiseThree=new Promise(function(resolve,reject){
    resolve({name:"sakshi",id:1})
})
promiseThree.then(function(user){
console.log(user);

})

// let promiseFour=new Promise(function(resolve,reject){
//     let error=false;
//     if(!error){
//         resolve({name:"sakshi",id:1})
//     }
// }) 
// promiseFour.then(function(date){
//     console.log(data);
    
// })
// give error because we dont handled the error
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "sakshi", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
// .json() ye time lgata h jise promise ya async await function m use krte hn
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise all=>An iterable (such as an Array) of promises.
// The Promise.all() static method takes an iterable of promises
//  as input and returns a single Promise.
//  This returned promise fulfills when all of the input's promises
//  fulfill (including when an empty iterable is passed)
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]