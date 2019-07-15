import apiMiddleware from './core/api';
import loggerMiddleware from './core/log';
import normalizeMiddleware from './core/normalize';
import pokemonMiddleware from './feature/pokemon';
import trainerMiddleware from './feature/trainer';
import gymMiddleware from './feature/gym';
import badgeMiddleware from './feature/badge';

// create the core middleware array
const coreMiddleware = [
  apiMiddleware,
  normalizeMiddleware,
  loggerMiddleware,
];

// create the feature middleware array
const featureMiddleware = [
  pokemonMiddleware,
  trainerMiddleware,
  gymMiddleware,
  badgeMiddleware,
];

export default [...featureMiddleware, ...coreMiddleware];
