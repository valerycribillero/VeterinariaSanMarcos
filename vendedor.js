/* =========================
PROTEGER PANEL VENDEDOR
========================= */
let usuarioActual = JSON.parse(
    localStorage.getItem("usuarioActual")
);
/* Si no hay usuario conectado, volver al login */
if (!usuarioActual) {
    window.location.href = "login.html";
}
/* Si no es Vendedor, no puede entrar */
if (usuarioActual.rol !== "Vendedor") {
    alert("No tienes permiso para acceder a esta página.");
    window.location.href = "admin.html";
}