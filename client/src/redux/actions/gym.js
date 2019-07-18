// feature name
export const GYM = '[Gym]';

// action types
export const FETCH_GYMS = `${GYM} FETCH_ALL`;
export const SET_GYMS = `${GYM} SET`;
export const SELECT_GYM = `${GYM} SELECT`;
export const UNSELECT_GYM = `${GYM} UNSELECT`;

// action creators
export const fetchGyms = () => ({
  type: FETCH_GYMS,
});

export const setGyms = ({ data, normalizeKey }) => ({
  type: SET_GYMS,
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
