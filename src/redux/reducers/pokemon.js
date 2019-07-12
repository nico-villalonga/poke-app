import { SET_POKEMON, SELECT_POKEMON, UNSELECT_POKEMON } from '../actions/pokemon';

const initState = {
  selectedPokemonId: null,
  collection: {},
};

export const pokemonReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_POKEMON: {
      const collection = {
        ...state.collection,
        ...payload,
      };

      return {
        ...state,
        collection,
      };
    };

    case SELECT_POKEMON:
      return {
        ...state,
        selectedPokemonId: payload,
      };

    case UNSELECT_POKEMON:
      return {
        ...state,
        selectedPokemonId: null,
      };

    default:
      return state;
  }
};


// Feature Selectors
const getPokemons = ({ pokemons }) => pokemons.collection;

export const getSelectedPokemonId = ({ pokemons }) => pokemons.selectedPokemonId;

export const getSelectedPokemon = state => {
  const selectedId = getSelectedPokemonId(state);
  return getPokemons(state)[selectedId];
};

export const getPokemonsArray = state => {
  const pokemons = getPokemons(state);

  return Object.keys(pokemons).reduce((pokemonArray = [], pokemonId) => {
    pokemonArray.push(pokemons[pokemonId]);
    return pokemonArray;
  }, []);
}
