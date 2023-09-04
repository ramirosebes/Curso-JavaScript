//-------------------- Async y Await -------------------- 

//---------- Ejemplo de promesa  1 ----------
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Termino la promesa");
//     })

//---------- Ejemplo de promesa 2 ----------

// const pokeapi = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

// pokeapi
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Termino la promesa");
//     });

//---------- o ----------

async function fetchPoke1() {
    const pokeapi = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
}

const  fetchPoke = async () => {

    try {
        const pokeapi = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); //  Va a apesera al await para continuar con la funcion. Si no volvera como "pending"
        // console.log(await pokeapi.json()); // Si coloco el .json() debo colocar el "await" si no volvera como "pending"
        const data = await pokeapi.json();
        console.log(data);
    } catch {
        console.log(err);
    } finally {
        console.log("Termino esta prueba");
    }
};

fetchPoke(); 