/* =========================
   CREAR USUARIO
========================= */
let regiones = {
    "Libertador General Bernardo O'Higgins": ["Rancagua"]
};
let region = document.getElementById("region");
let comuna = document.getElementById("comuna");
let formulario = document.getElementById("formCrearUsuarioAd");
/* Mostrar regiones */
for (let nombreRegion in regiones) {
    region.innerHTML += `
        <option value="${nombreRegion}">
            ${nombreRegion}
        </option>
    `;
}
/* Mostrar comunas según la región */
region.addEventListener("change", function () {
    comuna.innerHTML = `<option value="">Selecciona una comuna</option>`;
    let comunas = regiones[region.value];
    for (let i = 0; i < comunas.length; i++) {
        comuna.innerHTML += `
            <option value="${comunas[i]}">
                ${comunas[i]}
            </option>
        `;
    }
    comuna.disabled = false;
});
/* Guardar usuario */
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let run = document.getElementById("run").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let rol = document.getElementById("rol").value;
    let password = document.getElementById("password").value;
    let direccion = document.getElementById("direccion").value.trim();
    /* Validar RUN */
    if (run.length < 7 || run.length > 9) {
        alert("El RUN debe tener entre 7 y 9 dígitos.");
        return;
    }
    /* Validar nombre */
    if (nombre === "" || apellidos === "") {
        alert("Debes ingresar nombre y apellidos.");
        return;
    }
    if (nombre.length > 100 || apellidos.length > 100) {
        alert("El nombre y los apellidos no pueden superar los 100 caracteres.");
        return;
    }
    /* Validar correo */
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
    /* Validar rol */
    if (rol === "") {
        alert("Debes seleccionar un rol.");
        return;
    }
    /* Validar contraseña */
    if (password.length < 4 || password.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.");
        return;
    }
    /* Validar región y comuna */
    if (region.value === "" || comuna.value === "") {
        alert("Debes seleccionar región y comuna.");
        return;
    }
    /* Validar dirección */
    if (direccion === "") {
        alert("Debes ingresar una dirección.");
        return;
    }
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    /* Verificar RUN repetido */
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].run === run) {
            alert("Ya existe un usuario con ese RUN.");
            return;
        }
    }
    /* Verificar correo repetido */
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo.toLowerCase() === correo.toLowerCase()) {
            alert("Ya existe un usuario con ese correo.");
            return;
        }
    }
    /* Crear usuario */
    let usuarioNuevo = {
        run: run,
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        telefono: telefono,
        password: password,
        rol: rol,
        region: region.value,
        comuna: comuna.value,
        direccion: direccion
    };
    usuarios.push(usuarioNuevo);
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
    alert("Usuario guardado correctamente.");
    window.location.href = "usuariosAd.html";
});
