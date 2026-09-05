let regiones = {
    "Metropolitana": ["Santiago", "Maipú", "Puente Alto", "Providencia"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué"],
    "Biobío": ["Concepción", "Talcahuano", "Los Ángeles"]
};

let region = document.getElementById("region");
let comuna = document.getElementById("comuna");
let formulario = document.getElementById("formCrearUsuario");

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

    let run = document.getElementById("run").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let rol = document.getElementById("rol").value;
    let direccion = document.getElementById("direccion").value;

    if (run.length < 7 || run.length > 9) {
        alert("El RUN debe tener entre 7 y 9 dígitos.");
        return;
    }

    if (nombre === "" || apellidos === "") {
        alert("Debes ingresar nombre y apellidos.");
        return;
    }

    if (!correo.includes("@")) {
        alert("Debes ingresar un correo válido.");
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

    let usuarioNuevo = {
        run: run,
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        rol: rol,
        region: region.value,
        comuna: comuna.value,
        direccion: direccion
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(usuarioNuevo);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario guardado correctamente.");

    window.location.href = "usuariosAd.html";
});