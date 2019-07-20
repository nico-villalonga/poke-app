import { createSelector } from 'reselect';
import { path } from 'ramda';
import { collectionToArray } from '../../utils/array';
import { getBadges } from '../selectors/badge';
import { getTrainers } from '../selectors/trainer';

// Feature selectors
export const getGyms = createSelector(
  path(['gyms', 'collection']),
  gyms => gyms
);

export const getSelectedGymId = createSelector(
  path(['gyms', 'selectedGymId']),
  gymId => gymId
);

export const getSelectedGym = createSelector(
  getSelectedGymId,
  getGyms,
  (gymId, gyms) => gyms[gymId] || {}
);

export const getGymsArray = createSelector(
  getGyms,
  collectionToArray
);


// Query selectors
export const getSelectedGymBadge = createSelector(
  getSelectedGym,
  getBadges,
  (gym, badges) => badges[gym.badgeId] || {}
);

export const getSelectedGymLeader = createSelector(
  getSelectedGym,
  getTrainers,
  (gym, trainers) => trainers[gym.leaderId] || {}
);
