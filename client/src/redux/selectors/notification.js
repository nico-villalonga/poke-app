import { createSelector } from 'reselect';
import { path, values } from 'ramda';

// Feature Selectors
export const getNotifications = createSelector(
  path(['notifications', 'collection']),
  notifications => notifications
);

export const getNotificationsArray = createSelector(
  getNotifications,
  values
);
