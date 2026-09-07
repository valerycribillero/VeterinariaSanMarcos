let desparacitacion = [
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

let lista = document.getElementById("listaDesparacitaciones");
for (let i = 0; i < desparacitacion.length; i++){
    lista.innerHTML += `
        <div>
            <h2>${desparacitacion[i].nombre}</h2>
            <p>Precio: $${desparacitacion[i].precio}</p>
            <button onclick="verDetalle('${desparacitacion[i].codigo}')">
                ver detalle
            </button>
            <hr>
        </div>
    `;
}

function verDetalle(codigo){
    let desSeleccionada;
    for(let i = 0; i<desparacitacion.length; i++){
        if(desparacitacion[i].codigo == codigo){
            desSeleccionada = desparacitacion[i];
        }
    }

    localStorage.setItem(
        "desparasitacion",
        JSON.stringify(desSeleccionada)
    );

    window.location.href = "detalleDes.html"
}