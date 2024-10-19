let date = new Date()
// console.log(date);=>2024-10-19T06:58:19.600Z
// console.log(date.toDateString()); =>Sat Oct 19 2024
// console.log(date.toISOString());=>2024-10-19T06:58:19.600Z
// console.log(date.toJSON());=>2024-10-19T06:58:19.600Z
// console.log(date.toLocaleDateString());=>10/19/2024
// console.log(date.toLocaleString()); =>10/19/2024, 6:58:19 AM
// console.log(date.toTimeString()); =>06:58:19 GMT+0000 (Coordinated Universal Time)


// let myDate=new Date(2024,9,19)
// console.log(myDate.getFullYear());

// let myDate=new Date(2024,9,19,5,3)
// console.log(myDate.toLocaleString());


let myDate=new Date("10-19-2024");
// console.log(myDate.toLocaleString());

let newDate=myDate.toLocaleString('default',{weekday:'long',day:'2-digit',
    hour:'2-digit'
})

console.log(newDate);
