
/* =========================
   VERIFICAR USUARIO
========================= */

let usuarioActual = JSON.parse(
    localStorage.getItem("usuarioActual")
);

if (!usuarioActual) {
    window.location.href = "login.html";
}

if (usuarioActual.rol === "Cliente") {
    window.location.href = "tienda.html";
}

if (
    usuarioActual.rol !== "Administrador" &&
    usuarioActual.rol !== "Vendedor"
) {
    window.location.href = "veterinaria.html";
}

/* =========================
   PRODUCTOS
========================= */

let productos = JSON.parse(
    localStorage.getItem("productos")
);

if (!productos || productos.length === 0) {
    productos = [
        {
            id: 1,
            codigo: "ME001",
            categoria: "Antibióticos",
            nombre: "Amoxibay 250mg",
            principioActivo: "Amoxicilina",
            presentacion: "Blíster 10 comp.",
            especie: "Perro / Gato",
            stock: 45,
            precio: 4200
        },
        {
            id: 2,
            codigo: "ME002",
            categoria: "Antibióticos",
            nombre: "Enrox 50mg",
            principioActivo: "Enrofloxacino",
            presentacion: "Blíster 10 comp.",
            especie: "Perro / Gato",
            stock: 30,
            precio: 6800
        },
        {
            id: 3,
            codigo: "ME003",
            categoria: "Antibióticos",
            nombre: "Metrobay 250mg",
            principioActivo: "Metronidazol",
            presentacion: "Blíster 10 comp.",
            especie: "Perro / Gato",
            stock: 28,
            precio: 3900
        },
        {
            id: 4,
            codigo: "ME004",
            categoria: "Antiparasitarios",
            nombre: "Nexgard",
            principioActivo: "Afoxolaner",
            presentacion: "Masticable 1 unid.",
            especie: "Perro",
            stock: 60,
            precio: 9500
        },
        {
            id: 5,
            codigo: "ME005",
            categoria: "Antiparasitarios",
            nombre: "Bravecto",
            principioActivo: "Fluralaner",
            presentacion: "Masticable 1 unid.",
            especie: "Perro",
            stock: 40,
            precio: 18900
        },
        {
            id: 6,
            codigo: "ME006",
            categoria: "Antiparasitarios",
            nombre: "Revolution Plus",
            principioActivo: "Selamectina + Sarolaner",
            presentacion: "Pipeta 1 unid.",
            especie: "Gato",
            stock: 35,
            precio: 14500
        },
        {
            id: 7,
            codigo: "ME007",
            categoria: "Antiparasitarios",
            nombre: "Drontal Plus",
            principioActivo: "Praziquantel + Pamoato",
            presentacion: "Comprimido 1 unid.",
            especie: "Perro",
            stock: 80,
            precio: 3200
        },
        {
            id: 8,
            codigo: "ME008",
            categoria: "Antiparasitarios",
            nombre: "Milbemax Gato",
            principioActivo: "Milbemicina + Praziq.",
            presentacion: "Comprimido 2 unid.",
            especie: "Gato",
            stock: 50,
            precio: 6800
        },
        {
            id: 9,
            codigo: "ME009",
            categoria: "Antiinflamatorios",
            nombre: "Meloxicam 1mg",
            principioActivo: "Meloxicam",
            presentacion: "Blíster 10 comp.",
            especie: "Perro / Gato",
            stock: 55,
            precio: 4500
        },
        {
            id: 10,
            codigo: "ME010",
            categoria: "Antiinflamatorios",
            nombre: "Carprofen 50mg",
            principioActivo: "Carprofeno",
            presentacion: "Blíster 10 comp.",
            especie: "Perro",
            stock: 30,
            precio: 9800
        },
        {
            id: 11,
            codigo: "ME011",
            categoria: "Higiene",
            nombre: "Clorhexidina shampoo",
            principioActivo: "Clorhexidina 2%",
            presentacion: "Frasco 250ml",
            especie: "Perro / Gato",
            stock: 25,
            precio: 8900
        },
        {
            id: 12,
            codigo: "ME012",
            categoria: "Higiene",
            nombre: "Malaseb shampoo",
            principioActivo: "Miconazol + Clorhex.",
            presentacion: "Frasco 250ml",
            especie: "Perro / Gato",
            stock: 20,
            precio: 12500
        },
        {
            id: 13,
            codigo: "ME013",
            categoria: "Dermatológicos",
            nombre: "Apoquel 16mg",
            principioActivo: "Oclacitinib",
            presentacion: "Blíster 10 comp.",
            especie: "Perro",
            stock: 18,
            precio: 22000
        },
        {
            id: 14,
            codigo: "ME014",
            categoria: "Probióticos",
            nombre: "Probifor",
            principioActivo: "Bacillus clausii",
            presentacion: "Sobre 5ml x10",
            especie: "Perro / Gato",
            stock: 40,
            precio: 5600
        },
        {
            id: 15,
            codigo: "ME015",
            categoria: "Gastrointestinal",
            nombre: "Omeprazol 10mg vet",
            principioActivo: "Omeprazol",
            presentacion: "Blíster 10 comp.",
            especie: "Perro / Gato",
            stock: 35,
            precio: 3800
        },
        {
            id: 16,
            codigo: "ME016",
            categoria: "Cardiológicos",
            nombre: "Vetmedin 2.5mg",
            principioActivo: "Pimobendan",
            presentacion: "Blíster 10 comp.",
            especie: "Perro",
            stock: 15,
            precio: 28000
        },
        {
            id: 17,
            codigo: "ME017",
            categoria: "Analgésicos",
            nombre: "Tramadol 50mg vet",
            principioActivo: "Tramadol",
            presentacion: "Blíster 10 comp.",
            especie: "Perro",
            stock: 22,
            precio: 5200
        },
        {
            id: 18,
            codigo: "ME018",
            categoria: "Vacunas",
            nombre: "Nobivac DHPPi",
            principioActivo: "Vacuna polivalente",
            presentacion: "Vial 1 dosis",
            especie: "Perro",
            stock: 48,
            precio: 8500
        },
        {
            id: 19,
            codigo: "ME019",
            categoria: "Vacunas",
            nombre: "Nobivac Rabies",
            principioActivo: "Vacuna antirrábica",
            presentacion: "Vial 1 dosis",
            especie: "Perro / Gato",
            stock: 60,
            precio: 5800
        },
        {
            id: 20,
            codigo: "ME020",
            categoria: "Vacunas",
            nombre: "Felocell CVR",
            principioActivo: "Vacuna triple felina",
            presentacion: "Vial 1 dosis",
            especie: "Gato",
            stock: 36,
            precio: 7200
        },
        {
            id: 21,
            codigo: "ME021",
            categoria: "Suplementos",
            nombre: "Omega vet 3-6-9",
            principioActivo: "Ácidos grasos omega",
            presentacion: "Frasco 100ml",
            especie: "Perro / Gato",
            stock: 30,
            precio: 9900
        },
        {
            id: 22,
            codigo: "ME022",
            categoria: "Suplementos",
            nombre: "Condrovet forte",
            principioActivo: "Condroitín + Glucos.",
            presentacion: "Blíster 30 comp.",
            especie: "Perro",
            stock: 25,
            precio: 14500
        }
    ];

    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );
}

