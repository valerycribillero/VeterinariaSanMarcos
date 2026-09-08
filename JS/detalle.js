let consulta = JSON.parse(
    localStorage.getItem("consulta")
);

document.getElementById("nombre").textContent =
    consulta.nombre;

document.getElementById("precio").textContent =
    consulta.precio;

document.getElementById("especie").textContent =
    consulta.especie;

document.getElementById("duracion_aprox").textContent =
    consulta.duracion_aprox;