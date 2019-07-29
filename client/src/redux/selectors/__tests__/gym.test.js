import { assocPath, lens, path, values, view } from 'ramda';
import {
  getGyms, getSelectedGymId, getSelectedGym, getGymsArray,
  getSelectedGymBadge, getSelectedGymLeader,
} from '../gym';

const state = {
  pokemons: {},
  trainers: {
    collection: {
      1: { id: 1, name: 'Ash Ketchum' },
      2: { id: 2, name: 'Misty' },
      3: { id: 3, name: 'Brock' },
    }
  },
  gyms: {
    selectedGymId: null,
    collection: {
      1: { id: 1, name: 'Pewter', badgeId: 1, leaderId: 3 },
      2: { id: 2, name: 'Cerulean', badgeId: 2, leaderId: 2 },
    }
  },
  badges: {
    collection: {
      1: { id: 1, name: 'boulder' },
      2: { id: 2, name: 'cascade' },
    }
  },
  ui: {},
  notifications: {},
};

const gymsLens = lens(path(['gyms', 'collection']), null);
const gyms = view(gymsLens);

const badgeLens = lens(path(['badges', 'collection']), null);
const badges = view(badgeLens);

const trainerLens = lens(path(['trainers', 'collection']), null);
const trainers = view(trainerLens);

describe('test gym selectors', () => {
  // Feature selectors

  it('should get gyms collection from state', () => {
    expect(getGyms(state)).toEqual(gyms(state));
    expect(getGyms.recomputations()).toEqual(1);

    getGyms(state);
    expect(getGyms.recomputations()).toEqual(1);

    const newState = assocPath(
      ['gyms', 'collection', '3'],
      { id: 3, name: 'Vermilion' },
      state
    );

    expect(getGyms(newState)).toEqual(gyms(newState));
    expect(getGyms.recomputations()).toEqual(2);
  });

  it('should get selectedGymId from state', () => {
    expect(getSelectedGymId(state)).toEqual(null);
    expect(getSelectedGymId.recomputations()).toEqual(1);

    getSelectedGymId(state);
    expect(getSelectedGymId.recomputations()).toEqual(1);

    const newState = assocPath(['gyms', 'selectedGymId'], 1, state);

    expect(getSelectedGymId(newState)).toEqual(1);
    expect(getSelectedGymId.recomputations()).toEqual(2);

    const lastState = assocPath(['gyms', 'selectedGymId'], null, state);

    expect(getSelectedGymId(lastState)).toEqual(null);
    expect(getSelectedGymId.recomputations()).toEqual(3);
  });

  describe('test getSelectedGym', () => {
    it('should return empty object when no match found', () => {
      expect(getSelectedGym.resultFunc(null, gyms(state))).toEqual({});
    });

    it('should return matching object when selectedGymId is set', () => {
      expect(getSelectedGym.resultFunc(1, gyms(state))).toEqual(gyms(state)[1]);
    });
  });

  it('should getGymsArray from state', () => {
    expect(getGymsArray.resultFunc(null)).toEqual([]);
    expect(getGymsArray.resultFunc(gyms(state))).toEqual(values(gyms(state)));

    const newState = assocPath(
      ['gyms', 'collection', '3'],
      { id: 3, name: 'Vermilion' },
      state
    );

    expect(getGymsArray.resultFunc(gyms(newState))).toEqual(values(gyms(newState)));
  });


  // Query selectors

  describe('test getSelectedGymBadge', () => {
    it('should return empty object when no match found', () => {
      expect(getSelectedGymBadge.resultFunc({}, badges(state))).toEqual({});
    });

    it('should return matching object when selectedGym is set', () => {
      const selectedGym = getSelectedGym.resultFunc(1, gyms(state));
      const badgeId = selectedGym.badgeId;

      expect(getSelectedGymBadge.resultFunc(selectedGym, badges(state)))
        .toEqual(badges(state)[badgeId]);
    });
  });

  describe('test getSelectedGymLeader', () => {
    it('should return empty object when no match found', () => {
      expect(getSelectedGymLeader.resultFunc({}, trainers(state))).toEqual({});
    });

    it('should return matching object when selectedGym is set', () => {
      const selectedGym = getSelectedGym.resultFunc(1, gyms(state));
      const leaderId = selectedGym.leaderId;


      expect(getSelectedGymLeader.resultFunc(selectedGym, trainers(state)))
        .toEqual(trainers(state)[leaderId]);
    });
  });
});
