// feature name
export const GYM = '[Gym]';

// action types
export const FETCH_GYM = `${GYM} FETCH`;
export const SET_GYM = `${GYM} SET`;
export const SELECT_GYM = `${GYM} SELECT`;
export const UNSELECT_GYM = `${GYM} UNSELECT`;

// action creators
export const fetchGym = ({ query = '' }) => ({
  type: FETCH_GYM,
  payload: query,
});

export const setGym = ({ data, normalizeKey }) => ({
  type: SET_GYM,
  payload: data,
  meta: { feature: GYM, normalizeKey },
});

export const selectGym = ({ id }) => ({
  type: SELECT_GYM,
  payload: id,
});

export const unselectGym = () => ({
  type: UNSELECT_GYM,
});
