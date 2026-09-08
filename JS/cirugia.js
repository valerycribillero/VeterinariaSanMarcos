let cirugias = [
    {
        codigo: "CI001",
        nombre: "Esterilización hembra canina",
        precio: 80000,
        especie: "Perro",
        duracion_aprox: "90 minutos"
    },
    {
        codigo: "CI002",
        nombre: "Esterilización macho canino",
        precio: 60000,
        especie: "Perro",
        duracion_aprox: "60 minutos"
    },
    {
        codigo: "CI003",
        nombre: "Esterilización hembra felina",
        precio: 65000,
        especie: "Gato",
        duracion_aprox: "60 minutos"
    },
    {
        codigo: "CI004",
        nombre: "Esterilización macho felino",
        precio: 50000,
        especie: "Gato",
        duracion_aprox: "45 minutos"
    },
    {
        codigo: "CI005",
        nombre: "Extirpación de tumor cutáneo",
        precio: 120000,
        especie: "Perro/Gato",
        duracion_aprox: "60 minutos"
    },
    {
        codigo: "CI006",
        nombre: "Cesárea de urgencia",
        precio: 180000,
        especie: "Perro/Gato",
        duracion_aprox: "120 minutos"
    }
];

let lista = document.getElementById("listaCirugias");
for (let i = 0; i < cirugias.length; i++){
    lista.innerHTML += `
        <div>
            <h2>${cirugias[i].nombre}</h2>
            <p>Precio: $${cirugias[i].precio}</p>
            <button onclick="verDetalle('${cirugias[i].codigo}')">
                ver detalle
            </button>
            <hr>
        </div>
    `;
}

function verDetalle(codigo){
    let cirSeleccionada;
    for(let i = 0; i<cirugias.length; i++){
        if(cirugias[i].codigo == codigo){
            cirSeleccionada = cirugias[i];
        }
    }

    localStorage.setItem(
        "cirugias",
        JSON.stringify(cirSeleccionada)
    );

    window.location.href = "detalleCir.html"
}