// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sakshi = function(){
    console.log(`sakshi is present in all objects`);
}

Array.prototype.heySakshi = function(){
    console.log(`sakshi says hello`);
}
// heroPower.sakshi()
// myHeros.sakshi()
// kyuki hmne direct object ko ye property di h to dono m accessable hogi
myHeros.heySakshi()
// heroPower.heySakshi()=>gives error kyuki ye property bss hmne arrays ko di hn


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
    // hmne tasupport ko teaching support ki access b de di mtlb inherit kr ra us se
}
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);ye accesable nhi h
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()