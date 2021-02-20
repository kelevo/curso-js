//Funciones declarativas
function miFuncion() {
    return 3;
}

miFuncion();

//Funciones de expresion tambien llamadas funciones anonimas
var miFuncion = function(a, b) {
    return a + b;
}

miFuncion();

//Ejemplos de funciones
function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}