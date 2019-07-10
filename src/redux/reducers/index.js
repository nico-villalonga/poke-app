import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

export default rootReducer;
