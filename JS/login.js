/* =========================
   USUARIOS POR DEFECTO
========================= */

let usuarios = JSON.parse(
    localStorage.getItem("usuarios")
) || [];

/* Crear Administrador */

let existeAdministrador = usuarios.some(function(usuario) {
    return usuario.correo === "admin@gmail.com";
});

if (!existeAdministrador) {
    usuarios.push({
        run: "11111111-1",
        nombre: "Administrador",
        apellidos: "Principal",
        correo: "admin@gmail.com",
        password: "1234",
        telefono: "",
        rol: "Administrador",
        region: "Libertador General Bernardo O'Higgins",
        comuna: "Rancagua",
        direccion: ""
    });
}

/* Crear Vendedor */

let existeVendedor = usuarios.some(function(usuario) {
    return usuario.correo === "vendedor@duoc.cl";
});

if (!existeVendedor) {
    usuarios.push({
        run: "22222222-2",
        nombre: "Vendedor",
        apellidos: "Principal",
        correo: "vendedor@duoc.cl",
        password: "1234",
        telefono: "",
        rol: "Vendedor",
        region: "Libertador General Bernardo O'Higgins",
        comuna: "Rancagua",
        direccion: ""
    });
}

/* Crear Cliente */

let existeCliente = usuarios.some(function(usuario) {
    return usuario.correo === "cliente@profesor.duoc.cl";
});

if (!existeCliente) {
    usuarios.push({
        run: "33333333-3",
        nombre: "Cliente",
        apellidos: "Principal",
        correo: "cliente@profesor.duoc.cl",
        password: "1234",
        telefono: "",
        rol: "Cliente",
        region: "Libertador General Bernardo O'Higgins",
        comuna: "Rancagua",
        direccion: ""
    });
}

/* Guardar usuarios */

localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
);

/* =========================
   INICIAR SESIÓN
========================= */

function ingresar() {
    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value;

    if (correo === "" || clave === "") {
        alert("Debes ingresar correo y contraseña.");
        return;
    }

    let usuarioEncontrado = null;

    for (let i = 0; i < usuarios.length; i++) {
        if (
            usuarios[i].correo.toLowerCase() === correo.toLowerCase() &&
            usuarios[i].password === clave
        ) {
            usuarioEncontrado = usuarios[i];
            break;
        }
    }

    if (!usuarioEncontrado) {
        alert("Correo o contraseña incorrectos.");
        return;
    }

    localStorage.setItem(
        "usuarioActual",
        JSON.stringify(usuarioEncontrado)
    );

    if (usuarioEncontrado.rol === "Administrador") {
        window.location.href = "admin.html";
    } else if (usuarioEncontrado.rol === "Vendedor") {
        window.location.href = "vendedor.html";
    } else if (usuarioEncontrado.rol === "Cliente") {
        window.location.href = "veterinaria.html";
    } else {
        alert("El usuario no tiene un rol válido.");
    }
}