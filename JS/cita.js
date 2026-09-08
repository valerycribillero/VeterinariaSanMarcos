
/* =========================
   RESERVAR CITA
========================= */

let formulario = document.getElementById("formCita");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let mascota = document.getElementById("mascota").value.trim();
    let servicio = document.getElementById("servicio").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let motivo = document.getElementById("motivo").value.trim();

    /* Validar mascota */

    if (mascota === "") {
        alert("Debes ingresar el nombre de la mascota.");
        return;
    }

    /* Validar servicio */

    if (servicio === "") {
        alert("Debes seleccionar un servicio.");
        return;
    }

    /* Validar fecha */

    if (fecha === "") {
        alert("Debes seleccionar una fecha.");
        return;
    }

    /* Validar que la fecha no sea anterior a hoy */

    let hoy = new Date().toISOString().split("T")[0];

    if (fecha < hoy) {
        alert("No puedes seleccionar una fecha anterior a hoy.");
        return;
    }

    /* Validar hora */

    if (hora === "") {
        alert("Debes seleccionar una hora.");
        return;
    }

    /* Validar motivo */

    if (motivo === "") {
        alert("Debes ingresar el motivo de la consulta.");
        return;
    }

    /* Obtener citas guardadas */

    let citas = JSON.parse(
        localStorage.getItem("citas")
    ) || [];

    /* Verificar si la hora ya está ocupada */

    for (let i = 0; i < citas.length; i++) {

        if (
            citas[i].fecha === fecha &&
            citas[i].hora === hora
        ) {

            alert("Esta hora ya está reservada. Selecciona otra.");
            return;
        }
    }

    /* Crear nueva cita */

    let nuevaCita = {
        mascota: mascota,
        servicio: servicio,
        fecha: fecha,
        hora: hora,
        motivo: motivo,
        estado: "Pendiente"
    };

    /* Guardar cita */

    citas.push(nuevaCita);

    localStorage.setItem(
        "citas",
        JSON.stringify(citas)
    );

    alert("Cita reservada correctamente.");

    /* Limpiar formulario */

    formulario.reset();

    /* Volver al inicio */

    window.location.href = "veterinaria.html";
});

