let map = new Map()
map.set("js","javasript");
map.set(2,"c++");
map.set(3,"python");

// for (const [key,value] of map) {
//     // console.log(`my key ${key} and value is ${value}`);
    
    
// }

// for (const [key,value]in map) {
//     console.log(`my key is ${map.get(key)}`);
    
// } 
// not working becoz map is not iterable 


// but we cant iterate  in object like this

let myObj={
 "js":"javascript",
 1:"lang",
 "nature":"dynamic"
}

// for (const element of myObj) {
    // console.log(element);  =>error
    
// }

// for (const key in myObj) {
//     if (Object.prototype.hasOwnProperty.call(myObj, key)) {
//         const element = myObj[key];
//         console.log(`my key is ${key} and value is ${element}`);
        
        
//     }
// }


// for in in arrays 
let programming =["js","cpp","c","java"]
// for (const key in programming) {
//    console.log(key);  =>gives index of the array 
   
// }
// for (const key in programming) {
//     console.log(programming[key]); 
    
//  }

// for (const element of programming) {
//     console.log(element); =>it gives values
    
// }

// for each loop


let coding=["js","cpp","c","java"]

coding.forEach((element )=> {
    // console.log(element);
    
});

function print(element){
    console.log(element);
    
}

coding.forEach(print)
// we can also pass funtion reference
// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )