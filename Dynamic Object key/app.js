// const person = {
//     name: 'john',
// }

// console.log(person.name)
// person.age = 25;
// const items = {
//     'feature-item': ['item1', 'item2', 'itme3']
// }

// console.log(items["feature-item"].join('*'))
// console.log(person.name)

// keyname = 'hello';
// let state = 'loading';

// const app = {
//     [state]:true,
// }

// app[keyname] = 'apple';


// console.log(app)


// update object dynamicaly

const state = {
    loading:true,
    name:'',
    job:'',
}

function udpade(key,value){
    state[key]=value;

}

udpade('name','jhone')
udpade('job','developer')
udpade('inserupdate',[])




console.log(state)
