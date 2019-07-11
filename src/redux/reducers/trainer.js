import { SET_TRAINER, SELECT_TRAINER, UNSELECT_TRAINER } from '../actions/trainer';

const initState = {
  selectedTrainerId: null,
  collection: {},
};

export const trainerReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_TRAINER: {
      const collection = {
        ...state.collection,
        [payload.id]: payload,
      };

      return {
        ...state,
        collection,
      };
    };

    case SELECT_TRAINER:
      return {
        ...state,
        selectedTrainerId: payload,
      };

    case UNSELECT_TRAINER:
      return {
        ...state,
        selectedTrainerId: null,
      };

    default:
      return state;
  }
};


// Feature Selectors
const getTrainers = ({ trainers }) => trainers.collection;

export const getSelectedTrainerId = ({ trainers }) => trainers.selectedTrainerId;

export const getSelectedTrainer = state => {
  const selectedId = getSelectedTrainerId(state);
  return getTrainers(state)[selectedId];
};

export const getTrainersArray = state => {
  const trainers = getTrainers(state);

  return Object.keys(trainers).reduce((trainerArray = [], trainerId) => {
    trainerArray.push(trainers[trainerId]);
    return trainerArray;
  }, []);
}
