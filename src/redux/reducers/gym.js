import { assoc, compose, path } from 'ramda';
import { SET_GYMS, SELECT_GYM, UNSELECT_GYM } from '../actions/gym';
import { collectionToArray } from '../../utils/array';

const initState = {
  selectedGymId: null,
  collection: {},
};

export const gymReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_GYMS:
      return assoc('collection', payload, state);

    case SELECT_GYM:
      return assoc('selectedGymId', payload, state);

    case UNSELECT_GYM:
      return assoc('selectedGymId', null, state);

    default:
      return state;
  }
};


// Feature Selectors
export const getGyms = path(['gyms', 'collection']);

export const getSelectedGymId = path(['gyms', 'selectedGymId']);

export const getSelectedGym = state => {
  const selectedId = getSelectedGymId(state);
  return getGyms(state)[selectedId];
};

export const getGymsArray = compose (
  collectionToArray,
  getGyms
);
