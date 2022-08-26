// import Cookies from './js.cookie.min'

// let host = "http://127.0.0.1:8000/";
// let loginUrl = host + "api/v1/login";
// let loginForm = document.getElementById('loginForm');

// loginForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let formData = new FormData(this);
//     console.log(formData.get('email'), formData.get('password'));

//     fetch(loginUrl, {
//             method: "POST",
//             body: formData
//         })
//         .then(res => res.json())
//         .then(json => {
//             if (json.hasOwnProperty('token')) {
//                 Cookies.set('token', json.token)
//                 console.log(json);
//                 location.href = 'home.html'
//             } else {
//                 console.log(json.errors);
//             }
//         })
// })