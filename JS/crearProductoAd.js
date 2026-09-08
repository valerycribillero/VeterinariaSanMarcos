// =========================
// CREAR PRODUCTO
// =========================
let formulario = document.getElementById("formCrearProducto");
// =========================
// CATEGORÍAS
// =========================
let categorias = [
    "Antibióticos",
    "Antiparasitarios",
    "Antiinflamatorios",
    "Dermatología",
    "Digestivo",
    "Cardíaco",
    "Analgésicos",
    "Vacunas",
    "Suplementos"
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
    "Perro / Gato"
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
// GUARDAR PRODUCTO
// =========================
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    // =========================
    // OBTENER DATOS
    // =========================
    let codigo = document.getElementById("codigo").value.trim();
    let categoria = document.getElementById("categoria").value;
    let nombre = document.getElementById("nombre").value.trim();
    let principioActivo = document.getElementById("principioActivo").value.trim();
    let presentacion = document.getElementById("presentacion").value.trim();
    let especie = document.getElementById("especie").value;
    let stock = document.getElementById("stock").value;
    let precio = document.getElementById("precio").value;
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
        alert("Debes ingresar el nombre comercial.");
        return;
    }
    if (principioActivo === "") {
        alert("Debes ingresar el principio activo.");
        return;
    }
    if (presentacion === "") {
        alert("Debes ingresar la presentación.");
        return;
    }
    if (especie === "") {
        alert("Debes seleccionar una especie.");
        return;
    }
    if (stock === "" || Number(stock) < 0) {
        alert("Debes ingresar un stock válido.");
        return;
    }
    if (precio === "" || Number(precio) <= 0) {
        alert("Debes ingresar un precio válido.");
        return;
    }
    // =========================
    // OBTENER PRODUCTOS
    // =========================
    let productos = JSON.parse(
        localStorage.getItem("productos")
    ) || [];
    // =========================
    // VERIFICAR CÓDIGO REPETIDO
    // =========================
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].codigo.toLowerCase() === codigo.toLowerCase()) {
            alert("Ya existe un producto con ese código.");
            return;
        }
    }
    // =========================
    // CREAR ID
    // =========================
    let nuevoId = 1;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id >= nuevoId) {
            nuevoId = productos[i].id + 1;
        }
    }
    // =========================
    // CREAR PRODUCTO
    // =========================
    let nuevoProducto = {
        id: nuevoId,
        codigo: codigo,
        categoria: categoria,
        nombre: nombre,
        principioActivo: principioActivo,
        presentacion: presentacion,
        especie: especie,
        stock: Number(stock),
        precio: Number(precio)
    };
    // =========================
    // AGREGAR PRODUCTO
    // =========================
    productos.push(nuevoProducto);
    // =========================
    // GUARDAR
    // =========================
    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );
    // =========================
    // MOSTRAR MENSAJE
    // =========================
    let mensaje = document.getElementById("mensajeExito");
    mensaje.textContent = "Producto agregado correctamente.";
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