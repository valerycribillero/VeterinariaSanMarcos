function ingresar(){
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    if (correo === "" || clave === ""){
        alert("Debe completar todos los campos")
        return;
    }

    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (clave.length !== 4){
        alert("La clave debe ser de 4 caracteres");
        return;
    }
        //entrada usuario
    if (correo === "adri@gmail.cl" && clave === "1234"){
        window.location.href = "veterinaria.html"; // se debe hacer una pantalla de usuario
    }
    // else if (correo === "usuario@demo.cl" && clave === "5678") //debemos hacer cuentas especificas para los distintos usuarios
    //     window.location.href = "usuario.html";
    else{
        alert("Hubo un error al intentar ingresar.");
    }
}