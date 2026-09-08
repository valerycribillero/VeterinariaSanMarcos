
/* =========================
   VERIFICAR USUARIO
========================= */

let usuarioActual = JSON.parse(
    localStorage.getItem("usuarioActual")
);

if (!usuarioActual) {
    window.location.href = "login.html";
}

if (usuarioActual.rol !== "Vendedor") {
    window.location.href = "veterinaria.html";
}

/* =========================
   MOSTRAR DATOS
========================= */

document.getElementById("nombreCompleto").textContent =
    usuarioActual.nombre + " " + usuarioActual.apellidos;

document.getElementById("rolUsuario").textContent =
    usuarioActual.rol;

document.getElementById("nombre").textContent =
    usuarioActual.nombre || "-";

document.getElementById("apellido").textContent =
    usuarioActual.apellidos || "-";

document.getElementById("correo").textContent =
    usuarioActual.correo || "-";

document.getElementById("telefono").textContent =
    usuarioActual.telefono || "-";

document.getElementById("run").textContent =
    usuarioActual.run || "-";

document.getElementById("rol").textContent =
    usuarioActual.rol || "-";

/* =========================
   CERRAR SESIÓN
========================= */

function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    window.location.href = "../HTML/veterinaria.html";
}

