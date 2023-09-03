//--------------------DOM--------------------

//--------------------BYID--------------------
//Accede al elemento mediante el ID

// const contenido = document.getElementById("contenido");
// console.log(contenido);


//--------------------BYCLASSNAME--------------------
//Accede al elemento mediante el nombre de la clase

// const parrafos = document.getElementsByClassName("parrafo");
// console.log(parrafos);

//--------------------QUERYSELECTOR--------------------
//Accede al elemento HTML mediante el id ("#id") o la clase (".clase")
//El ALL trae todos los elementos con ese selector

//----------ID----------
// const contenidoID = document.querySelector("#contenido"); //#id 
//----------CLASS----------
// const contenidClass = document.querySelector(".contenido"); //.class
//----------ALL----------
// const parrafos = document.querySelectorAll(".parrafo") //Todos los elementos que tengan ese selector

const contenido = document.querySelector("#contenido");
const parrafos = document.querySelectorAll(".parrafo")

// console.log(parrafos);
// parrafos.forEach(parrafo => console.log(parrafo));
// console.log(parrafos[0]);

// console.log(contenido.className);
// console.log(contenido.classList);
// contenido.classList.add("prueba2");
// contenido.classList.remove("contenido");
// console.log(contenido.classList);

// contenido.className = "prueba3"; //Redefine toda la clase, reemplazada el atributo todo class del HTml por el que coloquemos aca

// console.log(contenido.innerHTML);
// console.log(contenido.innerText);

// parrafos[0].innerText = "Hola, mundo!"; //Permite cambiar textos
// parrafos[0].innerHTML = "Hola, mundo! <a href='#'>Esto es un enlace</a>"; //Permite cambiar textos y semantica HTML

//----------ELIMINAR ELEMENTOS DEL HTML----------
// contenido.remove();
// parrafos[2].remove();

//----------AGREGAR ELEMENTOS DEL HTML----------

const productos = ["Sillon", "Silla", "Mesa", "Ventana", "Puerta", "Cama"];

let lista = document.createElement("ul"); //Crea las etiquetas
// lista.classList.add("lista"); //Agrega la clase "lista" a la lista
// lista.innerHTML = "<li class='lista-item'>" + productos[0] + "</li>";
// lista.innerHTML += "<li class='lista-item'>" + productos[1] + "</li>"; //Se debe colocar += porque si no se sobreescrive
// lista.innerHTML += `<li class="lista-item">${productos[2]}</li>`;
// lista.innerHTML += `<p>Este es el item 4 ${productos[3]}`;
// lista.innerHTML += "<li class='lista-item'>Item 4</li>";
// lista.innerHTML += "<li class='lista-item'>Item 6</li>";

for (producto of productos) {
    lista.innerHTML += `<li class="lista-item">${producto}</li>`
}

//----------APPEND----------
//Nos permite agregar un elemento HTML que hayamos creado aca a cualquier otro elemento HTML que tengamos guardado como variable o que ayamos creado
contenido.append(lista);

console.log(lista);