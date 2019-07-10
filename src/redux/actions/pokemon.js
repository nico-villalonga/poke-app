// feature name
export const POKEMON = '[Pokemon]';

// action types
export const FETCH_POKEMON = `${POKEMON} FETCH`;
export const SET_POKEMON = `${POKEMON} SET`;

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