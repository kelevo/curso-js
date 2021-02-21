var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
var usuario = "piedra";
var cpu = "papel";

switch (usuario) {
    case "piedra":
        if (cpu === piedra) {
            console.log("Empate");
        } else if (cpu === papel) {
            console.log("Gana el cpu con " + papel);
        } else if (cpu === tijera) {
            console.log("Gana el usuario con " + piedra);
        }
        break;
    case "papel":
        if (cpu === piedra) {
            console.log("Gana el usuario con " + papel);
        } else if (cpu === papel) {
            console.log("Empate");
        } else if (cpu === tijera) {
            console.log("Gana el cpu con " + tijera);
        }
        break;
    case "tijera":
        if (cpu === piedra) {
            console.log("Gana el cpu con " + piedra);
        } else if (cpu === papel) {
            console.log("Gana el usuario con " + tijera);
        } else if (cpu === tijera) {
            console.log("Empate");
        }
        break;
}
