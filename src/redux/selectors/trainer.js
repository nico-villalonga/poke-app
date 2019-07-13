import { getTrainerPokemonIds } from '../reducers/trainer';
import { getPokemons } from '../reducers/pokemon';

export const getTrainerPokemons = state => {
  const pokemonIds = getTrainerPokemonIds(state);
  const pokemons = getPokemons(state);

  return pokemonIds.reduce((acc, curr) => {
    if (pokemons[curr]) {
      acc.push(pokemons[curr]);
    }

    return acc;
  }, []);
};