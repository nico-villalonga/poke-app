import { assoc, assocPath, compose, keys, head, path } from 'ramda';
import { SET_POKEMON, SELECT_POKEMON, UNSELECT_POKEMON } from '../actions/pokemon';
import { collectionToArray } from '../../utils/array';

const initState = {
  selectedPokemonId: null,
  collection: {},
};

export const pokemonReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_POKEMON: {
      const id = head(keys(payload));
      return assocPath(['collection', id], payload[id], state);
    };

    case SELECT_POKEMON:
      return assoc('selectedPokemonId', payload, state);

    case UNSELECT_POKEMON:
      return assoc('selectedPokemonId', null, state);

    default:
      return state;
  }
};


// Feature Selectors
export const getPokemons = path(['pokemons', 'collection']);

export const getSelectedPokemonId = path(['pokemons', 'selectedPokemonId']);

export const getSelectedPokemon = state => {
  const selectedId = getSelectedPokemonId(state);
  return getPokemons(state)[selectedId];
};

export const getPokemonsArray = compose (
  collectionToArray,
  getPokemons
);
