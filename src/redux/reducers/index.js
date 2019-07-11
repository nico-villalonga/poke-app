import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon';
import { trainerReducer } from './trainer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  trainers: trainerReducer,
});

export default rootReducer;
