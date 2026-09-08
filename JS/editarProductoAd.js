const formulario = document.getElementById("formEditarProducto");
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");
let productos = JSON.parse(localStorage.getItem("productos")) || [];
const indice = productos.findIndex(producto => producto.id == id);
if (indice === -1) {
    alert("No se encontró el producto.");
    window.location.href = "admin.html";
} else {
    const producto = productos[indice];
    document.getElementById("codigo").value = producto.codigo;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("stock").value = producto.stock;
    document.getElementById("descripcion").value = producto.descripcion;
}
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const codigo = document.getElementById("codigo").value.trim();
    const categoria = document.getElementById("categoria").value;
    const nombre = document.getElementById("nombre").value.trim();
    const precio = Number(document.getElementById("precio").value);
    const stock = Number(document.getElementById("stock").value);
    const descripcion = document.getElementById("descripcion").value.trim();
    if (codigo === "" || categoria === "" || nombre === "" || descripcion === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    if (precio < 0 || stock < 0) {
        alert("El precio y el stock no pueden ser negativos.");
        return;
    }
    const codigoExiste = productos.some((producto, i) =>
        i !== indice &&
        producto.codigo.toLowerCase() === codigo.toLowerCase()
    );
    if (codigoExiste) {
        alert("Ya existe otro producto con ese código.");
        return;
    }
    productos[indice] = {
        ...productos[indice],
        codigo: codigo,
        categoria: categoria,
        nombre: nombre,
        precio: precio,
        stock: stock,
        descripcion: descripcion
    };
    localStorage.setItem("productos", JSON.stringify(productos));
    alert("Producto actualizado correctamente.");
    window.location.href = "admin.html";
});
