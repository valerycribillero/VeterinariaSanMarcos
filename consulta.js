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

let lista = document.getElementById("listaConsultas");
for (let i = 0; i < consultas.length; i++){
    lista.innerHTML += `
        <div>
            <h2>${consultas[i].nombre}</h2>
            <p>Precio: $${consultas[i].precio}</p>
            <button onclick="verDetalle('${consultas[i].codigo}')">
                ver detalle
            </button>
            <hr>
        </div>
    `;
}

function verDetalle(codigo){
    let conSeleccionada;
    for(let i = 0; i<consultas.length; i++){
        if(consultas[i].codigo == codigo){
            conSeleccionada = consultas[i];
        }
    }

    localStorage.setItem(
        "consulta",
        JSON.stringify(conSeleccionada)
    );

    window.location.href = "detalle.html"
}