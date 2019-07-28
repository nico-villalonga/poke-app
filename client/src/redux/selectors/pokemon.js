import { createSelector } from 'reselect';
import { path, values } from 'ramda';

// Feature Selectors
export const getPokemons = createSelector(
  path(['pokemons', 'collection']),
  pokemons => pokemons
);

export const getSelectedPokemonId = createSelector(
  path(['pokemons', 'selectedPokemonId']),
  pokemonId => pokemonId
);

export const getSelectedPokemon = createSelector(
  getSelectedPokemonId,
  getPokemons,
  (pokemonId, pokemons) => pokemons[pokemonId] || {}
);

export const getPokemonsArray = createSelector(
  getPokemons,
  values
);
