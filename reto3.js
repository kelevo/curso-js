//Template de funcion constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];
var numAutos = prompt("Cuantos autos deseas generar?");

for (var i = 0; i < numAutos; i++) {
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el annio del auto");
    autos.push(new auto (marca, modelo, annio));
}

for (var j = 0; j < autos.length; j++) {
    console.log(autos[j]);
}