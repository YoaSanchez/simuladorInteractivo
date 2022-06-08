
var precio = parseInt(prompt("Ingrese precio del vehiculo"));
var pie = parseInt(prompt("ingrese pie a pagar"));
var cuotas = parseInt(prompt("ingrese cuotas(minimo 24): "));

while(isNaN(precio)== true){
    precio = parseInt(prompt("Ingrese un valor numerico al precio del vehiculo"));
    while(precio<5000000){
        precio = parseInt(prompt("el precio minimo del auto es de $5.000.000"));
    }
}
while(precio<5000000){
    precio = parseInt(prompt("el precio minimo del auto es de $5.000.000"));
    while(isNaN(precio)== true){
        precio = parseInt(prompt("Ingrese un valor numerico al precio del vehiculo"));
    }
}

while(isNaN(pie)== true){
    pie = parseInt(prompt("Ingrese un valor numerico a pagar en el pie"));
    while(pie<(precio*0.1)){
        pie = parseInt(prompt("el pie minimo es del 10% del valor del vehiculo"));
    }
    while(pie>(precio*0.5)){
        pie = parseInt(prompt("el pie maximo es del 50% del valor del vehiculo"));
    }
}
while(pie<(precio*0.1)){
    pie = parseInt(prompt("el pie minimo es del 10% del valor del vehiculo"));
    while(pie>(precio*0.5)){
        pie = parseInt(prompt("el pie maximo es del 50% del valor del vehiculo"));
    }
    while(isNaN(pie)== true){
        pie = parseInt(prompt("Ingrese un valor numerico a pagar en el pie"));
    }
}
while(pie>(precio*0.5)){
    pie = parseInt(prompt("el pie maximo es del 50% del valor del vehiculo"));
    while(pie<(precio*0.1)){
        pie = parseInt(prompt("el pie minimo es del 10% del valor del vehiculo"));
    }
    while(isNaN(pie)== true){
        pie = parseInt(prompt("Ingrese un valor numerico a pagar en el pie"));
    }
}

while(isNaN(cuotas)== true){
    cuotas = parseInt(prompt("Ingrese un valor numerico a las cuotas"));
    while(cuotas<24){
        cuotas = parseInt(prompt("ingrese cuotas(minimo 24): "));
    }
}
while(cuotas<24){
    cuotas = parseInt(prompt("ingrese cuotas(minimo 24): "));
    while(isNaN(cuotas)== true){
        cuotas = parseInt(prompt("Ingrese un valor numerico a las cuotas"));
    }
}

var monto = precio-pie;
let interes = 0.025

function prestamo(a, b){
    return Math.round((a*b*interes)+a)
}

function cuotasMensuales(x, y){
    return Math.round(x/y)
}

let deuda = Math.round(prestamo(monto, cuotas))
let mensualidad = Math.round(cuotasMensuales(deuda, cuotas))

console.log("el prestamos seria de: $" + deuda);
console.log("tienes que pagar: $" + mensualidad + " mensualmente");

alert("el prestamos seria de: $" + deuda);
alert("tienes que pagar: $" + mensualidad + " mensualmente");
