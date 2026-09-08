// =========================
// CREAR SERVICIO
// =========================
let formulario = document.getElementById("formCrearServicio");
// =========================
// CATEGORÍAS
// =========================
let categorias = [
    "Consultas",
    "Vacunación",
    "Cirugía",
    "Desparasitación",
    "Exámenes",
    "Otros"
];
let selectCategoria = document.getElementById("categoria");
for (let i = 0; i < categorias.length; i++) {
    selectCategoria.innerHTML += `
        <option value="${categorias[i]}">
            ${categorias[i]}
        </option>
    `;
}
// =========================
// ESPECIES
// =========================
let especies = [
    "Perro",
    "Gato",
    "Perro / Gato",
    "Ave / Conejo",
    "Todas"
];
let selectEspecie = document.getElementById("especie");
for (let i = 0; i < especies.length; i++) {
    selectEspecie.innerHTML += `
        <option value="${especies[i]}">
            ${especies[i]}
        </option>
    `;
}
// =========================
// GUARDAR SERVICIO
// =========================
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    // =========================
    // OBTENER DATOS
    // =========================
    let codigo = document.getElementById("codigo").value.trim();
    let categoria = document.getElementById("categoria").value;
    let nombre = document.getElementById("nombre").value.trim();
    let especie = document.getElementById("especie").value;
    let duracion = document.getElementById("duracion").value.trim();
    let precio = document.getElementById("precio").value;
    let observaciones = document.getElementById("observaciones").value.trim();
    // =========================
    // VALIDACIONES
    // =========================
    if (codigo === "") {
        alert("Debes ingresar un código.");
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
    // =========================
    // OBTENER SERVICIOS
    // =========================
    let servicios = JSON.parse(
        localStorage.getItem("servicios")
    ) || [];
    // =========================
    // VERIFICAR CÓDIGO REPETIDO
    // =========================
    for (let i = 0; i < servicios.length; i++) {
        if (servicios[i].codigo.toLowerCase() === codigo.toLowerCase()) {
            alert("Ya existe un servicio con ese código.");
            return;
        }
    }
    // =========================
    // CREAR ID
    // =========================
    let nuevoId = 1;
    for (let i = 0; i < servicios.length; i++) {
        if (servicios[i].id >= nuevoId) {
            nuevoId = servicios[i].id + 1;
        }
    }
    // =========================
    // CREAR SERVICIO
    // =========================
    let nuevoServicio = {
        id: nuevoId,
        codigo: codigo,
        categoria: categoria,
        nombre: nombre,
        especie: especie,
        duracion: duracion,
        precio: Number(precio),
        observaciones: observaciones
    };
    // =========================
    // AGREGAR SERVICIO
    // =========================
    servicios.push(nuevoServicio);
    // =========================
    // GUARDAR
    // =========================
    localStorage.setItem(
        "servicios",
        JSON.stringify(servicios)
    );
    // =========================
    // MOSTRAR MENSAJE
    // =========================
    let mensaje = document.getElementById("mensajeExito");
    mensaje.textContent = "Servicio agregado correctamente.";
    mensaje.style.display = "block";
    // =========================
    // LIMPIAR FORMULARIO
    // =========================
    formulario.reset();
});
/* =========================
   CERRAR SESIÓN
========================= */
function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    window.location.href = "../HTML/veterinaria.html";
}