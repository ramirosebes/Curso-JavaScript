//--------------------FUNCIONES DECLARADAS--------------------

// function saludar(nombre, apellido) {
//     console.log("Hola " + nombre + " " + apellido);
// }

// saludar("Carpi", "Coder");

//FUNCIONES ANONIMAS
// const saludar = function (nombre, apellido) {
//     console.log("Hola " + nombre + " " + apellido);
// }

// saludar("Carpi", "Coder");

//--------------------FUNCIONES FLECHA--------------------

// const saludar = (nombre, apellido) => console.log("Hola " + nombre + " " + apellido);
// const saludar = nombre => console.log("Hola " + nombre);

// const saludar = (nombre, apellido) => {
//     console.log("Hola " + nombre + " " + apellido);
// }

// saludar("Carpi", "Coder");

//Las funciones flechas tienen el return implicito

//--------------------FUNCIONES DECLARADAS CON RETORNO--------------------

// function saludar(nombre) {
//     return "Hola " + nombre;
// }

// // console.log(saludar("Carpi"));
// let saludoACarpi = saludar("Carpi");
// console.log(saludoACarpi);

//Ejemplos
function suma(a, b) {
    return a + b;
}

const resta = (a, b) => a - b

console.log(suma(1, 2));
console.log(resta(2, 1));