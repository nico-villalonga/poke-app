import {
  POKEMON, FETCH_POKEMON, CACHE_OR_FETCH_POKEMON, SET_POKEMON, SELECT_POKEMON, UNSELECT_POKEMON,
  fetchPokemon, cacheOrFetchPokemons, setPokemon, selectPokemon, unselectPokemon,
} from '../pokemon';

const feature = POKEMON;

describe('test pokemon action creator', () => {
  it('should create a fetchPokemon action', () => {
    const query = 1;
    const action = fetchPokemon({ query });

    expect(action.type).toEqual(FETCH_POKEMON);
    expect(action.payload).toEqual(query);
  });

  it('should create a cacheOrFetchPokemons action', () => {
    const ids = [1, 25];
    const action = cacheOrFetchPokemons({ ids });

    expect(action.type).toEqual(CACHE_OR_FETCH_POKEMON);
    expect(action.payload).toEqual(ids);
  });

  it('should create a setPokemon action', () => {
    const data = { id: 25, name: 'pikachu' };
    const normalizeKey = 'id';
    const action = setPokemon({ data, normalizeKey });

    expect(action.type).toEqual(SET_POKEMON);
    expect(action.payload).toEqual(data);
    expect(action.meta).toEqual({ feature, normalizeKey });
  });

  it('should create a selectPokemon action', () => {
    const id = 25;
    const action = selectPokemon({ id });

    expect(action.type).toEqual(SELECT_POKEMON);
    expect(action.payload).toEqual(id);
  });

  it('should create a unselectPokemon action', () => {
    const action = unselectPokemon();

    expect(action.type).toEqual(UNSELECT_POKEMON);
  });
});
