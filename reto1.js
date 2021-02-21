var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

var resultado = function(user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op2) {
            console.log("El cpu gano con: " + op2);
        }
        else if (user === op2 && cpu === op3) {
            console.log("El cpu gano con: " + op3);
        }
        else if (user === op3 && cpu === op1) {
            console.log("El cpu gano con: " + op1);
        }
        else {
            console.log("El usuario gano");
        }
    } else {
        console.log("Empate")
    }
}

resultado(op1, op3);