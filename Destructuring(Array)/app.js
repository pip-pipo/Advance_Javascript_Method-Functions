const fruits = ['orange','banana','lemon'];
const friends = ['john','peter','anna','kelly'];

// console.log('fruits:', fruits[0])
// console.log('fruits:', fruits[1])
// console.log('fruits:', fruits[2])

const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]
// console.log(fruit1,fruit2,fruit3)


// const [john,peter,anna,susan]= friends

// console.log(john,peter,anna,susan)



// for specific selecting

const [john,peter,,susan]= friends

console.log(john,peter,susan)


let first = 'bob';
let second = 'john';

[second,first] = [first,second]

console.log(first,second)