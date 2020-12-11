const people = [
    {
        name: 'imran',
        age: 23,
        position: 'employ'
    },
    {
        name: 'rakib',
        age: 35,
        position: 'senior Developer'
    }, {
        name: 'forid',
        age: 22,
        position: 'developer'
    }, {
        name: 'nasim',
        age: 44,
        position: 'bose'
    }
]




// const ages = people.map((person)=>{
//     console.log(person);
//     return 'hello worldd';
// })

// console.log(ages)
// const personage = (person) => person.age *2 ;


// const ages = people.map((personage));

// console.log(ages)



// const newpeole = people.map((item) =>{
//     return {
//         firstName:item.name.toUpperCase(),
//         oldAge : item.age + 20 ,
//     }
// })

// console.log(newpeole)



// const name = people.map((person)=> `<h2>${person.name.toUpperCase()}</h2>`);


// const text =document.querySelector('.text');



// console.log(text)


const data = people.map((item) => {
    return `
        ${item.name.toUpperCase()} </br>
    `
});



const id = document.getElementById('data');




id.innerHTML = data.join('');