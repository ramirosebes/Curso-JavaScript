//-------------------- Asincronia --------------------

//---------- setTimeout ----------
// console.log("Hola!");

// //setTimeout es asincronico
// setTimeout(() => {
//     console.log("Estoy por la mitad!");
// }, 0); // Igualmente se ejecutara al final del programa

// console.log("Chau!");

//---------- setInterval ----------

// setInterval(() => {
//     console.log("Hola!");
//     console.log("Chau!");
// }, 1000);

// let contador = 0;

// const intervalo = setInterval(() => {
//     contador++;
//     console.log(contador);

//     // clearInterval(intervalo); //Se frena el intervalo

//     if (contador === 5) {
//         clearInterval(intervalo);
//         console.log("El contador se freno");
//     }
// }, 1000); //Si no coloco un tiempo se hace un loop infinito

//-------------------- Promesa --------------------
// Una promesa es un objeto que representa un evento a futuro

// new Promise( (resolve, reject) => {
//     // resolve --> representa cuando la promesa traiga lo que queremos sin ningun error
//     // reject --> representa cuando se rechaza la promesa y traiga un error
// });

//---------- Ejemplo 1 ----------

// const eventoFuturo = (res) => {
//     return new Promise ( (resolve, reject) => {
//         if (res === true) {
//             resolve("Promesa resuelta");
//         } else {
//             reject("Promesa rechazada");
//         }
//     })
// };

// const valor = false;

// console.log( eventoFuturo(valor) );

//---------- Ejemplo 1.5 ----------

const eventoFuturo = (res) => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            res === true ? resolve("Promesa resuelta") : reject("Promesa rechazada")
        }, 2000)
    })
};

const valor = true;

//----- Opcion 1 -----
// eventoFuturo(valor)
//     .then((res) => { // ".then" cuando la promesa sea resulta
//         console.log(res)
//     });

// eventoFuturo(valor)
//     .catch((res) => { // ".catch" cuando la promesa sea rechazada
//         console.log(res);
//     });

//----- Opcion 2 -----
eventoFuturo(valor)
    .then((res) => { // ".then" cuando la promesa sea resulta
        console.log(res)
    })
    .catch((res) => { // ".catch" cuando la promesa sea rechazada
        console.log(res);
    })
    .finally(() => { // ".finally" se ejecuta si o si, sin importar si la promesa esa resulta o rechazada
        console.log("Finalizo el proceso");
    });

// console.log(eventoFuturo(valor)); // Devolvera pending ya que no se resolvio para cuando se ejecuto