
// =========================
// ADMINISTRACIÓN DE ROLES
// =========================

let tabla = document.getElementById("tablaRoles");

// =========================
// OBTENER USUARIOS
// =========================

let usuarios = JSON.parse(
    localStorage.getItem("usuarios")
) || [];


// =========================
// MOSTRAR USUARIOS
// =========================

tabla.innerHTML = "";

for (let i = 0; i < usuarios.length; i++) {

    tabla.innerHTML += `
        <tr>
            <td>${usuarios[i].nombre || ""}</td>

            <td>${usuarios[i].correo || usuarios[i].email || ""}</td>

            <td>${usuarios[i].rol || "Cliente"}</td>

            <td>
                <select
                    id="rol-${usuarios[i].id}"
                    class="form-select form-select-sm">

                    <option value="Administrador"
                        ${usuarios[i].rol === "Administrador" ? "selected" : ""}>
                        Administrador
                    </option>

                    <option value="Vendedor"
                        ${usuarios[i].rol === "Vendedor" ? "selected" : ""}>
                        Vendedor
                    </option>

                    <option value="Cliente"
                        ${(!usuarios[i].rol || usuarios[i].rol === "Cliente") ? "selected" : ""}>
                        Cliente
                    </option>

                    <option value="Veterinario"
                        ${usuarios[i].rol === "Veterinario" ? "selected" : ""}>
                        Veterinario
                    </option>

                </select>
            </td>

            <td>
                <button
                    class="btn btn-editar btn-sm"
                    onclick="guardarRol(${usuarios[i].id})">
                    Guardar
                </button>
            </td>
        </tr>
    `;
}


// =========================
// GUARDAR ROL
// =========================

function guardarRol(id) {

    let nuevoRol = document.getElementById(
        "rol-" + id
    ).value;

    let usuarioEncontrado = false;

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].id === id) {

            usuarios[i].rol = nuevoRol;

            usuarioEncontrado = true;

            break;
        }
    }


    // =========================
    // COMPROBAR
    // =========================

    if (!usuarioEncontrado) {

        alert("No se encontró el usuario.");

        return;
    }


    // =========================
    // GUARDAR CAMBIO
    // =========================

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );


    // =========================
    // MOSTRAR MENSAJE
    // =========================

    let mensaje = document.getElementById("mensajeExito");

    mensaje.textContent =
        "Rol actualizado correctamente.";

    mensaje.style.display = "block";


    // Ocultar mensaje después de 3 segundos

    setTimeout(function() {

        mensaje.style.display = "none";

    }, 3000);


    // Actualizar la tabla

    mostrarUsuarios();
}


// =========================
// MOSTRAR USUARIOS
// =========================

function mostrarUsuarios() {

    tabla.innerHTML = "";

    for (let i = 0; i < usuarios.length; i++) {

        tabla.innerHTML += `
            <tr>

                <td>
                    ${usuarios[i].nombre || ""}
                </td>

                <td>
                    ${usuarios[i].correo || usuarios[i].email || ""}
                </td>

                <td>
                    ${usuarios[i].rol || "Cliente"}
                </td>

                <td>

                    <select
                        id="rol-${usuarios[i].id}"
                        class="form-select form-select-sm">

                        <option value="Administrador"
                            ${usuarios[i].rol === "Administrador" ? "selected" : ""}>
                            Administrador
                        </option>

                        <option value="Vendedor"
                            ${usuarios[i].rol === "Vendedor" ? "selected" : ""}>
                            Vendedor
                        </option>

                        <option value="Cliente"
                            ${(!usuarios[i].rol || usuarios[i].rol === "Cliente") ? "selected" : ""}>
                            Cliente
                        </option>

                        <option value="Veterinario"
                            ${usuarios[i].rol === "Veterinario" ? "selected" : ""}>
                            Veterinario
                        </option>

                    </select>

                </td>

                <td>

                    <button
                        class="btn btn-editar btn-sm"
                        onclick="guardarRol(${usuarios[i].id})">
                        Guardar
                    </button>

                </td>

            </tr>
        `;
    }
}

