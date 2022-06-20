const autos = [
    ["volkswagen golf", 20000000, 24000000],
    ["volkswagen virtus", 15000000, 1700000],
    ["chevrolet onix", 12000000, 14000000]
]

alert("actualmente tenemos " + autos.length + " autos, elige uno de los siguientes:");

for (var i = 0; i < autos.length; i++) {
    alert(i + 1 + ": " + autos[i][0] + ", su precio es de $" + autos[i][2])
}

var autoElegido = parseInt(prompt("eligue el auto que quieres."));

while (isNaN(autoElegido) == true) {
    autoElegido = parseInt(prompt("Ingrese un numero de 1 al 3"));
    while (autoElegido < 1 || autoElegido > 3) {
        autoElegido = parseInt(prompt("Ingrese un numero de 1 al 3"));
    }
}
while (autoElegido < 1 || autoElegido > 3) {
    autoElegido = parseInt(prompt("Ingrese un numero de 1 al 3"));
    while (isNaN(autoElegido) == true) {
        autoElegido = parseInt(prompt("Ingrese un numero de 1 al 3"));
    }
}

alert("elegiste: " + autos[autoElegido - 1][0]);

var pago = parseInt(prompt("eligue metodo de pago, 1. para credito 2. para pago al contado"));

while (isNaN(pago) == true) {
    pago = parseInt(prompt("1. para credito 2. para pago al contado"));
    while (pago < 1 || pago > 2) {
        pago = parseInt(prompt("1. para credito 2. para pago al contado"));
    }
}
while (pago < 1 || pago > 2) {
    pago = parseInt(prompt("1. para credito 2. para pago al contado"));
    while (isNaN(pago) == true) {
        pago = parseInt(prompt("1. para credito 2. para pago al contado"));
    }
}

var precio = autos[autoElegido - 1][pago];

if (pago == 1) {

    alert("el valor del auto es de: $" + precio)

    var pie = parseInt(prompt("ingrese pie a pagar"));

    while (isNaN(pie) == true) {
        pie = parseInt(prompt("Ingrese un valor numerico a pagar en el pie"));
        while (pie < (precio * 0.1)) {
            pie = parseInt(prompt("el pie minimo es del 10% del valor del vehiculo"));
        }
        while (pie > (precio * 0.5)) {
            pie = parseInt(prompt("el pie maximo es del 50% del valor del vehiculo"));
        }
    }
    while (pie < (precio * 0.1)) {
        pie = parseInt(prompt("el pie minimo es del 10% del valor del vehiculo"));
        while (pie > (precio * 0.5)) {
            pie = parseInt(prompt("el pie maximo es del 50% del valor del vehiculo"));
        }
        while (isNaN(pie) == true) {
            pie = parseInt(prompt("Ingrese un valor numerico a pagar en el pie"));
        }
    }
    while (pie > (precio * 0.5)) {
        pie = parseInt(prompt("el pie maximo es del 50% del valor del vehiculo"));
        while (pie < (precio * 0.1)) {
            pie = parseInt(prompt("el pie minimo es del 10% del valor del vehiculo"));
        }
        while (isNaN(pie) == true) {
            pie = parseInt(prompt("Ingrese un valor numerico a pagar en el pie"));
        }
    }

    var cuotas = parseInt(prompt("ingrese cuotas(minimo 24): "));

    while (isNaN(cuotas) == true) {
        cuotas = parseInt(prompt("Ingrese un valor numerico a las cuotas"));
        while (cuotas < 24) {
            cuotas = parseInt(prompt("ingrese cuotas(minimo 24): "));
        }
    }
    while (cuotas < 24) {
        cuotas = parseInt(prompt("ingrese cuotas(minimo 24): "));
        while (isNaN(cuotas) == true) {
            cuotas = parseInt(prompt("Ingrese un valor numerico a las cuotas"));
        }
    }

    var monto = precio - pie;
    let interes = 0.02;

    function prestamo(a, b) {
        return Math.round((a * b * interes) + a)
    }

    function cuotasMensuales(x, y) {
        return Math.round(x / y)
    }

    let deuda = Math.round(prestamo(monto, cuotas))
    let mensualidad = Math.round(cuotasMensuales(deuda, cuotas))

    alert("el valor total del credito sera de: $" + deuda);
    alert("cada cuota sera de: $" + mensualidad + " por " + cuotas + " meses");
} else {
    alert("el monto a pagar es de: $" + precio)
}