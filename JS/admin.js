/* =========================
PROTEGER PANEL ADMINISTRADOR
========================= */
let usuarioActual = JSON.parse(
    localStorage.getItem("usuarioActual")
);

/* Si no hay usuario conectado, volver al login */

if (!usuarioActual) {
    window.location.href = "login.html";
}
/* Si no es Administrador, no puede entrar */

if (usuarioActual.rol !== "Administrador") {
    alert("No tienes permiso para acceder a esta página.");
    window.location.href = "vendedor.html";
}
/* =========================
   CERRAR SESIÓN
========================= */
function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    window.location.href = "../HTML/veterinaria.html";
}
