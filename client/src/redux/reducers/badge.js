import { assoc } from 'ramda';
import { SET_BADGES } from '../actions/badge';

const initState = {
  collection: {},
};

export const badgeReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_BADGES:
      return assoc('collection', payload, state);

    default:
      return state;
  }
};
