function editarUsuario(run) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
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