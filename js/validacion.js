function showAlertSuccess() {
    window.location.href = './recetas.html'
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// const nombre = document.getElementById('nombre');
// const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
// const password2 = document.getElementById('password2');
// const checkbox = document.getElementById('terminos');
const boton = document.getElementById('regBtn');

boton.addEventListener("click", function () {
    if (email.value == "" || password1.value.length < 6)  {
         showAlertError()
    }  
    else { 
        showAlertSuccess()
    }
})