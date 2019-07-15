import { assoc, assocPath, compose, head, keys, prop, path } from 'ramda';
import { SET_TRAINER, SELECT_TRAINER, UNSELECT_TRAINER } from '../actions/trainer';
import { collectionToArray } from '../../utils/array';

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


// Feature Selectors
export const getTrainers = path(['trainers', 'collection']);

export const getSelectedTrainerId = path(['trainers', 'selectedTrainerId']);

export const getSelectedTrainer = state => {
  const selectedId = getSelectedTrainerId(state);
  return getTrainers(state)[selectedId];
};

export const getTrainerPokemonIds = compose(
  prop('pokemons'),
  getSelectedTrainer
);

export const getTrainersArray = compose (
  collectionToArray,
  getTrainers
);
