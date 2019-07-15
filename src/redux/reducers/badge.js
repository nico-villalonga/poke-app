import { SET_BADGES } from '../actions/badge';

const initState = {
  collection: {},
};

export const badgeReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_BADGES: {
      const collection = {
        ...state.collection,
        ...payload,
      };

      return {
        ...state,
        collection,
      };
    };

    default:
      return state;
  }
};


// Feature Selectors
export const getBadges = ({ badges }) => badges.collection;

export const getBadgesArray = state => {
  const badges = getBadges(state);

  return Object.keys(badges).reduce((badgeArray = [], badgeId) => {
    badgeArray.push(badges[badgeId]);
    return badgeArray;
  }, []);
}
