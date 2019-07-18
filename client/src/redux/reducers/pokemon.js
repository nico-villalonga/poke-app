import { assoc, assocPath, keys, head } from 'ramda';
import { SET_POKEMON, SELECT_POKEMON, UNSELECT_POKEMON } from '../actions/pokemon';

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
