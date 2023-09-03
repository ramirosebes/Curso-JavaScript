const listaPokemon = document.querySelector("#lista-pokemon");

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        const pokemons = data.results;
        console.log(pokemons);

        pokemons.forEach(pokemon => {
            const li = document.createElement("li");
            li.innerText = pokemon.name;
            listaPokemon.append(li);
        });
    })