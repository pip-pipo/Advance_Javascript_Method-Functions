// reduce 
// iterate , callback , function

// reduce to a signle value - number , array , object
// 1st parameter ('acc') - total of all calcutions
// 2nd parameter ('curr') - current iteration/value


const staff = [
    { name: 'imran', age: 19, postion: 'developer', salary: 20 },
    { name: 'rasel', age: 28, postion: 'senior-developer', salary: 50 },
    { name: 'rakib', age: 34, postion: 'ceo', salary: 40 },
    { name: 'abir', age: 27, postion: 'co-founder', salary: 10 },
    { name: 'sakib', age: 21, postion: 'founder', salary: 40 },
    { name: 'jonathon', age: 25, postion: 'boss', salary: 300 },
];

// const dailyTotal = staff.reduce((total, person) => {
//     console.log(total)
//     console.log(person.salary)
//     total += person.salary
//     return total

// }, 100)

// console.log(dailyTotal)


// get total number of a staff array of objects
const dailysalery = staff.reduce((total,person)=>{
    total+=person.salary
    return total 
},0)

console.log(dailysalery)