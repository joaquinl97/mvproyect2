// cuenta
let emailLogin = document.getElementById('email');
let passwordLogin = document.getElementById('password');

//Nueva cuenta
let emailRegister = document.getElementById('emailRegister');
let passwordRegister = document.getElementById('passwordRegister');
let nameRegister = document.getElementById('nameRegister');

//Buttons
let registerButton = document.getElementById('registerButton');
let loginButton = document.getElementById('loginButton');

let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

//Function  register
registerButton.addEventListener('click', () => {
    if (emailRegister.value != "" && passwordRegister.value != "" && nameRegister.value != "") {
        users.push({
            id: Math.round(Math.random() * 1000000),
            sesion: false,
            name: nameRegister.value,
            email: emailRegister.value,
            password: passwordRegister.value,
        })
        localStorage.setItem("users", JSON.stringify(users));
        name.value = '';
        email.value = '';
        password.value = '';
        swal("Registrado", "Su cuenta fue creada con Exito", "success");

    } else {
        swal("Error", "Ingrese sus datos", "error");
    }

})

const admins = [
    'mica@gmail.com',
    'alvaro@gmail.com',
    'joaquin@gmail.com',
    'augusto@gmail.com',
    'vicky@gmail.com',
    'fabrizio@gmail.com',
]

//Function login 
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let email = emailLogin.value;
    let pass = passwordLogin.value;
    if (emailLogin.value != "" && passwordLogin.value != "") {
        let logged = false;
        let response = JSON.parse(localStorage.getItem("users"));
        let userSesion = response.map((item) => {
            if (item.email === emailLogin.value && item.password === passwordLogin.value) {
                let isAdmin = false;

                if (admins.indexOf(emailLogin.value) >= 0) { //verificar admins
                    isAdmin = true;
                }

                let update = {
                    ...item,
                    sesion: true,
                    isAdmin: isAdmin
                }

                logged = true;
                return update;
            } else {
                return item;
            }
        })
        if (logged) { // Aca van las cuentas admin, antes hay que crearlas desde el registrar para que funcionen
            localStorage.setItem("users", JSON.stringify(userSesion));

            // DIRECCION HTML DE LA PAGINA USER
            window.location.href = "/index.html";

        } else {
            swal("Error", "credenciales incorrectas", "error");
        }
    } else {
        swal("Error", "Ingrese sus credenciales", "error");
    }
})