let consultas = [
    {
        codigo: "SV001",
        nombre: "Consulta general",
        precio: 15000,
        especie: "Perro/Gato",
        duracion_aprox: "30 minutos"
    },
    {
        codigo: "SV002",
        nombre: "Consulta urgencia",
        precio: 25000,
        especie: "Perro/Gato",
        duracion_aprox: "30 minutos"
    },
    {
        codigo: "SV003",
        nombre: "Control postoperatorio",
        precio: 10000,
        especie: "Perro/Gato",
        duracion_aprox: "20 minutos"
    },
    {
        codigo: "SV004",
        nombre: "Consulta Ave/Conejo",
        precio: 18000,
        especie: "Ave/Conejo",
        duracion_aprox: "30 minutos"
    },
    {
        codigo: "SV005",
        nombre: "Segunda opinión médica",
        precio: 20000,
        especie: "Todas",
        duracion_aprox: "40 minutos"
    }
];

let listaConsultas = document.getElementById("listaConsultas");

for (let i = 0; i < consultas.length; i++) {

    listaConsultas.innerHTML += `
        <div>
            <h2>${consultas[i].nombre}</h2>

            <p>Precio: $${consultas[i].precio}</p>

            <button onclick="verDetalleConsulta('${consultas[i].codigo}')">
                Ver detalle
            </button>
        </div>
    `;
}


function verDetalleConsulta(codigo) {

    let consultaSeleccionada;

    for (let i = 0; i < consultas.length; i++) {

        if (consultas[i].codigo == codigo) {
            consultaSeleccionada = consultas[i];
        }
    }

    localStorage.setItem(
        "consulta",
        JSON.stringify(consultaSeleccionada)
    );

    window.location.href = "detalle.html";
}
