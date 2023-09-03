//--------------------EVENTOS--------------------
//https://www.javatpoint.com/javascript-events

//----------EVENTOS DEL MOUSE----------

//----------OPCION1----------
//RECOMENDABLE
// Mostrar mensaje en una alerta -- Haciendo referencia a la función
const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
    alert("Hola, mundo!");
}

//----------OPCION2----------
//NO RECOMENDABLE
// alerta.onclick = () => {
//     alert("Hola, mundo!")
// }

//----------OPCION3----------
//NO RECOMENDABLE
//Colocar como atributo dentro de la etiqueta html
//onclick="alert('Hola, mundo!')"

//----------CONSOLA----------
// Mostrar mensaje en la consola -- Escribir una función anónima

//----------OPCION1----------
const consola = document.querySelector("#consola");
consola.addEventListener("click", (event) => { //click --> mouseover
    console.log(event);
})

//----------OPCION2----------
// const consola = document.querySelector("#consola");
// consola.addEventListener("click", () => {
//     console.log("Hola, mundo!");
// })

// Agregar clase a un elemento -- Switch Color Mode
const colorModeButton = document.querySelector("#color-mode");
const body = document.body; //const body= document.querySelector("body"); //Otra opcion

colorModeButton.addEventListener("click", cambiarModoColor);
function cambiarModoColor() {
    body.classList.toggle("dark-mode"); //Toggle --> Si tiene la clase la quita y si no la tiene la agrega
    // body.classList.add("dark-mode"); //add --> La agrega y no permite sacar la clase 
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Cambiar a Light Mode";
    } else {
        colorModeButton.innerText = "Cambiar a Dark Mode";
    }
}

//----------EVENTOS DE FORMULARIO----------
//El .value nos permite acceder a aquello que se escribe dentro del input 

//-----Mostrar input en alerta-----
const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("input", () => {
    // console.log("Hola, mundo!"); //Cada vez que escribamos aparecera "Hola,mundo!"
    // console.log(alertaInput);    //Imprime un objeto con los valores del input
    console.log(alertaInput.value); //Imprime cada caracter introducido en el input
    // alert(alertaInput.value) //Cada vez que escribimos sale una alerta, es incomodo
})

//le pasamos como parametro algo y luego lo llamamos para que el submit no envie el formulario al "action=""" aclarado como eatributo en la etiqueta html y lo envie donde nosotros queramos. En otras palabras anula la funcionalidades por defecto.
alertaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(alertaInput.value);   //Muestra el valor del input como alerta
    alertaForm.reset();         //Una vez mostrada la alarta, resetea el campo
});

//-----Mostrar un texto abajo de un input-----
const abajoInput = document.querySelector("#abajo-input");
const abajo = document.querySelector("#abajo");

//input, change, keyup, keydown --> reemplazar y ver que hacen, + info en la pag
abajoInput.addEventListener("input", () => {
    abajo.innerText = abajoInput.value;
})

//-----Agregar ítems a una lista-----
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar");

agregarForm.addEventListener("submit", agregarItems);

function agregarItems(e) {
    e.preventDefault();

    if (agregarInput.value != "") {
        let item = document.createElement("li");
        item.innerText = agregarInput.value;
    
        agregar.append(item);
    } else {
        alert("Input vacío!")
    }

    agregarInput.focus();   //Mantiene el foco en el input al apretar el submit
    agregarForm.reset();    //Resetea el valor del input al apretar el submit
}