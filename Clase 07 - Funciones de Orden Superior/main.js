//--------------------FUNCIONES DE ORDEN SUPERIOR--------------------

//--------------------ABSTRACCION--------------------
// function sumarRango(min, max) {
//     let total = 0;

//     for (let i = min; i <= max; i++) {
//         total += i;
//     }

//     return total;
// }

// console.log(sumarRango(1, 10));
// console.log(sumarRango(3, 7));
// console.log(sumarRango(2, 4));

// let sumaEntreTresYSiete = sumarRango(3, 7);
// console.log(sumaEntreTresYSiete);

//--------------------RETORNO DE FUNCIONES--------------------

// const mayorQueDiez = (num) => num > 10;
// const mayorQueDiez = num => num > 10;
// const mayorQueDiez = (num) => {
//     return num > 10;
// }
// console.log(mayorQueDiez(10));

// function mayorqQue(x) {
//     return (num) => num > x;
// }

// const mayorQueDiez = mayorQue(10);
// const mayorQueVeinte = mayorQue(20);

// console.log(mayorQueDiez(10));
// console.log(mayorQueVeinte0(40));

//--------------------METODO DE BUSQUEDA Y TRANSFORMACION--------------------

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["Perro", "Gato", "Cisne", "Totuga"];
const productos = [
    { nombre: "Mesa", precio: 3500 },
    { nombre: "Silla de plastico", precio: 2000 },
    { nombre: "Silla de madera", precio: 2500 },
    { nombre: "Ventana", precio: 4500 },
    { nombre: "Puerta", precio: 3000 },
];

//--------------------FOREACH--------------------
//Recorre el array y ejecuta una operacion dada

// numeros.forEach((numero) => {
//     console.log(numero);
// });

// productos.forEach((producto) => {
//     console.log(producto.nombre);
//     console.log(producto.precio);
// });

//--------------------FIND--------------------
//Recorre el array y retorna el 1er elemento que cumpla con la condicion

// const perro = animales.find((animal) => animal === 'Perro');
// // const perro = animales.find((animal) => {
// //     return animal === 'Perro'
// // });

// console.log(perro);

// let productoElegido = prompt('Ingrese el producto que quiere comprar');
// console.log( productos.find((producto) => producto.nombre === productoElegido));

//--------------------FILTER--------------------
//Recorrer el array y retorna uno nuevo con todos los elementos que cumplan con una condicion
//Si no encuentra nada, retorna una array vacio

// const gato = animales.filter((animal) => animal === 'Gato');
// console.log(gato);

// const sillas = productos.filter((producto) => producto.nombre.includes("Silla"))
// console.log(sillas);

//--------------------SOME--------------------
//Recorre el array y retorna true o false dependiendo si encuentra o no el elemento

// const cisne = animales.some((animal) => animal === "Cisne");
// console.log(cisne);

// const caballo = animales.some((animal) => animal === "Caballo");
// console.log(caballo);

//--------------------MAP--------------------
//Recorre el array y retorna uno nuevo con los elementos transformados del arraray origial
//Funciona mejor en array de objetos, ya que si no podes hacer un foreach

// const nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);

// const preciosActualizados = productos.map((producto) => {
//     return {
//         nombres: producto.nombre,
//         precio: producto.precio * 1.5,
//     }
// });

// console.log(productos);
// console.log(preciosActualizados);

//--------------------REDUCE--------------------
//Recorre el array y retorna un unico valor tras hacer una operacion sobre los elementos
//El ultimo numero indica con el numero que iniciamos la suma

// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(total);

// const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log(totalCarrito);

//--------------------SORT--------------------
//Reordena el array segun el criterio indicado
//Transforma el array original

// //Menor a mayor
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// //Mayor a menor
// numeros.sort((a, b) => a + b);
// console.log(numeros);

//--------------------MATH--------------------

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

//--------------------MIN--------------------
//Retorna el numero mas chico

// console.log(Math.min(50, 12, 37, 17, 25, 6));

//--------------------MIN--------------------
//Retorna el numero mas grande

// console.log(Math.max(50, 12, 37, 17, 25, 6));

//--------------------CEIL--------------------
//Retorna el numero que le indiquemos redondeado hacia arriba

// console.log(Math.ceil(numeroDecimal1));
// console.log(Math.ceil(numeroDecimal2));


//--------------------FLOOR--------------------
//Retorna el numero que le indiquemos redondeado hacia abajo

// console.log(Math.floor(numeroDecimal1));
// console.log(Math.floor(numeroDecimal2));

//--------------------ROUND--------------------
//Retorna el numero redondeado hacia abajo o hacia arriba

// console.log(Math.round(numeroDecimal1));
// console.log(Math.round(numeroDecimal2));

//--------------------Random--------------------
//Retorna un numero aleatorio entre [0;1]

// console.log(Math.random());
// console.log( Math.round( Math.random() ) );

// console.log( Math.round( Math.random()* 50) ); //Entre [0;50]
// console.log( Math.round( Math.random()* 50 + 20) ); //Entre [0;50] partiendo de 20 como minimo

