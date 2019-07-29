import { assocPath } from 'ramda';
import { getModalVisibility } from '../ui';

const state = {
  pokemons: {},
  trainers: {},
  gyms: {},
  badges: {},
  ui: {
    modalVisible: false,
  },
  notifications: {},
};

describe('test ui selectors', () => {

  it('should get ui modalVisibility from state', () => {
    expect(getModalVisibility(state)).toEqual(state.ui.modalVisible);
    expect(getModalVisibility.recomputations()).toEqual(1);

    getModalVisibility(state);
    expect(getModalVisibility.recomputations()).toEqual(1);

    const newState = assocPath(['ui', 'modalVisible'], true, state);

    expect(getModalVisibility(newState)).toEqual(newState.ui.modalVisible);
    expect(getModalVisibility.recomputations()).toEqual(2);
  });
});
