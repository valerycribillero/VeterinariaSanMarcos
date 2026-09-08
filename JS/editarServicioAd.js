console.log("editarServicioAd.js cargado correctamente");
let formulario = document.getElementById("formEditarServicio");
// =========================
// OBTENER ID DEL SERVICIO
// =========================
let parametros = new URLSearchParams(window.location.search);
let id = Number(parametros.get("id"));
// =========================
// OBTENER SERVICIOS
// =========================
let servicios = JSON.parse(
    localStorage.getItem("servicios")
) || [];
// =========================
// BUSCAR SERVICIO
// =========================
let servicioEditar = null;
for (let i = 0; i < servicios.length; i++) {
    if (servicios[i].id === id) {
        servicioEditar = servicios[i];
        break;
    }
}
// =========================
// COMPROBAR SERVICIO
// =========================
if (!servicioEditar) {
    alert("No se encontró el servicio a editar.");
    window.location.href = "serviciosAd.html";
} else {
    // =========================
    // CARGAR DATOS
    // =========================
    document.getElementById("id").value =
        servicioEditar.id || "";
    document.getElementById("codigo").value =
        servicioEditar.codigo || "";
    document.getElementById("categoria").value =
        servicioEditar.categoria || "";
    document.getElementById("nombre").value =
        servicioEditar.nombre || "";
    document.getElementById("especie").value =
        servicioEditar.especie || "";
    document.getElementById("duracion").value =
        servicioEditar.duracion || "";
    document.getElementById("precio").value =
        servicioEditar.precio || "";
    document.getElementById("observaciones").value =
        servicioEditar.observaciones || "";
    // =========================
    // GUARDAR CAMBIOS
    // =========================
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        let codigo =
            document.getElementById("codigo").value.trim();
        let categoria =
            document.getElementById("categoria").value;
        let nombre =
            document.getElementById("nombre").value.trim();
        let especie =
            document.getElementById("especie").value;
        let duracion =
            document.getElementById("duracion").value.trim();
        let precio =
            document.getElementById("precio").value;
        let observaciones =
            document.getElementById("observaciones").value.trim();
        // =========================
        // VALIDACIONES
        // =========================
        if (codigo === "") {
            alert("Debes ingresar el código.");
            return;
        }
        if (categoria === "") {
            alert("Debes seleccionar una categoría.");
            return;
        }
        if (nombre === "") {
            alert("Debes ingresar el nombre del servicio.");
            return;
        }
        if (nombre.length > 100) {
            alert("El nombre no puede superar los 100 caracteres.");
            return;
        }
        if (especie === "") {
            alert("Debes seleccionar una especie.");
            return;
        }
        if (duracion === "") {
            alert("Debes ingresar la duración.");
            return;
        }
        if (precio === "" || Number(precio) <= 0) {
            alert("Debes ingresar un precio válido.");
            return;
        }
        if (observaciones.length > 500) {
            alert("Las observaciones no pueden superar los 500 caracteres.");
            return;
        }
        // =========================
        // MODIFICAR SERVICIO
        // =========================
        for (let i = 0; i < servicios.length; i++) {
            if (servicios[i].id === id) {
                servicios[i].codigo = codigo;
                servicios[i].categoria = categoria;
                servicios[i].nombre = nombre;
                servicios[i].especie = especie;
                servicios[i].duracion = duracion;
                servicios[i].precio = Number(precio);
                servicios[i].observaciones = observaciones;
                break;
            }
        }
        // =========================
        // GUARDAR
        // =========================
        localStorage.setItem(
            "servicios",
            JSON.stringify(servicios)
        );
        alert("Servicio actualizado correctamente.");
        window.location.href = "serviciosAd.html";
    });
}
/* =========================
   CERRAR SESIÓN
========================= */
function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    window.location.href = "../HTML/veterinaria.html";
}