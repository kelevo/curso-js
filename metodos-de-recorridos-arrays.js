var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

//Metodo filter, regresa en un array los objetos que entran en conincidencia
var articulosFiltrados = articulos.filter(function(articulo) {
    //Devolvera todos los articulos que tengan precio menor igual a 500
    return articulo.costo <= 500
});

articulosFiltrados
//--------------------------------------------------------------------------------

//Metodo map
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
});

nombreArticulos
//-------------------------------------------------------------------------------

//Metodo find - valida u true o un false, si el articulo existe es true
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop"
});

encuentraArticulo
//-------------------------------------------------------------------------------

//Metodo ForEach - no genera un nuevo array solo filra el original sin modificarlo
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});
//------------------------------------------------------------------------------

//Metodo some - regresa una validacion de verdadero o falso para articulos que
//sean validados (Nos dira si habra articulos menores a 700 con un true)
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});

articulosBaratos
//--------------------------------------------------------------------------------