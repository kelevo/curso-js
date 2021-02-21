if (true) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}

var edad = 18;
if (edad === 18) {
    console.log("Puedes votar, sera tu primera votacion");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar")
}

//Generando un if en una sola linea
// condition ? true : false

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No soy uno";