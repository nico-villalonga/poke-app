import { assocPath } from 'ramda';
import { getBadges } from '../badge';

const state = {
  pokemons: {},
  trainers: {},
  gyms: {},
  badges: {
    collection: {
      1: { id: 1, name: 'boulder' },
      2: { id: 2, name: 'cascade' },
    }
  },
  ui: {},
  notifications: {},
};

describe('test badge selectors', () => {
  // Feature selectors

  it('should get badges collection from state', () => {
    expect(getBadges(state)).toEqual(state.badges.collection);
    expect(getBadges.recomputations()).toEqual(1);

    getBadges(state);
    expect(getBadges.recomputations()).toEqual(1);

    const newState = assocPath(
      ['badges', 'collection', '3'],
      { id: 3, name: 'thunder' },
      state
    );

    expect(getBadges(newState)).toEqual(newState.badges.collection);
    expect(getBadges.recomputations()).toEqual(2);
  });
});
