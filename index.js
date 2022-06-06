
var precio = parseInt(prompt("Ingrese precio del vehiculo"));
var pie = parseInt(prompt("ingrese pie a pagar"));
var cuotas = parseInt(prompt("ingrese cuotas(minimo 24): "));

while(isNaN(precio)== true){
    precio = parseInt(prompt("Ingrese un valor numerico al precio del vehiculo"));
    while(precio<5000000){
        precio = parseInt(prompt("el precio minimo del auto es de $5.000.000"));
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

while(isNaN(cuotas)== true){
    cuotas = parseInt(prompt("Ingrese un valor numerico a las cuotas"));
    while(cuotas<24){
        cuotas = parseInt(prompt("ingrese cuotas(minimo 24): "));
    }
}
var monto = precio-pie;
let interes = 0.025

let prestamo = Math.round((monto*interes*cuotas)+monto);
let cuotasMensuales = Math.round(prestamo/cuotas);


console.log("el prestamos seria de: $" + prestamo);
console.log("tienes que pagar: $" + cuotasMensuales);

alert("el prestamos seria de: $" + prestamo);
alert("tienes que pagar: $" + cuotasMensuales);
