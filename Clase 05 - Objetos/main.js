//--------------------OBJETOS--------------------

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 27,
//     nacionalidad: "Argentina",
//     hobbies: {
//         hobbie1: "Futbol",
//         hobbie2: "Videojuegos",
//     }
// }

// const usuario2 = {
//     nombre: "Maria",
//     edad: 25,
//     nacionalidad: "Argentina",
// }

// const productoN = {
//     titulo: "Sillon",
//     peso: 27,
//     color: "Rojo",
// }

// usuario1.nacionalidad = "Brasil";
// usuario1["nacionalidad"] = "Brasil";
// console.log(usuario1.nacionalidad);

// console.log(usuario1);
// console.log(usuario1.nombre);
// console.log(usuario1["edad"]);
// console.log(usuario1.hobbies);
// console.log(usuario1.hobbies.hobbie1);

//--------------------CONSTRUCTOR--------------------

// function Producto (titulo, color, precio) {
//     this.titulo = titulo,
//     this.color = color,
//     this.precio = precio
// }

// const producto1 = new Producto("Sillon", "Rojo", 50000);
// const producto2 = new Producto("Cama", "Blanca", 150000);
// console.log(producto1);

//--------------------CLASES--------------------

// class Prodcuto {
//     constructor(titulo, color, precio) {
//         this.titulo = titulo,
//         this.color = color,
//         this.precio = precio
//     }
// }

// const producto1 = new Producto("Sillon", "Rojo", 50000);

//--------------------METODOS--------------------

// class Persona {
//     constructor(nombre, edad, nacionalidad) {
//         this.nombre = nombre,
//         this.edad = edad,
//         this.nacionalidad = nacionalidad;
//         this.saludar = function() {console.log("Hola, soy " + this.nombre)};
//         this.cumpleanos = function() {/*this.edad = this.edad + 1*/ this.edad++};
//     }
// }

// const persona1 = new Persona("Carpi", 27, "Argentina");
// const persona2 = new Persona("Maria", 25, "Argentina");

// persona1.cumpleanos();
// console.log(persona1.edad);
// persona1.saludar();

//--------------------OPERADOR IN--------------------

// class Persona {
//     constructor(nombre, edad, nacionalidad) {
//         this.nombre = nombre,
//         this.edad = edad,
//         this.nacionalidad = nacionalidad;
//         this.saludar = function() {console.log("Hola, soy " + this.nombre)};
//         this.cumpleanos = function() {/*this.edad = this.edad + 1*/ this.edad++};
//     }
// }

// const persona1 = new Persona("Carpi", 27, "Argentina");

//console.log("nombre" in persona1); //in siempre devuelve un bool

// if ("nombre" in persona1) {
//     console.log(persona1.nombre);
// } else {
//     console.log("No hay nombre");
// }

//--------------------OPERADOR FOR...IN--------------------

//Recorre todas las propiedades  del objeto o array...etc

// class Persona {
//     constructor(nombre, edad, nacionalidad) {
//         this.nombre = nombre,
//         this.edad = edad,
//         this.nacionalidad = nacionalidad;
//         this.saludar = function() {console.log("Hola, soy " + this.nombre)};
//         this.cumpleanos = function() {/*this.edad = this.edad + 1*/ this.edad++};
//     }
// }

// const persona1 = new Persona("Carpi", 27, "Argentina");

// for (const propiedad in persona1) {
//     console.log(propiedad);
// }

//--------------------PROPIEDADES Y METODOS CON VARIABLES Y FUNCIONES EXTERNAS--------------------

const IVA = 1.21;

function saludar() {
    console.log("Hola soy " + this.titulo);
}

const prodcut1 = {
    titulo: "Sillon",
    color: "Rojo",
    precio: 50000,
    iva: IVA,
    saludar,
    tamano: 25,
}

prodcut1.saludar();
console.log(prodcut1.iva);