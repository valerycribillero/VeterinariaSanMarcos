
/* =========================
   CARGAR PERFIL
========================= */

let perfil = JSON.parse(localStorage.getItem("perfilAdmin"));

if (!perfil) {
    perfil = {
        nombre: "Administrador",
        apellido: "San Marcos",
        correo: "admin@veterinariasanmarcos.cl",
        telefono: "",
        rol: "Administrador",
        usuario: "admin",
        password: "123456"
    };

    localStorage.setItem(
        "perfilAdmin",
        JSON.stringify(perfil)
    );
}


/* =========================
   MOSTRAR DATOS ACTUALES
========================= */

document.getElementById("nombreActual").textContent =
    perfil.nombre + " " + perfil.apellido;

document.getElementById("usuarioActual").textContent =
    perfil.usuario;

document.getElementById("rolActual").textContent =
    perfil.rol;


/* =========================
   CARGAR DATOS EN FORMULARIO
========================= */

document.getElementById("nombre").value =
    perfil.nombre;

document.getElementById("apellido").value =
    perfil.apellido;

document.getElementById("correo").value =
    perfil.correo;

document.getElementById("telefono").value =
    perfil.telefono || "";

document.getElementById("usuario").value =
    perfil.usuario;

document.getElementById("rol").value =
    perfil.rol;


/* =========================
   FORMULARIO
========================= */

let formulario = document.getElementById("formEditarPerfil");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let usuario = document.getElementById("usuario").value.trim();

    let password = document.getElementById("password").value;
    let confirmarPassword = document.getElementById("confirmarPassword").value;


    /* =========================
       VALIDAR DATOS
    ========================= */

    if (nombre === "") {
        alert("Debes ingresar tu nombre.");
        return;
    }

    if (apellido === "") {
        alert("Debes ingresar tu apellido.");
        return;
    }

    if (correo === "") {
        alert("Debes ingresar tu correo.");
        return;
    }

    if (usuario === "") {
        alert("Debes ingresar tu usuario.");
        return;
    }


    /* =========================
       VALIDAR CONTRASEÑA
    ========================= */

    if (password !== "") {

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmarPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        perfil.password = password;
    }


    /* =========================
       ACTUALIZAR PERFIL
    ========================= */

    perfil.nombre = nombre;
    perfil.apellido = apellido;
    perfil.correo = correo;
    perfil.telefono = telefono;
    perfil.usuario = usuario;


    /* =========================
       GUARDAR DATOS
    ========================= */

    localStorage.setItem(
        "perfilAdmin",
        JSON.stringify(perfil)
    );


    /* =========================
       VOLVER AL PERFIL
    ========================= */

    window.location.href = "perfilAdmin.html";

});

