import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon';
import { trainerReducer } from './trainer';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  trainers: trainerReducer,
  ui: uiReducer,
});

export default rootReducer;
