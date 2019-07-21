import { createSelector } from 'reselect';
import { prop } from 'ramda';

// Feature Selectors
export const getNotification = createSelector(
  prop('notifications'),
  notifications => notifications
);
