let otro = JSON.parse(
    localStorage.getItem("otro")
);

document.getElementById("nombre").textContent =
    otro.nombre;

document.getElementById("precio").textContent =
    otro.precio;

document.getElementById("especie").textContent =
    otro.especie;

document.getElementById("duracion_aprox").textContent =
    otro.duracion_aprox;