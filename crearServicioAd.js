
// =========================
// CREAR SERVICIO
// =========================

let formulario = document.getElementById("formCrearServicio");

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

    if (servicios.length > 0) {

        nuevoId = servicios[servicios.length - 1].id + 1;

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
    // MENSAJE
    // =========================

    alert("Servicio creado correctamente.");


    // =========================
    // VOLVER A SERVICIOS
    // =========================

    window.location.href = "serviciosAd.html";

});

