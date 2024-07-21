const apiurl ="https://pokeapi.co/api/v2/pokemon/";
document.getElementById("get").addEventListener("click",async() => {
    const responce = await fetch(apiurl+Math.floor(Math.random()*700));
    const pokemon = await responce.json();
    const image = document.createElement("img");
    const name =document.createElement("p");
    image.src = pokemon.sprites.front_default;
    name.textContent = pokemon.name;
    const pokemonDiv = document.getElementById("pokemon");
    pokemonDiv.innerHTML = "";
    pokemonDiv.appendChild(image);
    pokemonDiv.appendChild(name);
});