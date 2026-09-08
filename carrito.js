let carrito = JSON.parse(
    localStorage.getItem("carrito")
) || [];

let botonAgregar = document.getElementById("btnAgregar");

if (botonAgregar) {
    botonAgregar.addEventListener(
        "click",
        agregarAlCarrito
    );
}

function agregarAlCarrito() {

    let productoActual = JSON.parse(
        localStorage.getItem("producto")
    );

    if (!productoActual) {
        alert("No se encontró el producto.");
        return;
    }

    let cantidad = parseInt(
        document.getElementById("cantidad").value
    );

    if (cantidad < 1 || isNaN(cantidad)) {
        alert("La cantidad debe ser mayor a 0.");
        return;
    }

    let precioTexto = productoActual.precioUni;

    let precio = convertirPrecio(precioTexto);

    let productoCarrito = {
        nombre: productoActual.nombreCom,
        precio: precio,
        especie: productoActual.especie,
        categoria: productoActual.categoria,
        cantidad: cantidad
    };

    let productoExistente = carrito.find(
        function(producto) {
            return producto.nombre ===
                productoCarrito.nombre;
        }
    );

    if (productoExistente) {

        productoExistente.cantidad += cantidad;

    } else {

        carrito.push(productoCarrito);

    }

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    mostrarCarrito();

    let mensaje = document.getElementById(
        "mensajeCarrito"
    );

    if (mensaje) {
        mensaje.textContent =
            "✓ Producto agregado al carrito";
    }
}


function convertirPrecio(precioTexto) {

    let texto = String(precioTexto);

    texto = texto.replace("$", "");

    texto = texto.replace(/\./g, "");

    texto = texto.replace(",", ".");

    return parseFloat(texto);
}


// ==========================================
// MOSTRAR CARRITO
// ==========================================

function mostrarCarrito() {

    let lista = document.getElementById(
        "listaCarrito"
    );

    if (!lista) {
        return;
    }

    lista.innerHTML = "";

    if (carrito.length === 0) {

        lista.innerHTML =
            "<p>Tu carrito está vacío.</p>";

        actualizarTotal();

        return;
    }

    for (let producto of carrito) {

        let subtotal =
            producto.precio *
            producto.cantidad;

        let productoHTML = document.createElement(
            "div"
        );

        productoHTML.classList.add(
            "producto-carrito"
        );

        productoHTML.innerHTML = `
            <h3>${producto.nombre}</h3>

            <p>
                Especie: ${producto.especie}
            </p>

            <p>
                Categoría: ${producto.categoria}
            </p>

            <p>
                Precio: $${producto.precio}
            </p>

            <p>
                Cantidad: ${producto.cantidad}
            </p>

            <p>
                Subtotal: $${subtotal}
            </p>

            <button onclick="eliminarProducto('${producto.nombre}')">
                🗑️ Eliminar
            </button>
    `;

        lista.appendChild(
            productoHTML
        );
    }

    actualizarTotal();
}


// ==========================================
// CALCULAR TOTAL
// ==========================================

function actualizarTotal() {

    let totalElemento =
        document.getElementById(
            "totalCarrito"
        );

    if (!totalElemento) {
        return;
    }

    let total = 0;

    for (let producto of carrito) {

        total +=
            producto.precio *
            producto.cantidad;
    }

    totalElemento.textContent =
        "$" + total;
}


// ==========================================
// CONTADOR DEL CARRITO
// ==========================================

function actualizarContador() {

    let contador =
        document.getElementById(
            "cantidadCarrito"
        );

    if (!contador) {
        return;
    }

    let cantidadTotal = 0;

    for (let producto of carrito) {

        cantidadTotal +=
            producto.cantidad;
    }

    contador.textContent =
        cantidadTotal;
}


// ==========================================
// INICIAR
// ==========================================

actualizarContador();

mostrarCarrito();

actualizarTotal();

let btnPagar = document.getElementById("btnPagar");
let seccionPago = document.getElementById("seccionPago");

if (btnPagar) {
    btnPagar.addEventListener("click", function() {
        seccionPago.style.display = "block";
    });
}

function eliminarProducto(nombre) {

    carrito = carrito.filter(function(producto) {
        return producto.nombre !== nombre;
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();

    actualizarContador();

    actualizarTotal();
}