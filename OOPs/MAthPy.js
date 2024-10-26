// console.log(Math.PI);
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"));

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
Object.defineProperty(chai,'orderChai',{
    value:4,
    writable: true,
    enumerable: true,
})
console.log(Math.ceil(Math.PI.toFixed(3)));

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Object.defineProperty(chai,'orderChai',{
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
//         // ye function m iterate krte time fass jaega isliye check lga rkha h 
        
//         console.log(`${key} : ${value}`);
//     }
// }