import deepFreeze from 'deep-freeze';
import { gymReducer } from '../gym';
import { GYM, SET_GYMS, SELECT_GYM, UNSELECT_GYM } from '../../actions/gym';

const initState = {
  selectedGymId: null,
  collection: {},
};

deepFreeze(initState);

describe('test gym reducer', () => {
  it('should return initial state', () => {
    expect(gymReducer(undefined, {})).toEqual(initState);
  });

  it('should add gyms to collection', () => {
    const data = {
      1: {
        id: 1,
        name: 'Pewter',
        location: 'Pewter City',
      },
      2: {
        id: 2,
        name: 'Cerulean',
        location: 'Cerulean City',
      }
    };

    deepFreeze(data);

    const action = {
      type: SET_GYMS,
      payload: data,
      meta: { feature: GYM, normalizeKey: null },
    };
    const newState = gymReducer(initState, deepFreeze(action));

    expect(newState.collection).toEqual(data);
    expect(newState.selectedGymId).toEqual(null);
  });

  it('should select a gym', () => {
    const id = 1;
    const action = {
      type: SELECT_GYM,
      payload: id,
    };
    const newState = gymReducer(initState, deepFreeze(action));

    expect(newState.collection).toEqual({});
    expect(newState.selectedGymId).toEqual(id);
  });

  it('should unselect the selected gym', () => {
    const prevState = { ...initState, selectedGymId: 1 };
    const action = { type: UNSELECT_GYM };
    const newState = gymReducer(deepFreeze(prevState), deepFreeze(action));

    expect(newState.collection).toEqual({});
    expect(newState.selectedGymId).toEqual(null);
  });
});
