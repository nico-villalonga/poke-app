import apiMiddleware from './core/api';
import pokemonMiddleware from './feature/pokemon';

// create the core middleware array
const coreMiddleware = [
  apiMiddleware,
];

// create the feature middleware array
const featureMiddleware = [
  pokemonMiddleware
];

export default [...featureMiddleware, ...coreMiddleware];
