let cirugia = JSON.parse(
    localStorage.getItem("cirugias")
);

document.getElementById("nombre").textContent =
    cirugia.nombre;

document.getElementById("precio").textContent =
    cirugia.precio;

document.getElementById("especie").textContent =
    cirugia.especie;

document.getElementById("duracion_aprox").textContent =
    cirugia.duracion_aprox;