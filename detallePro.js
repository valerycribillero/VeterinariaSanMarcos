let producto = JSON.parse(
    localStorage.getItem("producto")
);

if (!producto) {
    alert("No se encontró el producto.");
} else {
    document.getElementById("nombreCom").textContent =
        producto.nombreCom;


    document.getElementById("precioUni").textContent =
        producto.precioUni;


    document.getElementById("especie").textContent =
        producto.especie;


    document.getElementById("principioAct").textContent =
        producto.principioAct;


    document.getElementById("presentacion").textContent =
        producto.presentacion;


    document.getElementById("categoria").textContent =
        producto.categoria;


    document.getElementById("stock").textContent =
        producto.stock;

}
