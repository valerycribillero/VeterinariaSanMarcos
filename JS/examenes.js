let examenes = [
    {
        codigo: "EX001",
        nombre: "Hemograma completo",
        precio: 22000,
        especie: "Perro/Gato",
        duracion_aprox: "30 minutos"
    },
    {
        codigo: "EX002",
        nombre: "Perfil bioquímico completo",
        precio: 35000,
        especie: "Perro/Gato",
        duracion_aprox: "30 minutos"
    },
    {
        codigo: "EX003",
        nombre: "Radiografía (1 proyección)",
        precio: 28000,
        especie: "Perro/Gato",
        duracion_aprox: "20 minutos"
    },
    {
        codigo: "EX004",
        nombre: "Ecografía abdominal",
        precio: 45000,
        especie: "Perro/Gato",
        duracion_aprox: "30 minutos"
    },
    {
        codigo: "EX005",
        nombre: "Test de leoshmaniasis",
        precio: 18000,
        especie: "Perro",
        duracion_aprox: "20 minutos"
    }
];

let lista = document.getElementById("listaExamenes");
for (let i = 0; i < examenes.length; i++){
    lista.innerHTML += `
        <div>
            <h2>${examenes[i].nombre}</h2>
            <p>Precio: $${examenes[i].precio}</p>
            <button onclick="verDetalle('${examenes[i].codigo}')">
                ver detalle
            </button>
            <hr>
        </div>
    `;
}

function verDetalle(codigo){
    let exaSellecionado;
    for(let i = 0; i<examenes.length; i++){
        if(examenes[i].codigo == codigo){
            exaSellecionado = examenes[i];
        }
    }

    localStorage.setItem(
        "examen",
        JSON.stringify(exaSellecionado)
    );

    window.location.href = "detalleExa.html"
}