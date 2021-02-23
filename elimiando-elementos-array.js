//Metodo push - nos permite agregar uno o mas elementos al final de un array
//Array inicial
let numArray = [1, 2, 3, 4, 5]
//Funcion
function newNum() {
    //Aagrega elementos
    numArray.push(6, 7)
    //Revisa el array que ahora tiene los numeroa agregados
    console.log(numArray)
}
//Ejecutar la funcion
newNum()
//------------------------------------------------------------------------------------

//Metodo shift - Elimina el primer elemento de un array osea el indice 0
//Creacion del array
let array = [1, 2, 3, 4, 5];
console.log(array);
//Aplicamos shift()
let shiftArray = array.shift();
//Revisamos el output que debe ser [2, 3, 4, 5]
console.log(array);
//------------------------------------------------------------------------------------

//Metodo Pop - Eliminara el ultimo elemento de un array
//Creamos el array
let array = [1, 2, 3, 4, 5];
console.log(array);
//Aplicaomos pop()
let shiftArray = array.pop();
//Rvisamos el array que tiene que ser [1, 2, 3, 4]
console.log(array)