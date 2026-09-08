// ================================================
// 1. FUNCIÓN DE INGRESO / LOGIN
// ================================================
function ingresar() {
    const inputCorreo = document.getElementById("correo");
    const inputClave = document.getElementById("clave");

    // Verificar que los elementos existan en el DOM antes de leer sus valores
    if (!inputCorreo || !inputClave) {
        alert("Los campos de inicio de sesión no se encuentran en esta página.");
        return;
    }

    let correo = inputCorreo.value.trim();
    let clave = inputClave.value;

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
        window.location.href = "veterinaria.html";
    } else if (correo === "usuario@demo.cl" && clave === "5678") {
        window.location.href = "usuario.html";
    } else {
        alert("Hubo un error al intentar ingresar.");
    }
}

// ================================================
// 2. LÓGICA PARA EL FORMULARIO DE CONTACTO (Con LocalStorage)
// ================================================
document.addEventListener("DOMContentLoaded", function () {
    // Busca el formulario de contacto por cualquiera de los dos IDs comunes
    const formularioContacto = document.getElementById("contactForm") || document.getElementById("formContacto");

    if (formularioContacto) {
        formularioContacto.addEventListener("submit", function (e) {
            e.preventDefault();

            let inputNombre = document.getElementById("nombre");
            let inputCorreo = document.getElementById("correo") || document.getElementById("correoContacto");
            let inputComentario = document.getElementById("comentario") || document.getElementById("mensaje");

            let nombre = inputNombre ? inputNombre.value.trim() : "";
            let correo = inputCorreo ? inputCorreo.value.trim() : "";
            let comentario = inputComentario ? inputComentario.value.trim() : "";

            // Validaciones
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

            if (comentario === "") {
                alert("Por favor, escribe un comentario o mensaje.");
                return;
            }

            // Guardar el mensaje en localStorage
            const mensajeObj = {
                nombre: nombre,
                correo: correo,
                comentario: comentario,
                fecha: new Date().toLocaleString()
            };

            let mensajes = JSON.parse(localStorage.getItem('mensajesContacto')) || [];
            mensajes.push(mensajeObj);
            localStorage.setItem('mensajesContacto', JSON.stringify(mensajes));

            alert("¡Gracias por contactarnos, " + nombre + "! Tu mensaje ha sido guardado con éxito.");
            formularioContacto.reset();
        });
    }
});
