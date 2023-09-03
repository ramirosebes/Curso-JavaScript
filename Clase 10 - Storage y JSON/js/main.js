//--------------------STORAGE y JSON--------------------
//Funcionan en el JS de forma muy similar, las formas en las que llamamos, guardamos o recuperar las cosas es igual solo que camibamos locaStorage por sessionStorage. Al apretar F12 debemos ir a la parte de Almacenamiento

//----------LOCAL STORAGE----------
//LOCAL STORAGE guarda informacion indefinidamente y no se borra nunca, a menos que el usuario vaya a la seccion Almacenamiento en el inspeccionar y lo borre manualmente. 
//TODO LO QUE SE GUARDE EN LOCAL STORAGE LO VA A HACER COMO STRING

//----------SESSION STORAGE----------
//SESSION STORAGE guarda inforamacion durante una pestaña abierta o sesion, si cerramos la pestaña o abrimos otra esa inforamcion se pierde

//En Google Chrome hay que ir a Application --> Storage --> local Storage/Session Storage

// localStorage.setItem("iva", 21);
// localStorage.setItem("nombre", "Carpi");

// let usuario = "Matías";
// localStorage.setItem("usuario", usuario);

//-----Acceder y guardar-----
// let usuarioEnLocalStorage = localStorage.getItem("usuario"); //guarda lo que este en el LOCAL STORAGE
// console.log(usuarioEnLocalStorage);

// let usuarioIngresado = prompt("Ingrese su nombre");
// localStorage.setItem("usuario-ingresado", usuarioIngresado);
// let usuarioIngresadoEnLocalStorage = localStorage.getItem("usuario-ingresado");
// console.log(usuarioIngresadoEnLocalStorage);


//----------OBJETOS----------
const usuario = {
    nombre: "Carpi",
    edad: 27
}

// localStorage.setItem("usuario1", usuario1); //Aprece como [Object Object]

//----------Guardar en el storage---------

//-----Opción 1-----
const usuarioJSON = JSON.stringify(usuario); //Lo convierte el Objecto a JSON
localStorage.setItem("usuario", usuarioJSON);

//-----Opción 2----- //Simplificado
localStorage.setItem("usuario", JSON.stringify(usuario));

//----------Recupera en el storage---------

//-----Opción 1-----
const usuarioEnLocalStorage = localStorage.getItem("usuario"); //Recupera el objeto en el storage
const usuarioObjeto = JSON.parse(usuarioEnLocalStorage); //Lo transforma de string a objeto

//-----Opción 2----- //Simplificado
const usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioEnLS);

//----------ARRAY DE OBJETOS----------
const productos = [
    { nombre: "Silla", precio: 1500 },
    { nombre: "Sillón", precio: 1500 },
    { nombre: "Mesa", precio: 1500 },
];

localStorage.setItem("productos", JSON.stringify(productos));

const productosEnLS = JSON.parse(localStorage.getItem("productos"));
console.log(productosEnLS);

//----------EJEMPLO DE DARK MODE----------

const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})