import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon';
import { trainerReducer } from './trainer';
import { gymReducer } from './gym';
import { badgeReducer } from './badge';
import { uiReducer } from './ui';
import { notificationsReducer } from './notification';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  trainers: trainerReducer,
  gyms: gymReducer,
  badges: badgeReducer,
  ui: uiReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
