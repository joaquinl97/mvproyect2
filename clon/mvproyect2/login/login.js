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

let users = []

//Function  register
registerButton.addEventListener ('click', () => {
    if (emailRegister.value != "" && passwordRegister.value != "" && nameRegister.value != "") {
        users.push({
            id: Math.round(Math.random() * 1000000),
            sesion: false,
            name: nameRegister.value,
            email: emailRegister.value,
            password: passwordRegister.value,
        })
        localStorage.setItem("users", JSON.stringify(users));
        swal("Registrado", "Su cuenta fue creada con Exito", "success");
    } else {
      swal ("Error", "Ingrese sus datos", "error");
    }
})


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
                let update = {
                    ...item,
                    sesion: true,
                }
                logged = true;
                return update;
            } else {
                return item;
            }
        })

        if (logged) { // Aca van las cuentas admin, antes hay que crearlas desde el registrar para que funcionen
            if (emailLogin.value == "admin" && passwordLogin.value == "admin" || emailLogin.value == "admin1" && passwordLogin.value == "admin1"){
                // DIRECCION HTML DE LA PAGINA ADMIN
                window.location.href = "";
                
            }
            else {
                localStorage.setItem("users", JSON.stringify(userSesion));
                // DIRECCION HTML DE LA PAGINA USER
                window.location.href = "";
                
            }
            
        } else {
            swal("Error", "credenciales incorrectas", "error");
        }
    } else {
        swal("Error", "Ingrese sus credenciales", "error");
    }
})