let exitButton = document.getElementById('exitButton');

let getUsers = JSON.parse(localStorage.getItem('users')) || [];
let user = getUsers.find((item) => item.sesion === true) || null;

function Main() {
    SesionOpen()
}

function SesionOpen() {
    if (getUsers !== [] && user !== null) {
        if (user.sesion !== true) {
            window.location.href = 'Login/login.html';
        } else {
            // SessionSeVence()
        }
    } else {
        window.location.href = 'Login/login.html';
    }
}

exitButton.addEventListener('click', () => {
    ExitSesion()
})

function SessionSeVence() {
    setTimeout(() => {
        ExitSesion()
    }, 120000);
}

function ExitSesion() {
    let response = getUsers.map((item) => {
        if (item.id === user.id) {
            let myUser = {
                ...item,
                sesion: false
            }
            return myUser;
        } else {
            return item;
        }
    })
    localStorage.setItem('users', JSON.stringify(response));
    window.location.href = 'Login/login.html';
}

Main()