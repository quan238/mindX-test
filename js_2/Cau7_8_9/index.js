const domain = "https://pokeapi.co/api/v2";
const endpoint = "pokemon";

async function getPokemonNames(pokemonID) {
  const start_time = new Date().valueOf();
  const pokemonName = [];
  for (let i = 0; i < pokemonID.length; i++) {
    pokemonName.push(await getPokemon(`${domain}/${endpoint}/${pokemonID[i]}`));
  }
  return pokemonName;
}

function main() {
  const pokemonId = [];
  for (let i = 0; i < 10; i++) {
    pokemonId.push(Math.floor(Math.random() * 600));
  }
  console.time("Operation");
  getPokemonNames(pokemonId).then((pokemons) => {
    console.log(pokemons);
    console.timeLog("Operation");
  });
}
async function getPokemon(url) {
  //
}
main();
