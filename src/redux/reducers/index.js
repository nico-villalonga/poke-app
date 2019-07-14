import { combineReducers } from 'redux';
import { gymReducer } from './gym';
import { trainerReducer } from './trainer';
import { pokemonReducer } from './pokemon';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  gyms: gymReducer,
  trainers: trainerReducer,
  pokemons: pokemonReducer,
  ui: uiReducer,
});

export default rootReducer;
