import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon';
import { trainerReducer } from './trainer';
import { gymReducer } from './gym';
import { badgeReducer } from './badge';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  trainers: trainerReducer,
  gyms: gymReducer,
  badges: badgeReducer,
  ui: uiReducer,
});

export default rootReducer;
