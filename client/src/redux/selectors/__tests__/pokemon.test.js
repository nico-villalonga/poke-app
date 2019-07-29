import { assocPath, lens, path, values, view } from 'ramda';
import {
  getPokemons, getSelectedPokemonId,
  getSelectedPokemon, getPokemonsArray,
} from '../pokemon';

const state = {
  pokemons: {
    selectedPokemonId: null,
    collection: {
      1: { id: 1, name: 'bulbasaur' },
      4: { id: 4, name: 'charmander' },
      7: { id: 7, name: 'squirtle' },
    },
  },
  trainers: {},
  gyms: {},
  badges: {},
  ui: {},
  notifications: {},
};

const newState = assocPath(
  ['pokemons', 'collection', '25'],
  { id: 25, name: 'pikachu' },
  state
);

const pokemonsLens = lens(path(['pokemons', 'collection']), null);
const pokemons = view(pokemonsLens);

describe('test pokemon selectors', () => {
  // Feature selectors

  it('should get pokemons collection from state', () => {
    expect(getPokemons(state)).toEqual(pokemons(state));
    expect(getPokemons.recomputations()).toEqual(1);

    getPokemons(state);
    expect(getPokemons.recomputations()).toEqual(1);

    expect(getPokemons(newState)).toEqual(pokemons(newState));
    expect(getPokemons.recomputations()).toEqual(2);
  });

  it('should get selectedPokemonId from state', () => {
    expect(getSelectedPokemonId(state)).toEqual(null);
    expect(getSelectedPokemonId.recomputations()).toEqual(1);

    getSelectedPokemonId(state);
    expect(getSelectedPokemonId.recomputations()).toEqual(1);

    const newState = assocPath(['pokemons', 'selectedPokemonId'], 1, state);

    expect(getSelectedPokemonId(newState)).toEqual(1);
    expect(getSelectedPokemonId.recomputations()).toEqual(2);

    const lastState = assocPath(['pokemons', 'selectedPokemonId'], null, state);

    expect(getSelectedPokemonId(lastState)).toEqual(null);
    expect(getSelectedPokemonId.recomputations()).toEqual(3);
  });

  describe('test getSelectedPokemon', () => {
    it('should return empty object when no match found', () => {
      expect(getSelectedPokemon.resultFunc(null, pokemons(state))).toEqual({});
    });

    it('should return matching object when selectedGymId is set', () => {
      expect(getSelectedPokemon.resultFunc(1, pokemons(state))).toEqual(pokemons(state)[1]);
    });
  });

  it('should getPokemonsArray from state', () => {
    expect(getPokemonsArray.resultFunc(null)).toEqual([]);
    expect(getPokemonsArray.resultFunc(pokemons(state))).toEqual(values(pokemons(state)));

    expect(getPokemonsArray.resultFunc(pokemons(newState))).toEqual(values(pokemons(newState)));
  });
});
