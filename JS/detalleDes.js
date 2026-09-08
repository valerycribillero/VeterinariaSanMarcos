let desparacitacion = JSON.parse(
    localStorage.getItem("desparasitacion")
);

document.getElementById("nombre").textContent =
    desparacitacion.nombre;

document.getElementById("precio").textContent =
    desparacitacion.precio;

document.getElementById("especie").textContent =
    desparacitacion.especie;

document.getElementById("duracion_aprox").textContent =
    desparacitacion.duracion_aprox;