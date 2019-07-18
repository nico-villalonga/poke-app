import { createSelector } from 'reselect';
import { prop, path } from 'ramda';
import { collectionToArray } from '../../utils/array';
import { getPokemons } from '../selectors/pokemon';

// Feature Selectors
export const getTrainers = createSelector(
  path(['trainers', 'collection']),
  trainers => trainers
);

export const getSelectedTrainerId = createSelector(
  path(['trainers', 'selectedTrainerId']),
  trainerId => trainerId
);

export const getSelectedTrainer = createSelector(
  getSelectedTrainerId,
  getTrainers,
  (trainerId, trainers) => trainers[trainerId]
);

export const getTrainerPokemonIds = createSelector(
  getSelectedTrainer,
  (trainer) => prop('pokemons', trainer)
);

export const getTrainersArray = createSelector(
  getTrainers,
  collectionToArray
);


// Query Selectors
export const getTrainerPokemons = createSelector(
  getTrainerPokemonIds,
  getPokemons,
  (pokemonIds = [], pokemons) => {
    return pokemonIds.reduce((acc, curr) => {
      if (pokemons[curr]) {
        acc.push(pokemons[curr]);
      }

      return acc;
    }, [])
  }
);
