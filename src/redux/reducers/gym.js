import { assoc } from 'ramda';
import { SET_GYMS, SELECT_GYM, UNSELECT_GYM } from '../actions/gym';

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
