autos = [{
        marca: 'volkswagen',
        modelo: "golf",
        precioCredito: 20000000,
        precioLista: 24000000
    },
    {
        marca: "volkswagen",
        modelo: "virtus",
        precioCredito: 15000000,
        "precioLista": 18000000
    },
    {
        marca: "chevrolet",
        modelo: "onix",
        precioCredito: 12000000,
        precioLista: 14000000
    },
    {
        marca: "chevrolet",
        modelo: "f150",
        precioCredito: 35000000,
        precioLista: 39000000
    },
    {
        marca: "fiat",
        modelo: "mobi",
        precioCredito: 9500000,
        precioLista: 11800000
    }

]

const marcas = autos.map((item) => item.marca);

const marcasUnicas = new Set(marcas);

marcasUnicas.forEach(function(element){
    let listaMarcas = document.querySelector("#selectMarca");
    let nuevoAuto = document.createElement("option");
    nuevoAuto.value = element;
    nuevoAuto.innerHTML = element;
    listaMarcas.append(nuevoAuto);
});

// for (const auto of autos) {

//     let listaMarcas = document.querySelector("#selectMarca");
//     let nuevoAuto = document.createElement("option");
//     nuevoAuto.value = auto.marca;
//     nuevoAuto.innerHTML = auto.marca;
//     listaMarcas.append(nuevoAuto);
// }

let marcaElegida = document.getElementById('selectMarca');

marcaElegida.addEventListener("change", cambioMarca)

function cambioMarca() {

    let filtroMarca = autos.filter(marca => marca.marca === marcaElegida.value)

    for (const filtrado of filtroMarca) {

        let listaModelo = document.querySelector("#selectModelo")
        let nuevoAuto = document.createElement("option");
        nuevoAuto.value = filtrado.modelo;
        nuevoAuto.innerHTML = filtrado.modelo;
        listaModelo.append(nuevoAuto);
    }
}

let modeloElegido = document.getElementById('selectModelo');

console.log(modeloElegido.value)

modeloElegido.addEventListener("change", cambioModelo)

function cambioModelo() {
}

let radioBtns = document.querySelectorAll("input[name='pago']");

let encotrarSelect = () => {
    let select = document.querySelector("input[name='pago']:checked").value;
    if(select === "contado"){
        let filtroAuto = autos.find(auto => auto.marca === marcaElegida.value && auto.modelo === modeloElegido.value)
        let formulario = document.getElementById("form");
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerHTML = "Pago al CONTADO";
        let elegido = document.createElement("h4");
        let texto = document.createElement("p");
        elegido.innerText = "el auto que elegiste es: "+ marcaElegida.value + " " + modeloElegido.value;
        texto.innerHTML = "el monto que tienes que pagar es de: $"+ filtroAuto.precioLista ;
        formulario.append(fieldset);
        fieldset.append(legend);
        fieldset.append(elegido);
        fieldset.append(texto);
        
    }else{
        let filtroAuto = autos.find(auto => auto.marca === marcaElegida.value && auto.modelo === modeloElegido.value)
        let formulario = document.getElementById("form");
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerHTML = "Cotizando el CREDITO";
        let montoLabel = document.createElement("label")
        let montoInput = document.createElement("input")
        montoInput.type = Number
        formulario.append(fieldset);
        fieldset.append(legend);
        fieldset.append(montoInput);


        console.log("pago credito")
    }
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", encotrarSelect)
})
