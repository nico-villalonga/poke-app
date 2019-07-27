import deepFreeze from 'deep-freeze';
import { trainerReducer } from '../trainer';
import { TRAINER, SET_TRAINER, SELECT_TRAINER, UNSELECT_TRAINER } from '../../actions/trainer';

const initState = {
  selectedTrainerId: null,
  collection: {},
};

const feature = TRAINER;

deepFreeze(initState);

describe('test trainer reducer', () => {
  it('should return initial state', () => {
    expect(trainerReducer(undefined, {})).toEqual(initState);
  });

  it('should add trainer to collection', () => {
    const firstTrainer = {
      1: {
        id: 1,
        name: 'Ash Ketchum',
      }
    };

    deepFreeze(firstTrainer);

    const firstAction = {
      type: SET_TRAINER,
      payload: firstTrainer,
      meta: { feature, normalizeKey: null },
    };
    const newState = trainerReducer(initState, deepFreeze(firstAction));

    expect(newState.selectedTrainerId).toEqual(null);
    expect(newState.collection).toEqual(firstTrainer);

    const secondTrainer = {
      2: {
        id: 2,
        name: 'Misty',
      }
    };

    deepFreeze(secondTrainer);

    const secondAction = {
      type: SET_TRAINER,
      payload: secondTrainer,
      meta: { feature, normalizeKey: null },
    };
    const lastState = trainerReducer(deepFreeze(newState), deepFreeze(secondAction));

    expect(lastState.selectedTrainerId).toEqual(null);
    expect(lastState.collection).toEqual({ ...firstTrainer, ...secondTrainer });
  });

  it('should select a trainer', () => {
    const id = 1;
    const action = {
      type: SELECT_TRAINER,
      payload: id,
    };
    const newState = trainerReducer(initState, deepFreeze(action));

    expect(newState.collection).toEqual({});
    expect(newState.selectedTrainerId).toEqual(id);
  });

  it('should unselect the selected trainer', () => {
    const prevState = { ...initState, selectedTrainerId: 25 };
    const action = { type: UNSELECT_TRAINER };
    const newState = trainerReducer(deepFreeze(prevState), deepFreeze(action));

    expect(newState.collection).toEqual({});
    expect(newState.selectedTrainerId).toEqual(null);
  });
});
