import { path } from 'ramda';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api';
import {
  POKEMON, FETCH_POKEMON, CHECK_OR_FETCH_POKEMON,
  fetchPokemon, setPokemon,
} from '../../actions/pokemon';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonMiddleware = ({ dispatch, getState }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_POKEMON: {
      const url = `${POKEMON_URL}${payload}`;
			return next(apiRequest({ url, method: 'GET', feature: POKEMON }));
    }

    case CHECK_OR_FETCH_POKEMON: {
      const pokemons = path(['pokemons', 'collection'], getState());
      const missing = payload.reduce((acc, curr) => {
        if (!pokemons[curr]) {
          acc.push(curr);
        }

        return acc;
      }, []);

      return missing.forEach(id => dispatch(fetchPokemon({ query: id })));
    }

    case `${POKEMON} ${API_SUCCESS}`:
      return next(setPokemon({ data: payload, normalizeKey: 'id' }));

    case `${POKEMON} ${API_ERROR}`:
			return console.log('pokemon api error');
  }
};

export default pokemonMiddleware;
