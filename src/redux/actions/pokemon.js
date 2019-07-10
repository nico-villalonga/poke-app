// feature name
export const POKEMON = '[Pokemon]';

// action types
export const FETCH_POKEMON = `${POKEMON} FETCH`;
export const SET_POKEMON = `${POKEMON} SET`;
export const SELECT_POKEMON = `${POKEMON} SELECT`;
export const UNSELECT_POKEMON = `${POKEMON} UNSELECT`;

// action creators
export const fetchPokemon = ({ query = '' }) => ({
  type: FETCH_POKEMON,
  payload: query,
});

export const setPokemon = ({ pokemon }) => ({
  type: SET_POKEMON,
  payload: pokemon,
  meta: { feature: POKEMON },
});

export const selectPokemon = ({ id }) => ({
  type: SELECT_POKEMON,
  payload: id,
});

export const unselectPokemon = () => ({
  type: UNSELECT_POKEMON,
});
