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
        precioLista: 18000000
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
        marca: "MG",
        modelo: "GT",
        precioCredito: 13300000,
        precioLista: 15000000
    },
    {
        marca: "MG",
        modelo: "ZS",
        precioCredito: 11500000,
        precioLista: 13000000
    },
    {
        marca: "MG",
        modelo: "3",
        precioCredito: 9700000,
        precioLista: 11000000
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
    let listaModelo = document.querySelector(`#selectModelo`);
    listaModelo.innerHTML = `<option value="" disabled selected>-- Seleccione --</option>`

    for (const filtrado of filtroMarca) {
        let nuevoAuto = document.createElement("option");
        nuevoAuto.innerHTML = filtrado.modelo;
        listaModelo.append(nuevoAuto);
    }
}

let modeloElegido = document.getElementById('selectModelo');

modeloElegido.addEventListener("change", cambioModelo);

function cambioModelo() {

}

let radioBtns = document.querySelectorAll("input[name='pago']");

let encotrarSelect = () => {
    let select = document.querySelector("input[name='pago']:checked").value;
    let filtroAuto = autos.find(auto => auto.marca === marcaElegida.value && auto.modelo === modeloElegido.value)
    let div = document.querySelector(`.resultado`)
    div.innerHTML = ""
    if(select === "contado"){
        let fieldset = document.createElement("fieldset");
        fieldset.innerHTML = `<legend class="reset">Pago al CONTADO</legend>
        <h4>el auto que elegiste es: ${marcaElegida.value} ${modeloElegido.value}</h4>
        <p>el monto que tienes que pagar es de: $${filtroAuto.precioLista}</p>`;
        div.append(fieldset);
    }else{
        let fieldset = document.createElement("fieldset");
        fieldset.id = "cotizador"
        fieldset.innerHTML = `<legend class="reset">Cotizando el CREDITO</legend><label for="pie">Pie a Pagar</label>
        <input type="number" name="pie" id="pie" min="${(filtroAuto.precioCredito)*0.1}" max="${(filtroAuto.precioCredito)*0.5}" required="true"><label for="cuotas">Cantidad de cuotas</label>
        <input type="number" required name="cuotas" id="cuotas" min="${24}" max="${60}">`;
        div.append(fieldset);
    }
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", encotrarSelect)
})

let form = document.querySelector("#form")

let btnClick = event => {
    let filtroAuto = autos.find(auto => auto.marca === marcaElegida.value && auto.modelo === modeloElegido.value)
    let monto = filtroAuto.precioCredito - pie.value
    let prestamo = (monto*cuotas.value*0.018) + monto;
    let cuotaMensual = Math.round(prestamo/cuotas.value);
    alert(`el valor del credito es de $${prestamo}
y las cuotas mensuales son de $${cuotaMensual}`);
    event.preventDefault();
}

form.addEventListener("submit", btnClick);
