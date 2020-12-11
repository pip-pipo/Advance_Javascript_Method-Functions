const people = [
    { name: 'imran', age: 21, position: 'developer' },
    { name: 'abir', age: 32, position: 'employ' },
    { name: 'rasel', age: 41, position: 'ceo' },
    { name: 'lemon', age: 24, position: 'co-fonder' },
    { name: 'susy', age: 28, position: 'founder' },
    { name: 'alex', age: 32, position: 'chairman' },
]


// const youngPeople = people.filter((person) => {
//     // if (person.age < 30) {
//     //     return person;
//     // }
//     return person.age < 30
// });

// const developer  = people.filter((person) => {
//     return person.position === 'developer';
// })
// const developer = people.filter((i) => i.position === 'developer')
// const youngPeople = people.filter((item)=> item.age < 20 ? item : 'nothing')




// const seniorDevs = people.filter((person) => person.position === 'jon')
// console.log('youngPeople:', seniorDevs)
const findemethod = people.find((item) => {
    return item.age<40;
});
console.log(findemethod);