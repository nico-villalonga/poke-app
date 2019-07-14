import { SET_GYM, SELECT_GYM, UNSELECT_GYM } from '../actions/gym';

const initState = {
  selectedGymId: null,
  collection: {},
};

export const gymReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_GYM: {
      const collection = {
        ...state.collection,
        ...payload,
      };

      return {
        ...state,
        collection,
      };
    };

    case SELECT_GYM:
      return {
        ...state,
        selectedGymId: payload,
      };

    case UNSELECT_GYM:
      return {
        ...state,
        selectedGymId: null,
      };

    default:
      return state;
  }
};


// Feature Selectors
export const getGyms = ({ gyms }) => gyms.collection;

export const getSelectedGymId = ({ gyms }) => gyms.selectedGymId;

export const getSelectedGym = state => {
  const selectedId = getSelectedGymId(state);
  return getGyms(state)[selectedId];
};

export const getGymsArray = state => {
  const gyms = getGyms(state);

  return Object.keys(gyms).reduce((gymArray = [], gymId) => {
    gymArray.push(gyms[gymId]);
    return gymArray;
  }, []);
}
