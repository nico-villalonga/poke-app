// feature name
export const TRAINER = '[Trainer]';

// action types
export const FETCH_TRAINER = `${TRAINER} FETCH`;
export const CHECK_OR_FETCH_TRAINER = `${TRAINER} CHECK_OR_FETCH`;
export const SET_TRAINER = `${TRAINER} SET`;
export const SELECT_TRAINER = `${TRAINER} SELECT`;
export const UNSELECT_TRAINER = `${TRAINER} UNSELECT`;

// action creators
export const fetchTrainer = ({ query = '' }) => ({
  type: FETCH_TRAINER,
  payload: query,
});

export const checkOrFetchTrainer = ({ id }) => ({
  type: CHECK_OR_FETCH_TRAINER,
  payload: id,
});

export const setTrainer = ({ data, normalizeKey }) => ({
  type: SET_TRAINER,
  payload: data,
  meta: { feature: TRAINER, normalizeKey },
});

export const selectTrainer = ({ id }) => ({
  type: SELECT_TRAINER,
  payload: id,
});

export const unselectTrainer = () => ({
  type: UNSELECT_TRAINER,
});
