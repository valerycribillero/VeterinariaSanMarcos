let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let tabla = document.getElementById("tablaUsuarios");
if (usuarios.length === 0) {
    tabla.innerHTML = `
        <tr>
            <td colspan="6" class="text-center">
                No hay usuarios registrados.
            </td>
        </tr>
    `;
}
for (let i = 0; i < usuarios.length; i++) {
    tabla.innerHTML += `
        <tr>
            <td>${usuarios[i].run}</td>
            <td>${usuarios[i].nombre}</td>
            <td>${usuarios[i].apellidos}</td>
            <td>${usuarios[i].correo}</td>
            <td>${usuarios[i].rol}</td>
            <td>
                <button class="btn btn-warning btn-sm"
                        onclick="editarUsuario('${usuarios[i].run}')">
                    Editar
                </button>
            </td>
        </tr>
    `;
}
function editarUsuario(run) {
    let usuarioSeleccionado;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].run === run) {
            usuarioSeleccionado = usuarios[i];
        }
    }
    localStorage.setItem(
        "usuarioEditar",
        JSON.stringify(usuarioSeleccionado)
    );
    window.location.href = "editarUsuarioAd.html";
}