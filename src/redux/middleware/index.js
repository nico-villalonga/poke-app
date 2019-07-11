import apiMiddleware from './core/api';
import pokemonMiddleware from './feature/pokemon';
import trainerMiddleware from './feature/trainer';

// create the core middleware array
const coreMiddleware = [
  apiMiddleware,
];

// create the feature middleware array
const featureMiddleware = [
  pokemonMiddleware,
  trainerMiddleware,
];

export default [...featureMiddleware, ...coreMiddleware];
