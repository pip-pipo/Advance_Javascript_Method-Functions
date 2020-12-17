// example with text file


const gettext = document.getElementById('gettext');
// unseing arrow function
// const getText = ()=>{
//     fetch('./text.txt')
//     .then(res => {
//         return res.text();
//     })
//     .then(data => {
//         console.log(data);
//     })

// }
gettext.addEventListener('click', getText)

// function getText() {

//     fetch('text.txt', {
//         method: 'GET',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             "Content-Type": "text/plain"
//         }})
//         .then(res => {
//             console.log(res)
//         })

//     fetch('https://opentdb.com/api.php?amount=10',()=>{

//     }).then(res =>{
//         console.log(res)

//     }).then(data =>{
//         console.log(data)
//     })

// }

// function useing
// function getText() {


//     fetch('./text.txt')
//         .then(res => {
//             return res.text();
//         })
//         .then(data => {
//             console.log(data);
//         })
// }



// fetch('users.json')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=> {
//     console.log(err)
// })



// function getText(){
//     fetch("users.json")
//     .then((res)=> res.json())
//     .then((data)=>{

//         let output =  data;
//         console.log(output)
//         console.log(output)
//         output.forEach(user => {
//             valur += `

//                 <ul> 
//                     <li> ${user} </li>
//                 </ul>

//             `;
//         });
//         document.querySelector('.fetchData').innerHTML=output
//     })
// }



// example with .json file


// async function getUsers() {
//     let url = './users.json';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }


// async function renderUser(){
//     let users = await getUsers();
//     let html = '';
//     users.forEach(user => {
//         let htmlSegment = `<div class="user">
//                             <img src="${user.profileURL}" >
//                             <h2>${user.firstName} ${user.lastName}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                         </div>`;
//         html+=htmlSegment;
//     });

//     let constiner = document.querySelector('div');
//     constiner.innerHtml = html;
// }

// renderUser();





// function getText() {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json)
//             const outputdata = document.querySelector('.fetchData');
//             let data = json;
//             let i = data.forEach(item => {
//                 console.log(item)
//             });
//         });
// }





function getText(){
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        let output = `<h2 class="text-center">Posts</h2>`;
       data.forEach(user => {
            output += `
                <div class="border"> 
                <h2>${user.userId}</h2>
                <h2>${user.id}</h2>
                <h2>${user.title}</h2>
                <h2>${user.completed}</h2>
                </div>
            `
        });

   
        document.querySelector('.fetchData').innerHTML = output
    })
}

