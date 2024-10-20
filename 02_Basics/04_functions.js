// default parameter

function print(username="sakshi"){
    if(!username){
        return 'please enter username'
    }
    return `${username} just logged in`
}
// console.log(print("annu"))


// rest operator

function addTwoNumber(val1,val2,...num1){
return num1
}

// console.log(addTwoNumber(10,20,40,90)) =>[ 10, 20, 40, 90 ]
// console.log(addTwoNumber(10,20,90,100,80));

// console.log(addTwoNumber([10,20,10],90,[90,100,60])); hm array b pass kr skte  hn direct

let myObj={
    name:"sakshi",
    place:"rishikesh"
}

function obj(myObj){
return `my name is ${myObj.name} and i lives in ${myObj.place}`
}
// console.log(obj(myObj));
// console.log(obj({name:"sakshi",
//     place:"rishikesh"
// }));

// ########################## Mini Hoistion ############################

// console.log(addOne(5));
function addOne(num1){
    return num1+1
}

// console.log(addTwo(7)); error

let addTwo=function(num2){
    console.log(this)
    return num2+2;
    
}

// console.log(addTwo(7))

// let temp=()=>{
//     console.log(this); we can't use this in arrow function
    
//     return 1+2 
// }
// temp()

// let temp2 =()=> 1+3

// console.log(temp2());

let temp2 =(num1 , num2)=> (num1*num2)
console.log(temp2(2,3));
