let arr1=[1,2,3,4]
let arr2=[0,4,5]

// arr1.push(arr2)
// console.log(arr1); [ 1, 2, 3, 4, [ 0, 4, 5 ] ]
// let arr3=arr1.concat(arr2)  =>[ 1, 2, 3, 4,  0, 4, 5]
// console.log(arr1);

// let arr4=[...arr1,...arr2] => spread operator  [ 1, 2, 3, 4,  0, 4, 5]
// console.log(arr4);

let newArr=[1,2,3,4,[0,5,6,7],[[1,3],[0,4]]]
// console.log(newArr.flat(Infinity));  =>  [1, 2, 3, 4, 0, 5, 6, 7, 1, 3, 0, 4]

// console.log(newArr.flat(1)) =>[ 1, 2, 3, 4, 0, 5, 6, 7, [ 1, 3 ], [ 0, 4 ] ]

// console.log(Array.isArray(newArr)); =>true

// console.log(Array.from("sakshi")); =>[ 's', 'a', 'k', 's', 'h', 'i' ]

// console.log(Array.from(8,9)) =>error

// console.log(Array.from({name:"sakshi"})); =>  []

    // console.log(Array.of({name:"sakshi"})); =>[ { name: 'sakshi' } ]

    console.log(Array.of(1,2,4,[9,0,1]));
    
    








