/*Es una estructura de datos que va a almacenar
una lista de elementos, Declaracion*/
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
//Acceso a los elementos del array, ejeplo de consola
console.log(frutas);
//Como saber si un array tiene contenido y si es asi, cuanto tiene
console.log(frutas.length)
//Imprimir elemento por elemento
console.log(frutas[0]);

//Metodos para mutar el array
//Agregar elementos al final del array
var masFrutas = frutas.push("Uvas");
//Eliminar el ultimo elemento del aray
var ultimo = frutas.pop("Uvas");
//Agregar un elemento al inicio del array
var nuevaLongitud = frutas.unshift("Durazno");
//Eliminar el ultimo elemento del array
var deleteFruit = frutas.shift("Durazno");
//Saber la posicion en el index del elemento que le pasemos
var position = frutas.indexOf("Platano");