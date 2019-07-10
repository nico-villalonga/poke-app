import { SET_POKEMON } from '../actions/pokemon';

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
        [payload.id]: payload,
      };

      return {
        ...state,
        collection,
      };
    };

    default:
      return state;
  }
};
