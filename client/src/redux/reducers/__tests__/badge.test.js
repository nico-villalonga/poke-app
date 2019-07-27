import deepFreeze from 'deep-freeze';
import { badgeReducer } from '../badge';
import { BADGE, SET_BADGES } from '../../actions/badge';

const initState = {
  collection: {},
};

deepFreeze(initState)

describe('test badge reducer', () => {
  it('should return initial state', () => {
    expect(badgeReducer(undefined, {})).toEqual(initState);
  });

  it('should add badges to collection', () => {
    const data = {
      1: {
        id: 1,
        name: 'boulder',
      },
      2: {
        id: 2,
        name: 'cascade',
      }
    };

    deepFreeze(data);

    const action = {
      type: SET_BADGES,
      payload: data,
      meta: { feature: BADGE, normalizeKey: null },
    };
    const newState = badgeReducer(initState, deepFreeze(action));

    expect(newState.collection).toEqual(data);
  });
});
