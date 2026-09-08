
/* =========================
   MENSAJES DE CONTACTO
========================= */

let tablaMensajes = document.getElementById("tablaMensajes");

let mensajes = JSON.parse(
    localStorage.getItem("mensajesContacto")
) || [];

/* =========================
   MOSTRAR MENSAJES
========================= */

function mostrarMensajes() {

    tablaMensajes.innerHTML = "";

    if (mensajes.length === 0) {

        tablaMensajes.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted">
                    No hay mensajes de contacto.
                </td>
            </tr>
        `;

        return;
    }

    for (let i = 0; i < mensajes.length; i++) {

        tablaMensajes.innerHTML += `
            <tr>
                <td>${mensajes[i].nombre}</td>
                <td>${mensajes[i].correo}</td>
                <td>${mensajes[i].comentario}</td>
                <td>${mensajes[i].fecha || "Sin fecha"}</td>
                <td>
                    <button
                        class="btn btn-danger btn-sm"
                        onclick="eliminarMensaje(${i})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    }
}

/* =========================
   ELIMINAR MENSAJE
========================= */

function eliminarMensaje(index) {

    if (confirm("¿Quieres eliminar este mensaje?")) {

        mensajes.splice(index, 1);

        localStorage.setItem(
            "mensajesContacto",
            JSON.stringify(mensajes)
        );

        mostrarMensajes();
    }
}

/* =========================
   CERRAR SESIÓN
========================= */

function cerrarSesion() {

    localStorage.removeItem("usuarioActual");

    window.location.href = "veterinaria.html";
}

mostrarMensajes();

