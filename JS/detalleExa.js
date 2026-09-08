let examenes = JSON.parse(
    localStorage.getItem("examen")
);

document.getElementById("nombre").textContent =
    examenes.nombre;

document.getElementById("precio").textContent =
    examenes.precio;

document.getElementById("especie").textContent =
    examenes.especie;

document.getElementById("duracion_aprox").textContent =
    examenes.duracion_aprox;