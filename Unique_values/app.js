const values = [
    {
        name: 'burger',
        category: 'breakfast'
    },
    {
        name: 'eggs',
        category: 'dinner'
    },
    {
        name: 'becon',
        category: 'breakfast'
    },
    {
        name: 'pasta',
        category: 'breakfast'
    },
    {
        name: 'pizza',
        category: 'launch'
    },
    {
        name: 'noodloos',
        category: 'launch'
    },
    
    
];
const field = document.querySelector('.field');

const categories = ['all',...new Set(values.map((item)=> item.category))] ;
field.innerHTML = categories
.map((category) => {
    return `<button>${category}</button>`
})
.join('');
console.log(categories)