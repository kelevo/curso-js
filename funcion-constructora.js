//Template de funcion constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Construyendo un objeto nuevo con relacion al template
var autoNuevo = new auto("Tesla", "Model 3", 2020);

var autoNuevo2 = new auto("Tesla", "Model X", 2018);

var autoNuevo3 = new auto("Toyota", "Corolla", 2020);