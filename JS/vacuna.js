let vacunas =[
    {
        codigo: "VA001",
        nombre: "Vacuna antirrábica canina",
        precio: 12000,
        especie: "Perro",
        duracion_aprox: "10 minutos"
    },
    {
        codigo: "VA002",
        nombre: "Vacuna sextuple canina",
        precio: 18000,
        especie: "Perro",
        duracion_aprox: "10 minutos"
    },
    {
        codigo: "VA003",
        nombre: "Vacuna bivalente felina",
        precio: 15000,
        especie: "Gato",
        duracion_aprox: "10 minutos"
    },
    {
        codigo: "VA004",
        nombre: "Vacuna triple felina",
        precio: 17000,
        especie: "Gato",
        duracion_aprox: "10 minutos"
    },
    {
        codigo: "VA005",
        nombre: "Vacuna bordetella canina",
        precio: 14000,
        especie: "Perro",
        duracion_aprox: "10 minutos"
    },
    {
        codigo: "VA006",
        nombre: "Vacuna antirrábica felina",
        precio: 12000,
        especie: "Gato",
        duracion_aprox: "10 minutos"
    }
];

let lista = document.getElementById("listaVacunas");
for (let i = 0; i < vacunas.length; i++){
    lista.innerHTML += `
        <div>
            <h2>${vacunas[i].nombre}</h2>
            <p>Precio: $${vacunas[i].precio}</p>
            <button onclick="verDetalle('${vacunas[i].codigo}')">
                ver detalle
            </button>
            <hr>
        </div>
    `;
}

function verDetalle(codigo){
    let vacSeleccionada;
    for(let i = 0; i<vacunas.length; i++){
        if(vacunas[i].codigo == codigo){
            vacSeleccionada = vacunas[i];
        }
    }

    localStorage.setItem(
        "vacunas",
        JSON.stringify(vacSeleccionada)
    );

    window.location.href = "detalleVac.html"
}