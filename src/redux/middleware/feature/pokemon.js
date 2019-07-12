import { POKEMON, FETCH_POKEMON, setPokemon } from '../../actions/pokemon';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api';

const POKEMON_URL = 'https://pokeapi.co/api/v2/';

const pokemonMiddleware = () => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_POKEMON: {
      const url = `${POKEMON_URL}${payload}`;
			return next(apiRequest({ url, method: 'GET', feature: POKEMON }));
		}

    case `${POKEMON} ${API_SUCCESS}`:
      return next(setPokemon({ data: payload, normalizeKey: 'id' }));

    case `${POKEMON} ${API_ERROR}`:
			return console.log('pokemon api error');
  }
};

export default pokemonMiddleware;
