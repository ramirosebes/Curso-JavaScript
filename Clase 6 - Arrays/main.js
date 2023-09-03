//--------------------ARRAYS--------------------

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// const numeros = [1, 2, 3, 4];
// const booleanos = [ true, true, false];
// const mezcla = ['sillon', 1, 2, true];
// // const usuarios = [{nombre: "Carpi", edad: 27,},{nombre: "Maria",edad: 25}]
// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 27,
//     },
//     {
//         nombre: "Maria",
//         edad: 25
//     }
// ]

//--------------------ACCEDER A LA ARRAY--------------------
// const productos = ["sillon", 'silla', 'mesa', 'ropero'];

// console.log(productos);
// console.log(productos[0]);

//--------------------lENGTH--------------------
//Devuelve la longitud del array

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// console.log(productos.length);
// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }

//--------------------PUSH--------------------
//Aagregar elementos al final del array sin hardcodearlo

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// // let cama = "cama";
// // productos.push(cama);
// productos.push("cama");
// console.log(productos);

//--------------------UNSHIFT--------------------
//Agregar elementos al principio de la array

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// productos.unshift("Puerta");
// console.log(productos);

//--------------------SHIFT--------------------
//Elimina el primer elemento de la array

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// productos.shift();
// console.log(productos);

//--------------------POP--------------------
//Elimina el ultimo elemento de la arrray

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// productos.pop();
// console.log(productos);

//--------------------SPLICE--------------------
//Elimina 1 o varios elemento del array. 
//El 1er valor indica a apartir de que posicion queremos eleminar un elemento y el 2do valor la cantidad de elementos a eliminar

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// productos.splice(1,1);
// console.log(productos);

//--------------------JOIN--------------------
//Imprime TODOS los elemento del array separados por lo que se introduzca en los ()

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// console.log(productos.join(" / "));
// console.log(productos.join("/"));
// console.log(productos.join(" , "));
// console.log(productos.join(","));
// console.log(productos.join(""));
// console.log(productos.join(" "));

//--------------------CONCAT--------------------
//Concatena 2 arrays en 1

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// const productos2 = ["puerta", 'ventana', 'cama'];
// const productosFinal = productos.concat(productos2);
// console.log(productosFinal);

//--------------------SLICE--------------------
//Genera una copia de una parte del array
//El 1er valor indica el indice del 1er elemento a copiar y el 2do valor el indice del ultimo elemento a copiar PERO NO LO INCLUYE

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// const productosComendor = productos.slice(1, 3);
// console.log(productosComendor);

//--------------------INDEXOF--------------------
//Devuelve el indice del elemento dado

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// console.log(productos.indexOf('mesa'));

//--------------------INCLUDES-------------------
//Permite saber si el elemento dado existe en la array. Devuelve un booleano

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// console.log(productos.includes('mesa'));
// console.log(productos.includes('cama'));

// if (productos.includes('mesa')) {
//     console.log(productos.indexOf("mesa"));
// } else {
//     console.log('El elemento no existe');
// }


//--------------------REVERSE-------------------
// Invierte el orden del array

// const productos = ["sillon", 'silla', 'mesa', 'ropero'];
// // productos.reverse()
// // console.log(productos);
// console.log(productos.reverse());
