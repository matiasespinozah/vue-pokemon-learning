import pokemonApi from '../api/pokemonsApi'

export const getPokemons = () => {
  const pokemons = Array.from(Array(650));
  return pokemons.map((_, index) => index + 1);
}

const getPokemonsOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
  return pokemons;
}

export const getPokemonNames = async ([a, b, c, d] = []) => {
  const promises = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [pa, pb, pc, pd] = await Promise.all(promises);
  return  [
    { name: pa.data.name, id: pa.data.id },
    { name: pb.data.name, id: pb.data.id },
    { name: pc.data.name, id: pc.data.id },
    { name: pd.data.name, id: pd.data.id },
  ];
}

export default getPokemonsOptions;