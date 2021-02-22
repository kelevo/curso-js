//Creamos el array estudiantes
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

//Creamos la funcion que pedira como parametro un estudiante
//y devolvera un string diciendo Hola las el nombre del estudiante
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
//Cada que se cumpla el loop ira sacando un elemento del arrray
//Mientras el array estudiantes tenga objetos el bucle se ejecutara
//Mostrara el contenido del array, despues dentro de la variable estudiante
//ingresara el primer objeto extraido del array estudiantes
//para despues ejecutar la funcion saludar estudiante
while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}