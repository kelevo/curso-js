//Creacion de un objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};
//Forma de acceder a las propiedades de los objetos
miAuto.marca
miAuto.annio

//Objetos con funciones (metodos)
var miAuto2 = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
//Ingresar al metodo de nuestro objeto
miAuto2.detalleDelAuto();
//El this hace referencia al objeto, hace referencia a su padre