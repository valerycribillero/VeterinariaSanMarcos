document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const comentario = document.getElementById('comentario').value.trim();

  const errNombre = document.getElementById('errNombre');
  const errCorreo = document.getElementById('errCorreo');
  const errComentario = document.getElementById('errComentario');

  errNombre.textContent = '';
  errCorreo.textContent = '';
  errComentario.textContent = '';

  if (!nombre) {
    errNombre.textContent = 'El nombre es obligatorio.';
    isValid = false;
  } else if (nombre.length > 100) {
    errNombre.textContent = 'Máximo 100 caracteres.';
    isValid = false;
  }

  const allowedDomains = ['@duocuc.cl', '@profesor.duoc.cl', '@gmail.com'];
  const domainValid = allowedDomains.some(domain => correo.endsWith(domain));

  if (!correo) {
    errCorreo.textContent = 'El correo es obligatorio.';
    isValid = false;
  } else if (!domainValid) {
    errCorreo.textContent = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.';
    isValid = false;
  }

  if (!comentario) {
    errComentario.textContent = 'El comentario es obligatorio.';
    isValid = false;
  } else if (comentario.length > 500) {
    errComentario.textContent = 'Máximo 500 caracteres.';
    isValid = false;
  }

if (isValid) {

    const mensaje = {
        nombre: nombre,
        correo: correo,
        comentario: comentario
    };

    let mensajes = JSON.parse(localStorage.getItem('mensajesContacto')) || [];

    mensajes.push(mensaje);

    localStorage.setItem('mensajesContacto', JSON.stringify(mensajes));

    alert('¡Mensaje enviado con éxito!');

    this.reset();
}
});

