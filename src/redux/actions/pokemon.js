// feature name
export const POKEMON = '[Pokemon]';

// action types
export const FETCH_POKEMON = `${POKEMON} FETCH`;
export const CHECK_OR_FETCH_POKEMON = `${POKEMON} CHECK_OR_FETCH`;
export const SET_POKEMON = `${POKEMON} SET`;
export const SELECT_POKEMON = `${POKEMON} SELECT`;
export const UNSELECT_POKEMON = `${POKEMON} UNSELECT`;

// action creators
export const fetchPokemon = ({ query = '' }) => ({
  type: FETCH_POKEMON,
  payload: query,
});

export const checkOrFetchPokemon = ({ ids = [] }) => ({
  type: CHECK_OR_FETCH_POKEMON,
  payload: ids,
});

export const setPokemon = ({ data, normalizeKey }) => ({
  type: SET_POKEMON,
  payload: data,
  meta: { feature: POKEMON, normalizeKey },
});

export const selectPokemon = ({ id }) => ({
  type: SELECT_POKEMON,
  payload: id,
});

export const unselectPokemon = () => ({
  type: UNSELECT_POKEMON,
});
