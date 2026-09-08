javascript
const tablaMensajes = document.getElementById('tablaMensajes');
let mensajes = JSON.parse(localStorage.getItem('mensajesContacto')) || [];
function mostrarMensajes() {
    tablaMensajes.innerHTML = '';
    if (mensajes.length === 0) {
        tablaMensajes.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted">
                    No hay mensajes de contacto.
                </td>
            </tr>
        `;
        return;
    }
    mensajes.forEach((mensaje, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${mensaje.nombre}</td>
            <td>${mensaje.correo}</td>
            <td>${mensaje.comentario}</td>
            <td>
                <button 
                    class="btn btn-sm btn-danger"
                    onclick="eliminarMensaje(${index})">
                    Eliminar
                </button>
            </td>
        `;
        tablaMensajes.appendChild(fila);
    });
}
function eliminarMensaje(index) {
    if (confirm('¿Quieres eliminar este mensaje?')) {
        mensajes.splice(index, 1);
        localStorage.setItem(
            'mensajesContacto',
            JSON.stringify(mensajes)
        );
        mostrarMensajes();
    }
}
mostrarMensajes();
