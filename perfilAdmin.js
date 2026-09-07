
// =========================
// MOSTRAR PERFIL
// =========================

let perfil = JSON.parse(localStorage.getItem("perfilAdmin"));

if (!perfil) {
    perfil = {
        nombre: "Administrador",
        apellido: "San Marcos",
        correo: "admin@veterinariasanmarcos.cl",
        telefono: "",
        rol: "Administrador",
        usuario: "admin"
    };
}

document.getElementById("nombreCompleto").textContent =
    perfil.nombre + " " + perfil.apellido;

document.getElementById("rolUsuario").textContent =
    perfil.rol;

document.getElementById("nombre").textContent =
    perfil.nombre;

document.getElementById("apellido").textContent =
    perfil.apellido;

document.getElementById("correo").textContent =
    perfil.correo;

document.getElementById("telefono").textContent =
    perfil.telefono || "No registrado";

document.getElementById("usuario").textContent =
    perfil.usuario;

document.getElementById("rol").textContent =
    perfil.rol;

