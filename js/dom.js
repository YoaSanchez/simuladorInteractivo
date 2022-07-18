let autos = []

result = fetch(`js/datos.json`)
.then(Response => Response.json())
.then(datos => {
    autos = datos;
    const marcas = autos.map((item) => item.marca);
    const marcasUnicas = new Set(marcas);
    marcasUnicas.forEach(function (element) {
        let listaMarcas = document.querySelector("#selectMarca");
        let nuevoAuto = document.createElement("option");
        nuevoAuto.value = element;
        nuevoAuto.innerHTML = element;
        listaMarcas.append(nuevoAuto);
    });
})


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
    if (select === "contado") {
        let credito = document.querySelector(".credito");
        let fieldset = document.createElement("fieldset");
        fieldset.innerHTML = `<legend>Pago al CONTADO</legend>
        <h4>el auto que elegiste es: ${marcaElegida.value} ${modeloElegido.value}</h4>
        <p>el monto que tienes que pagar es de: $${filtroAuto.precioLista}</p>`;
        div.append(fieldset);
        credito.innerHTML = "";
    } else {
        let fieldset = document.createElement("fieldset");
        fieldset.id = "cotizador"
        fieldset.innerHTML = `<legend>Cotizando el CREDITO</legend><label for="pie">Pie a Pagar</label>
        <input type="number" name="pie" id="pie" min="${(filtroAuto.precioCredito)*0.1}" max="${(filtroAuto.precioCredito)*0.5}" required="true"><label for="cuotas">Cantidad de cuotas</label>
        <input type="number" required name="cuotas" id="cuotas" min="${24}" max="${60}"><input type="submit" value="Cotizar" form="form" id="btn">`;
        div.append(fieldset);
    }
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click", encotrarSelect)
})

let form = document.querySelector("#form")

let btnClick = event => {

    let filtroAuto = autos.find(auto => auto.marca === marcaElegida.value && auto.modelo === modeloElegido.value)
    let monto = filtroAuto.precioCredito - pie.value
    let prestamo = (monto * cuotas.value * 0.018) + monto;
    let cuotaMensual = Math.round(prestamo / cuotas.value);

    event.preventDefault();

    Swal.fire({
        title: 'ya casi terminamos',
        html: `<h4>Quieres guardar esta cotizacion?</h4> <p>${marcaElegida.value} ${modeloElegido.value}</p> <p>El prestamo seria de $${Math.round(prestamo)}</p> <p>Las cuotas de $${Math.round(cuotaMensual)} </p>`,
        text: `Quieres guardar esta cotizacion? ${marcaElegida.value} ${modeloElegido.value}`,
        icon: 'info',
        showCancelButton: true,
        cancelButtonText: `modificar cotizacion`,
        confirmButtonText:`Guardar cotizacion`
    }).then((result) => {
        if (result.isConfirmed) {
            let creditoSimulado = [`${marcaElegida.value} ${modeloElegido.value}`, Math.round(pie.value), Math.round(cuotas.value), Math.round(prestamo), Math.round(cuotaMensual)];
            localStorage.setItem(modeloElegido.value + cuotas.value + Math.round(cuotaMensual), JSON.stringify(creditoSimulado));
            document.location.reload(true);
        }
    })
}

form.addEventListener("submit", btnClick);

for (var i = 0; i < localStorage.length; ++i) {
    let cantidad
    cantidad = localStorage.getItem(localStorage.key(i))

    creditasos = JSON.parse(cantidad);
    let storage = document.querySelector(".storage");
    let contcredito = document.createElement("div");
    contcredito.className = "col-md-3 m-3";
    contcredito.innerHTML = `<h4>${creditasos[0]}</h4><div><p>pie: $${creditasos[1]}</p><p> cuotas: ${creditasos[2]}</p></div><p>total: $${creditasos[3]}</p><p>mensual: $${creditasos[4]}</p>`;
    storage.append(contcredito);
}

let clear = document.querySelector(".storageClear");

let reset = () => {
    localStorage.clear();
    document.location.reload(true);
};

clear.addEventListener("click", reset);