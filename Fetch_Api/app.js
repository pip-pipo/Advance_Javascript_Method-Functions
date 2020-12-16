// example with text file


// const gettext = document.getElementById('gettext');

// gettext.addEventListener('click', getText)



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


// json example