/* =========================
   CAMBIAR MENÚ SEGÚN ROL
========================= */

const menuAdmin = document.getElementById("menuAdmin");
const menuVendedor = document.getElementById("menuVendedor");
const tituloMenu = document.getElementById("tituloMenu");
const btnNuevoProducto = document.getElementById("btnNuevoProducto");
const descripcionProductos = document.getElementById("descripcionProductos");

if (usuarioActual.rol === "Vendedor") {
    menuAdmin.style.display = "none";
    menuVendedor.style.display = "flex";

    tituloMenu.textContent = "Vendedor";

    btnNuevoProducto.style.display = "none";

    descripcionProductos.textContent =
        "Visualiza los productos disponibles y consulta su detalle.";
}

/* =========================
   MOSTRAR PRODUCTOS
========================= */

const tabla = document.getElementById("tablaProductos");

function mostrarProductos() {
    tabla.innerHTML = "";

    productos.forEach(function(producto) {
        const fila = document.createElement("tr");

        let acciones = `
            <button
                class="btn btn-primary btn-sm"
                onclick="verDetalle(${producto.id})">
                Ver detalle
            </button>
        `;

        if (usuarioActual.rol === "Administrador") {
            acciones += `
                <a
                    href="editarProductoAd.html?id=${producto.id}"
                    class="btn btn-editar btn-sm">
                    Editar
                </a>

                <button
                    class="btn btn-eliminar btn-sm"
                    onclick="eliminarProducto(${producto.id})">
                    Eliminar
                </button>
            `;
        }

        fila.innerHTML = `
            <td>${producto.codigo}</td>
            <td>${producto.categoria}</td>
            <td>${producto.nombre}</td>
            <td>${producto.principioActivo}</td>
            <td>${producto.presentacion}</td>
            <td>${producto.especie}</td>
            <td>${producto.stock}</td>
            <td>$${producto.precio.toLocaleString("es-CL")}</td>
            <td>${acciones}</td>
        `;

        tabla.appendChild(fila);
    });
}

/* =========================
   VER DETALLE
========================= */

function verDetalle(id) {
    const producto = productos.find(function(producto) {
        return producto.id === id;
    });

    if (!producto) {
        return;
    }

    const detalle = document.getElementById("detalleProducto");

    detalle.innerHTML = `
        <p><strong>Código:</strong> ${producto.codigo}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <p><strong>Nombre comercial:</strong> ${producto.nombre}</p>
        <p><strong>Principio activo:</strong> ${producto.principioActivo}</p>
        <p><strong>Presentación:</strong> ${producto.presentacion}</p>
        <p><strong>Especie:</strong> ${producto.especie}</p>
        <p><strong>Stock:</strong> ${producto.stock}</p>
        <p><strong>Precio:</strong> $${producto.precio.toLocaleString("es-CL")}</p>
    `;

    const modal = new bootstrap.Modal(
        document.getElementById("modalDetalle")
    );

    modal.show();
}

/* =========================
   ELIMINAR PRODUCTO
========================= */

function eliminarProducto(id) {
    if (usuarioActual.rol !== "Administrador") {
        alert("No tienes permiso para eliminar productos.");
        return;
    }

    const confirmar = confirm(
        "¿Estás segura de eliminar este producto?"
    );

    if (!confirmar) {
        return;
    }

    productos = productos.filter(function(producto) {
        return producto.id !== id;
    });

    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );

    mostrarProductos();
}

/* =========================
   CERRAR SESIÓN
========================= */

function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    window.location.href = "../HTML/veterinaria.html";
}

/* =========================
   INICIAR
========================= */

mostrarProductos();

