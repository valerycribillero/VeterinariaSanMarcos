
console.log("editarServicioAd.js cargado correctamente");


let formulario = document.getElementById("formEditarServicio");

let datosGuardados = localStorage.getItem("servicioEditar");

console.log("Dato crudo en localStorage:", datosGuardados);


let servicioEditar = null;


try {
    servicioEditar = JSON.parse(datosGuardados);
} catch (error) {
    console.log("Error al parsear:", error);
}


console.log("servicioEditar procesado:", servicioEditar);


if (!servicioEditar) {

    alert("No se encontró el servicio a editar.");

    window.location.href = "serviciosAd.html";

} else {


    // Cargar datos del servicio

    document.getElementById("id").value =
        servicioEditar.id || "";

    document.getElementById("nombre").value =
        servicioEditar.nombre || "";

    document.getElementById("descripcion").value =
        servicioEditar.descripcion || "";

    document.getElementById("precio").value =
        servicioEditar.precio || "";

    document.getElementById("estado").value =
        servicioEditar.estado || "";


    // Guardar cambios

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        let nombre =
            document.getElementById("nombre").value.trim();

        let descripcion =
            document.getElementById("descripcion").value.trim();

        let precio =
            document.getElementById("precio").value;

        let estado =
            document.getElementById("estado").value;


        // Validaciones

        if (nombre === "") {

            alert("Debes ingresar el nombre del servicio.");

            return;
        }


        if (nombre.length > 100) {

            alert("El nombre no puede superar los 100 caracteres.");

            return;
        }


        if (descripcion === "") {

            alert("Debes ingresar una descripción.");

            return;
        }


        if (descripcion.length > 500) {

            alert("La descripción no puede superar los 500 caracteres.");

            return;
        }


        if (precio === "" || Number(precio) < 0) {

            alert("Debes ingresar un precio válido.");

            return;
        }


        if (estado === "") {

            alert("Debes seleccionar un estado.");

            return;
        }


        // Obtener servicios

        let servicios =
            JSON.parse(localStorage.getItem("servicios")) || [];


        // Buscar servicio

        for (let i = 0; i < servicios.length; i++) {

            if (servicios[i].id === servicioEditar.id) {

                servicios[i].nombre = nombre;

                servicios[i].descripcion = descripcion;

                servicios[i].precio = precio;

                servicios[i].estado = estado;

                break;
            }
        }


        // Guardar nuevamente

        localStorage.setItem(
            "servicios",
            JSON.stringify(servicios)
        );


        // Eliminar dato temporal

        localStorage.removeItem("servicioEditar");


        alert("Servicio actualizado correctamente.");


        window.location.href = "serviciosAd.html";

    });

}

