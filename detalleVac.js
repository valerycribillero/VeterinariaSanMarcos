let vacuna = JSON.parse(
    localStorage.getItem("vacunas")
);

document.getElementById("nombre").textContent =
    vacuna.nombre;

document.getElementById("precio").textContent =
    vacuna.precio;

document.getElementById("especie").textContent =
    vacuna.especie;

document.getElementById("duracion_aprox").textContent =
    vacuna.duracion_aprox;