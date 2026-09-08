/* =========================
   FORMULARIO DE CONTACTO
========================= */

let formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let comentario = document.getElementById("comentario").value.trim();

    /* Validar nombre */

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    if (nombre.length > 100) {
        alert("El nombre no puede superar los 100 caracteres.");
        return;
    }

    /* Validar correo */

    if (correo === "") {
        alert("El correo electrónico es obligatorio.");
        return;
    }

    if (correo.length > 100) {
        alert("El correo no puede superar los 100 caracteres.");
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

    /* Validar comentario */

    if (comentario === "") {
        alert("Por favor, escribe un mensaje.");
        return;
    }

    if (comentario.length > 500) {
        alert("El mensaje no puede superar los 500 caracteres.");
        return;
    }

    /* Obtener mensajes guardados */

    let mensajes = JSON.parse(
        localStorage.getItem("mensajesContacto")
    ) || [];

    /* Crear nuevo mensaje */

    let nuevoMensaje = {
        nombre: nombre,
        correo: correo,
        comentario: comentario,
        fecha: new Date().toLocaleString()
    };

    /* Guardar mensaje */

    mensajes.push(nuevoMensaje);

    localStorage.setItem(
        "mensajesContacto",
        JSON.stringify(mensajes)
    );

    alert("¡Mensaje enviado correctamente!");

    /* Limpiar formulario */

    formulario.reset();
});

