// =========================
// PERFIL ADMINISTRADOR
// =========================
let formulario = document.getElementById("formPerfil");
// =========================
// OBTENER PERFIL
// =========================
let perfil = JSON.parse(
    localStorage.getItem("perfilAdmin")
);
// =========================
// DATOS INICIALES
// =========================
if (!perfil) {
    perfil = {
        nombre: "Administrador",
        apellido: "San Marcos",
        correo: "admin@veterinariasanmarcos.cl",
        telefono: "",
        rol: "Administrador",
        usuario: "admin",
        password: "123456"
    };
    localStorage.setItem(
        "perfilAdmin",
        JSON.stringify(perfil)
    );
}
// =========================
// MOSTRAR DATOS
// =========================
document.getElementById("nombre").value = perfil.nombre;
document.getElementById("apellido").value = perfil.apellido;
document.getElementById("correo").value = perfil.correo;
document.getElementById("telefono").value = perfil.telefono;
document.getElementById("rol").value = perfil.rol;
document.getElementById("usuario").value = perfil.usuario;
// =========================
// GUARDAR CAMBIOS
// =========================
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    // =========================
    // OBTENER DATOS
    // =========================
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value;
    let confirmarPassword = document.getElementById("confirmarPassword").value;
    // =========================
    // VALIDACIONES
    // =========================
    if (nombre === "") {
        alert("Debes ingresar tu nombre.");
        return;
    }
    if (apellido === "") {
        alert("Debes ingresar tu apellido.");
        return;
    }
    if (correo === "") {
        alert("Debes ingresar un correo.");
        return;
    }
    if (usuario === "") {
        alert("Debes ingresar un usuario.");
        return;
    }
    // =========================
    // VALIDAR CONTRASEÑA
    // =========================
    if (password !== "") {
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
        if (password !== confirmarPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        perfil.password = password;
    }
    // =========================
    // ACTUALIZAR PERFIL
    // =========================
    perfil.nombre = nombre;
    perfil.apellido = apellido;
    perfil.correo = correo;
    perfil.telefono = telefono;
    perfil.usuario = usuario;
    // =========================
    // GUARDAR EN LOCALSTORAGE
    // =========================
    localStorage.setItem(
        "perfilAdmin",
        JSON.stringify(perfil)
    );
    // =========================
    // MOSTRAR MENSAJE
    // =========================
    let mensaje = document.getElementById("mensajeExito");
    mensaje.textContent = "Perfil guardado correctamente.";
    mensaje.style.display = "block";
    // =========================
    // LIMPIAR CONTRASEÑAS
    // =========================
    document.getElementById("password").value = "";
    document.getElementById("confirmarPassword").value = "";
    // =========================
    // OCULTAR MENSAJE
    // =========================
    setTimeout(function() {
        mensaje.style.display = "none";
    }, 3000);
});
