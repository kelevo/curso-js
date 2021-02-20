//Declarando una variable
var miNombre;
//Inicializando una variable
miNombre = "Patrick";

//Declaracion e inicializacion de una variable en el momento
var miApellido = "Hernandez";

//Hoisting con funciones
hey();
function hey() {
    console.log("Hola " +  miApellido);
}