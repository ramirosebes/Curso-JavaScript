// ==           Es iguak
// ===          Es estrictamente igual
// !=           Es distinto
// !==          Es estrictamente distinto
// < <= > >=    Menos / Menor o igual / Mayor / Mayor o igual

// &&           Operador AND
// ||           Operador OR
// !            Operador NOT

// let edad = prompt("Ingrese su edad");

// if (edad >= 18) {
//     alert("Sos maoyr de edad")
// } else {
//     alert("Sos menor de edad. No podes ingresar.")
// }

// let hora = prompt("Ingrese la hora");

// if (hora >= 6 && hora <12) {
//     alert("Buenos dias!")
// } else if (hora >= 12 && hora <20) {
//     alert("Buenas tardes!")
// } else {
//     alert("Buenas noches!")
// }

let usuario1 = "Carpi";
let usuario2 = "Coder";

let nombreUsuario = prompt("Ingrese su nombre de usuario");

// if (nombreUsuario == "Carpi") {
//     alert("Bienvenido " + nombreUsuario);
// } else if (nombreUsuario == "Coder") {
//     alert("Bienvenido " + nombreUsuario);
// } else {
//     alert("Nombre de usuario incorrecto");
// }

// if (nombreUsuario == "Carpi" || nombreUsuario == "Coder") {
//     alert("Bienvenido " + nombreUsuario);
// } else {
//     alert("Nombre de usuario incorrecto");
// }

if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert("Bienvenido " + nombreUsuario);
} else {
    alert("Nombre de usuario incorrecto");
}


