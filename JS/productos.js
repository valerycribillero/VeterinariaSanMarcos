let producto = [
    {
        codigo: "ME001",
        categoria: "Antibióticos",
        nombreCom: "Amoxibay 250mg",
        principioAct: "Amoxicilina",
        presentacion: "Blíster 10 comp",
        especie: "Perro/Gato",
        stock: 45,
        precioUni: 4200
    },
    {
        codigo: "ME002",
        categoria: "Antibióticos",
        nombreCom: "Enrox 50mg",
        principioAct: "Enrofloxacino",
        presentacion: "Blíster 10 comp",
        especie: "Perro/Gato",
        stock: 30,
        precioUni: 6800
    },
    {
        codigo: "ME003",
        categoria: "Antibióticos",
        nombreCom: "Metrobay 250mg",
        principioAct: "Metronidazol",
        presentacion: "Blíster 10 comp",
        especie: "Perro/Gato",
        stock: 28,
        precioUni: 3900
    },
    {
        codigo: "ME004",
        categoria: "Antiparasitarios",
        nombreCom: "Nexgard",
        principioAct: "Afoxolaner",
        presentacion: "Masticable 1 unid.",
        especie: "Perro",
        stock: 60,
        precioUni: 9500
    },
    {
        codigo: "ME005",
        categoria: "Antiparasitarios",
        nombreCom: "Bravecto",
        principioAct: "Fluralaner",
        presentacion: "Masticable 1 unid.",
        especie: "Perro",
        stock: 40,
        precioUni: 18900
    },
    {
        codigo: "ME006",
        categoria: "Antiparasitarios",
        nombreCom: "Revolution Plus",
        principioAct: "Selamectina+Sarolaner",
        presentacion: "Pipeta 1 unid.",
        especie: "Gato",
        stock: 35,
        precioUni: 14500
    },
    {
        codigo: "ME007",
        categoria: "Antiparasitarios",
        nombreCom: "Drontal Plus",
        principioAct: "Praziquantel+Pamoato",
        presentacion: "Comprimido 1 unid.",
        especie: "Perro",
        stock: 80,
        precioUni: 3200
    },
    {
        codigo: "ME008",
        categoria: "Antiparasitarios",
        nombreCom: "Milbemax Gato",
        principioAct: "Milbemicina+Praziq.",
        presentacion: "Comprimido 2 unid.",
        especie: "Gato",
        stock: 50,
        precioUni: 6800
    },
    {
        codigo: "ME009",
        categoria: "Antiinflamatorios",
        nombreCom: "Meloxicam 1mg",
        principioAct: "Meloxicam",
        presentacion: "Blíster 10 comp. ",
        especie: "Perro/Gato",
        stock: 55,
        precioUni: 4500
    },
    {
        codigo: "ME010",
        categoria: "Antiinflamatorios",
        nombreCom: "Carprofen 50mg",
        principioAct: "Carprofeno",
        presentacion: "Blíster 10 comp. ",
        especie: "Perro",
        stock: 30,
        precioUni: 9800
    },
    {
        codigo: "ME011",
        categoria: "Dermatología",
        nombreCom: "Clorhexidina shampoo",
        principioAct: "Clorhexidina 2%",
        presentacion: "Frasco 250ml ",
        especie: "Perro/Gato",
        stock: 25,
        precioUni: 8900
    },
    {
        codigo: "ME012",
        categoria: "Dermatología",
        nombreCom: "Malaseb shampoo",
        principioAct: "Miconazol+Clorhex.",
        presentacion: "Frasco 250ml ",
        especie: "Perro/Gato",
        stock: 20,
        precioUni: 12500
    },
    {
        codigo: "ME013",
        categoria: "Dermatología",
        nombreCom: "Apoquel 16mg",
        principioAct: "Oclacitinib",
        presentacion: "Blíster 10 comp.",
        especie: "Perro",
        stock: 18,
        precioUni: 22000
    },
    {
        codigo: "ME014",
        categoria: "Digestivo",
        nombreCom: "Probifor",
        principioAct: "Bacillus clausii",
        presentacion: "Sobre 5ml x10 ",
        especie: "Perro/Gato",
        stock: 40,
        precioUni: 5600
    },
    {
        codigo: "ME015",
        categoria: "Digestivo",
        nombreCom: "Omeprazol 10mg vet",
        principioAct: "Omeprazol",
        presentacion: "Blíster 10 comp.",
        especie: "Perro/Gato",
        stock: 35,
        precioUni: 3800
    },
    {
        codigo: "ME016",
        categoria: "Cardíaco",
        nombreCom: "Vetmedin 2.5mg",
        principioAct: "Pimobendan",
        presentacion: "Blíster 10 comp.",
        especie: "Perro",
        stock: 15,
        precioUni: 28000
    },
    {
        codigo: "ME017",
        categoria: "Analgésicos",
        nombreCom: "Tramadol 50mg vet",
        principioAct: "Tramadol",
        presentacion: "Blíster 10 comp.",
        especie: "Perro",
        stock: 22,
        precioUni: 5200
    },
    {
        codigo: "ME018",
        categoria: "Vacunas",
        nombreCom: "Nobivac DHPPi",
        principioAct: "Vacuna polivalente",
        presentacion: "Vial 1 dosis",
        especie: "Perro",
        stock: 48,
        precioUni: 8500
    },
    {
        codigo: "ME019",
        categoria: "Vacunas",
        nombreCom: "Nobivac Rabies",
        principioAct: "Vacuna antirrábica",
        presentacion: "Vial 1 dosis",
        especie: "Perro/Gato",
        stock: 60,
        precioUni: 5800
    },
    {
        codigo: "ME020",
        categoria: "Vacunas",
        nombreCom: "Felocell CVR",
        principioAct: "Vacuna triple felina",
        presentacion: "Vial 1 dosis",
        especie: "Gato",
        stock: 36,
        precioUni: 7200
    },
    {
        codigo: "ME021",
        categoria: "Suplementos",
        nombreCom: "Omega vet 3-6-9",
        principioAct: "Ácidos grasos omega",
        presentacion: "Frasco 100ml ",
        especie: "Perro/Gato",
        stock: 30,
        precioUni: 9900
    },
    {
        codigo: "ME022",
        categoria: "Suplementos",
        nombreCom: "Condrovet forte",
        principioAct: "Condroitín+Glucos.",
        presentacion: "Blíster 30 comp.",
        especie: "Perro",
        stock: 25,
        precioUni: 14500
    }
];

let lista = document.getElementById("listaProductos");
for (let i = 0; i < producto.length; i++){
    lista.innerHTML += `
        <div>
            <h2>${producto[i].nombreCom}</h2>
            <p>Precio: $${producto[i].precioUni}</p>
            <button onclick="verDetalle('${producto[i].codigo}')">
                ver detalle
            </button>
            <hr>
        </div>
    `;
}

function verDetalle(codigo){
    let proSeleccionado;
    for(let i = 0; i<producto.length; i++){
        if(producto[i].codigo == codigo){
            proSeleccionado = producto[i];
        }
    }

    localStorage.setItem(
        "producto",
        JSON.stringify(proSeleccionado)
    );

    window.location.href = "detallePro.html"
}