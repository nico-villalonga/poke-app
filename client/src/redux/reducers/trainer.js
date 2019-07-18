import { assoc, assocPath, head, keys } from 'ramda';
import { SET_TRAINER, SELECT_TRAINER, UNSELECT_TRAINER } from '../actions/trainer';

const initState = {
  selectedTrainerId: null,
  collection: {},
};

export const trainerReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_TRAINER: {
      const id = head(keys(payload));
      return assocPath(['collection', id], payload[id], state);
    }

    case SELECT_TRAINER:
      return assoc('selectedTrainerId', payload, state);

    case UNSELECT_TRAINER:
      return assoc('selectedTrainerId', null, state);

    default:
      return state;
  }
};
