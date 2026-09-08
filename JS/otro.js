let otro = [
    {
        codigo: "OT001",
        nombre: "Corte de uñas",
        precio: 5000,
        especie: "Perro/Gato",
        duracion_aprox: "15 minutos"
    },
    {
        codigo: "OT002",
        nombre: "Limpieza dental",
        precio: 55000,
        especie: "Perro/Gato",
        duracion_aprox: "45 minutos"
    },
    {
        codigo: "OT003",
        nombre: "Microchip identificación",
        precio: 15000,
        especie: "Perro/Gato",
        duracion_aprox: "10 minutos"
    },
    {
        codigo: "OT004",
        nombre: "Hospitalización (por día)",
        precio: 30000,
        especie: "Perro/Gato",
        duracion_aprox: "24 horas"
    }
];

let lista = document.getElementById("listaOtros");
for (let i = 0; i < otro.length; i++){
    lista.innerHTML += `
        <div>
            <h2>${otro[i].nombre}</h2>
            <p>Precio: $${otro[i].precio}</p>
            <button onclick="verDetalle('${otro[i].codigo}')">
                ver detalle
            </button>
            <hr>
        </div>
    `;
}

function verDetalle(codigo){
    let otrSeleccionado;
    for(let i = 0; i<otro.length; i++){
        if(otro[i].codigo == codigo){
            otrSeleccionado = otro[i];
        }
    }

    localStorage.setItem(
        "otro",
        JSON.stringify(otrSeleccionado)
    );

    window.location.href = "detalleOtr.html"
}