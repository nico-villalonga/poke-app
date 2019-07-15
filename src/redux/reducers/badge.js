import { assoc, compose, path } from 'ramda';
import { SET_BADGES } from '../actions/badge';
import { collectionToArray } from '../../utils/array';

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


// Feature Selectors
export const getBadges = path(['badges', 'collection']);

export const getBadgesArray = compose (
  collectionToArray,
  getBadges
);
