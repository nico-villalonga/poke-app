import deepFreeze from 'deep-freeze';
import { pokemonReducer } from '../pokemon';
import { POKEMON, SET_POKEMON, SELECT_POKEMON, UNSELECT_POKEMON } from '../../actions/pokemon';

const initState = {
  selectedPokemonId: null,
  collection: {},
};

const feature = POKEMON;

deepFreeze(initState);

describe('test pokemon reducer', () => {
  it('should return initial state', () => {
    expect(pokemonReducer(undefined, {})).toEqual(initState);
  });

  it('should add pokemon to collection', () => {
    const firstPoke = {
      1: {
        id: 1,
        name: 'bulbasaur',
      }
    };

    deepFreeze(firstPoke);

    const firstAction = {
      type: SET_POKEMON,
      payload: firstPoke,
      meta: { feature, normalizeKey: null },
    };
    const newState = pokemonReducer(initState, deepFreeze(firstAction));

    expect(newState.selectedPokemonId).toEqual(null);
    expect(newState.collection).toEqual(firstPoke);

    const secondPoke = {
      25: {
        id: 25,
        name: 'pikachu',
      }
    };

    deepFreeze(secondPoke);

    const secondAction = {
      type: SET_POKEMON,
      payload: secondPoke,
      meta: { feature, normalizeKey: null },
    };
    const lastState = pokemonReducer(deepFreeze(newState), deepFreeze(secondAction));

    expect(lastState.selectedPokemonId).toEqual(null);
    expect(lastState.collection).toEqual({ ...firstPoke, ...secondPoke });
  });

  it('should select a pokemon', () => {
    const id = 25;
    const action = {
      type: SELECT_POKEMON,
      payload: id,
    };
    const newState = pokemonReducer(initState, deepFreeze(action));

    expect(newState.collection).toEqual({});
    expect(newState.selectedPokemonId).toEqual(id);
  });

  it('should unselect the selected pokemon', () => {
    const prevState = { ...initState, selectedPokemonId: 25 };
    const action = { type: UNSELECT_POKEMON };
    const newState = pokemonReducer(deepFreeze(prevState), deepFreeze(action));

    expect(newState.collection).toEqual({});
    expect(newState.selectedPokemonId).toEqual(null);
  });
});
