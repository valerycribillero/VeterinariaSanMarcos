// ================================================
// 1. FUNCIÓN DE INGRESO / LOGIN (Lógica solicitada)
// ================================================
function ingresar() {
    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value;

    if (correo === "") {
        alert("El correo es obligatorio.");
    } else if (correo.length > 100) {
        alert("El correo no puede superar los 100 caracteres.");
    } else if (
        !correo.endsWith("@duoc.cl") &&
        !correo.endsWith("@profesor.duoc.cl") &&
        !correo.endsWith("@gmail.com")
    ) {
        alert("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    } else if (clave === "") {
        alert("La contraseña es obligatoria.");
    } else if (clave.length < 4 || clave.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.");
    } else if (correo === "adri@gmail.com" && clave === "1234") {
        window.location.href = "veterinaria.html"; // Redirige a pantalla de inicio
    } else if (correo === "usuario@demo.cl" && clave === "5678") {
        window.location.href = "usuario.html";
    } else {
        alert("Hubo un error al intentar ingresar.");
    }
}

// ================================================
// 2. LÓGICA PARA EL FORMULARIO DE CONTACTO
// ================================================
document.addEventListener("DOMContentLoaded", function () {
    const formularioContacto = document.getElementById("formContacto");

    if (formularioContacto) {
        formularioContacto.addEventListener("submit", function (e) {
            e.preventDefault();

            let nombre = document.getElementById("nombre") ? document.getElementById("nombre").value.trim() : "";
            let correo = document.getElementById("correoContacto") ? document.getElementById("correoContacto").value.trim() : "";
            let mensaje = document.getElementById("mensaje") ? document.getElementById("mensaje").value.trim() : "";

            if (nombre === "") {
                alert("Por favor, ingresa tu nombre.");
                return;
            }

            if (correo === "") {
                alert("El correo electrónico es obligatorio.");
                return;
            }

            if (
                !correo.endsWith("@duoc.cl") &&
                !correo.endsWith("@profesor.duoc.cl") &&
                !correo.endsWith("@gmail.com")
            ) {
                alert("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
                return;
            }

            if (mensaje === "") {
                alert("Por favor, escribe un mensaje.");
                return;
            }

            alert("¡Gracias por contactarnos, " + nombre + "! Hemos recibido tu mensaje correctamente.");
            formularioContacto.reset();
        });
    }
});