import { createSelector } from 'reselect';
import { path } from 'ramda';

// Feature Selectors
export const getBadges = createSelector(
  path(['badges', 'collection']),
  badges => badges
);
