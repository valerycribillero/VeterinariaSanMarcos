let regiones = {
    "Libertador General Bernardo O'Higgins": ["Rancagua"]
};

let region = document.getElementById("region");
let comuna = document.getElementById("comuna");
let formulario = document.getElementById("formEditarUsuario");

/* Cargar el usuario a editar */
let usuarioEditar = JSON.parse(localStorage.getItem("usuarioEditar"));

if (!usuarioEditar) {
    alert("No se encontró el usuario a editar.");
    window.location.href = "usuariosAd.html";
}

/* Mostrar regiones */
for (let nombreRegion in regiones) {
    region.innerHTML += `
        <option value="${nombreRegion}">
            ${nombreRegion}
        </option>
    `;
}

/* Mostrar comunas según la región */
function cargarComunas(regionSeleccionada, comunaSeleccionada) {
    comuna.innerHTML = `<option value="">Selecciona una comuna</option>`;

    let comunas = regiones[regionSeleccionada];

    if (!comunas) return;

    for (let i = 0; i < comunas.length; i++) {
        comuna.innerHTML += `
            <option value="${comunas[i]}" ${comunas[i] === comunaSeleccionada ? "selected" : ""}>
                ${comunas[i]}
            </option>
        `;
    }

    comuna.disabled = false;
}

region.addEventListener("change", function () {
    cargarComunas(region.value, "");
});

/* Precargar los datos en el formulario */
document.getElementById("run").value = usuarioEditar.run;
document.getElementById("rol").value = usuarioEditar.rol;
document.getElementById("nombre").value = usuarioEditar.nombre;
document.getElementById("apellidos").value = usuarioEditar.apellidos;
document.getElementById("correo").value = usuarioEditar.correo;
document.getElementById("telefono").value = usuarioEditar.telefono || "";
document.getElementById("direccion").value = usuarioEditar.direccion;

region.value = usuarioEditar.region;
cargarComunas(usuarioEditar.region, usuarioEditar.comuna);

/* Guardar cambios */
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value.trim();
    let rol = document.getElementById("rol").value;
    let direccion = document.getElementById("direccion").value;

    if (nombre === "" || apellidos === "") {
        alert("Debes ingresar nombre y apellidos.");
        return;
    }

    if (nombre.length > 100 || apellidos.length > 100) {
        alert("El nombre y los apellidos no pueden superar los 100 caracteres.");
        return;
    }

    if (correo === "" || correo.length > 100) {
        alert("El correo es obligatorio y no puede superar los 100 caracteres.");
        return;
    }

    if (
        !correo.endsWith("@duoc.cl") &&
        !correo.endsWith("@profesor.duoc.cl") &&
        !correo.endsWith("@gmail.com")
    ) {
        alert("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
        return;
    }

    if (rol === "" || region.value === "" || comuna.value === "") {
        alert("Debes seleccionar rol, región y comuna.");
        return;
    }

    if (direccion === "") {
        alert("Debes ingresar una dirección.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].run === usuarioEditar.run) {
            usuarios[i].nombre = nombre;
            usuarios[i].apellidos = apellidos;
            usuarios[i].correo = correo;
            usuarios[i].rol = rol;
            usuarios[i].telefono = document.getElementById("telefono").value;
            usuarios[i].region = region.value;
            usuarios[i].comuna = comuna.value;
            usuarios[i].direccion = direccion;
            break;
        }
    }

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    localStorage.removeItem("usuarioEditar");

    alert("Usuario actualizado correctamente.");

    window.location.href = "usuariosAd.html";
});