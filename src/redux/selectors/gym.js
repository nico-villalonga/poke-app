import { getSelectedGym } from '../reducers/gym';
import { getBadges } from '../reducers/badge';
import { getTrainers } from '../reducers/trainer';

export const getSelectedGymBadge = state => {
  const gym = getSelectedGym(state);
  const badges = getBadges(state);

  return badges[gym.badgeId];
};

export const getSelectedGymLeader = state => {
  const gym = getSelectedGym(state);
  const trainers = getTrainers(state);

  return trainers[gym.leaderId];
};
