//--------------------FOR--------------------

// for (let x = 0; x < 10; x++) {
//     console.log("Ahora X vale: " + x);
// }


//--------------------FOR ANIDADO--------------------

    // for (let x = 0; x < 5; x++) {
    //     console.log("Ahora X vale: " + x);

    //     for (let y = 0; y < 5; y++){
    //         console.log("Ahora Y vale: " + y);
    //     }
    // }


//--------------------WHILE--------------------
// let x = 0;
// while (x < 10) {

//     //alert("Ahora X vale: " + x);
//     console.log("Ciclo numero " + x);
//     alert("Ahora X vale: " + x);
    
//     //x = x + 1;
//     x++;
// }

//--------------------DO WHILE--------------------

// let z = 0;

// do {
//     console.log("Ciclo numero: " + z);
//     z++;
// } while(z < 10);

//Al menos el ciclo se ejecutara una vez, por mas que la condicion no se cumpla, lo que esta dentro del do se ejectuara igual


//--------------------SWITCH--------------------

// let diaDeLaSemana = prompt("Ingrese dia de la semana con numeros");

// switch (diaDeLaSemana) {
//     case "1":
//         console.log("Lunes");
//         break;
//     case "2":
//         console.log("Martes");
//         break;
//     case "3":
//         console.log("Miercoles");
//         break;
//     case "4":
//         console.log("Jueves");
//         break;
//     case "5":
//         console.log("Viernes");
//         break;
//     case "6":
//         console.log("Sabado");
//         break;
//     case "7":
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Ese dia no existe");
//         break;
// }

let diaDeLaSemana = Number(prompt("Ingrese dia de la semana con numeros"));

switch (diaDeLaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Ese dia no existe");
        break;
}