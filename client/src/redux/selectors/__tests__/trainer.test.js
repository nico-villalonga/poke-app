import { assocPath, keys, length, lens, mergeAll, path, type, values, view } from 'ramda';
import {
  getTrainers, getSelectedTrainerId, getSelectedTrainer,
  getTrainerPokemonIds, getTrainersArray, getTrainerPokemons,
} from '../trainer';

const state = {
  pokemons: {
    collection: {
      1: { id: 1, name: 'bulbasaur' },
      4: { id: 4, name: 'charmander' },
      7: { id: 7, name: 'squirtle' },
    },
  },
  trainers: {
    selectedTrainerId: null,
    collection: {
      1: { id: 1, name: 'Ash Ketchum', pokemons: [25, 7, 1, 4, 17] },
      2: { id: 2, name: 'Misty', pokemons: [175, 54, 120, 130, 118] },
    }
  },
  gyms: {},
  badges: {},
  ui: {},
  notifications: {},
};

const trainersLens = lens(path(['trainers', 'collection']), null);
const trainers = view(trainersLens);

const pokemonsLens = lens(path(['pokemons', 'collection']), null);
const pokemons = view(pokemonsLens);

describe('test trainer selectors', () => {
  // Feature selectors

  it('should get trainers collection from state', () => {
    expect(getTrainers(state)).toEqual(trainers(state));
    expect(getTrainers.recomputations()).toEqual(1);

    getTrainers(state);
    expect(getTrainers.recomputations()).toEqual(1);

    const newState = assocPath(
      ['trainers', 'collection', '3'],
      { id: 3, name: 'Brock', pokemons: [95, 74, 41, 37] },
      state
    );

    expect(getTrainers(newState)).toEqual(trainers(newState));
    expect(getTrainers.recomputations()).toEqual(2);
  });

  it('should get selectedTrainerId from state', () => {
    expect(getSelectedTrainerId(state)).toEqual(null);
    expect(getSelectedTrainerId.recomputations()).toEqual(1);

    getSelectedTrainerId(state);
    expect(getSelectedTrainerId.recomputations()).toEqual(1);

    const newState = assocPath(['trainers', 'selectedTrainerId'], 1, state);

    expect(getSelectedTrainerId(newState)).toEqual(1);
    expect(getSelectedTrainerId.recomputations()).toEqual(2);

    const lastState = assocPath(['trainers', 'selectedTrainerId'], null, state);

    expect(getSelectedTrainerId(lastState)).toEqual(null);
    expect(getSelectedTrainerId.recomputations()).toEqual(3);
  });

  describe('test getSelectedTrainer', () => {
    it('should return empty object when no match found', () => {
      expect(getSelectedTrainer.resultFunc(null, trainers(state))).toEqual({});
    });

    it('should return matching object when selectedTrainerId is set', () => {
      expect(getSelectedTrainer.resultFunc(1, trainers(state))).toEqual(trainers(state)[1]);
    });
  });

  it('should get trainerPokemonIds from state', () => {
    const selectedTrainer = getSelectedTrainer.resultFunc(1, trainers(state));
    expect(getTrainerPokemonIds.resultFunc(selectedTrainer)).toEqual(trainers(state)[1].pokemons);
  });

  it('should getTrainersArray from state', () => {
    expect(getTrainersArray.resultFunc(null)).toEqual([]);
    expect(getTrainersArray.resultFunc(trainers(state))).toEqual(values(trainers(state)));

    const newState = assocPath(
      ['trainers', 'collection', '3'],
      { id: 3, name: 'Brock', pokemons: [95, 74, 41, 37] },
      state
    );

    expect(getTrainersArray.resultFunc(trainers(newState))).toEqual(values(trainers(newState)));
  });


  // Query Selectors

  describe('test getTrainerPokemons', () => {
    it('should return empty array when trainer has no pokemons', () => {
      expect(getTrainerPokemons.resultFunc([], pokemons(state))).toEqual([]);
    });

    it('should return an array of pokemon', () => {
      const selectedTrainer = getSelectedTrainer.resultFunc(1, trainers(state));
      const pokemonIds = getTrainerPokemonIds.resultFunc(selectedTrainer);
      const trainerPokemons = getTrainerPokemons.resultFunc(pokemonIds, pokemons(state));

      expect(length(trainerPokemons)).toEqual(3);
      expect(keys(pokemons(state))).toEqual(expect.not.arrayContaining(['17', '25']));
      expect(type(trainerPokemons)).toEqual('Array');
      expect(type(trainerPokemons[0])).toEqual('Object');

      const newState = assocPath(
        ['pokemons', 'collection'],
        mergeAll([
          { ...pokemons(state) },
          { 17: { id: 17, name: 'pidgeotto' } },
          { 25: { id: 25, name: 'pikachu' } },
        ]),
        state
      );

      const allTrainerPokemons = getTrainerPokemons.resultFunc(pokemonIds, pokemons(newState));

      expect(length(allTrainerPokemons)).toEqual(5);
      expect(keys(pokemons(newState))).toEqual(expect.arrayContaining(['17', '25']));
      expect(type(allTrainerPokemons)).toEqual('Array');
      expect(type(allTrainerPokemons[0])).toEqual('Object');
    });
  });
});
