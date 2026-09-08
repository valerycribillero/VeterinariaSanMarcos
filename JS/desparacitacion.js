let desparasitaciones = [
    {
        codigo: "DE001",
        nombre: "Desparasitación interna pequeños (<10 kg)",
        precio: 8000,
        especie: "Perro",
        duracion_aprox: "5 minutos"
    },
    {
        codigo: "DE002",
        nombre: "Desparasitación interna medianos (10-25 kg)",
        precio: 9500,
        especie: "Perro",
        duracion_aprox: "5 minutos"
    },
    {
        codigo: "DE003",
        nombre: "Desparasitación interna grandes (>25 kg)",
        precio: 11000,
        especie: "Perro",
        duracion_aprox: "5 minutos"
    },
    {
        codigo: "DE004",
        nombre: "Desparasitación interna felina",
        precio: 8000,
        especie: "Gato",
        duracion_aprox: "5 minutos"
    },
    {
        codigo: "DE005",
        nombre: "Antiparasitario externo (pipeta)",
        precio: 7500,
        especie: "Perro/Gato",
        duracion_aprox: "5 minutos"
    }
];

let listaDesparasitaciones =
    document.getElementById("listaDesparacitaciones");


for (let i = 0; i < desparasitaciones.length; i++) {

    listaDesparasitaciones.innerHTML += `
        <div>
            <h2>${desparasitaciones[i].nombre}</h2>

            <p>Precio: $${desparasitaciones[i].precio}</p>

            <button onclick="verDetalleDesparasitacion('${desparasitaciones[i].codigo}')">
                Ver detalle
            </button>
        </div>
    `;
}


function verDetalleDesparasitacion(codigo) {

    let desSeleccionada;

    for (let i = 0; i < desparasitaciones.length; i++) {

        if (desparasitaciones[i].codigo == codigo) {
            desSeleccionada = desparasitaciones[i];
        }
    }

    localStorage.setItem(
        "desparasitacion",
        JSON.stringify(desSeleccionada)
    );

    window.location.href = "detalleDes.html";
}
