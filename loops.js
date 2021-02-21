//Por cada estuaidnate el bucle tiene que saludar una vez
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//Bucle For
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}