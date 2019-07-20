import { path } from 'ramda';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api';
import { setNotification } from '../../actions/notification';
import {
  POKEMON, FETCH_POKEMON, CACHE_OR_FETCH_POKEMON,
  fetchPokemon, setPokemon,
} from '../../actions/pokemon';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonMiddleware = ({ dispatch, getState }) => next => action => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_POKEMON: {
      const url = `${POKEMON_URL}${payload}`;
			return next(apiRequest({ url, method: 'GET', feature: POKEMON }));
    }

    case CACHE_OR_FETCH_POKEMON: {
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

    case `${POKEMON} ${API_ERROR}`: {
      const message = 'Error while fetching pokemons';

      console.log('pokemon api error:', payload.message);
      return next(setNotification({ message, feature: POKEMON, normalizeKey: 'feature' }));
    }
  }
};

export default pokemonMiddleware;
