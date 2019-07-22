import { createSelector } from 'reselect';
import { path } from 'ramda';
import { collectionToArray } from '../../utils/array';

// Feature Selectors
export const getNotifications = createSelector(
  path(['notifications', 'collection']),
  notifications => notifications
);

export const getNotificationsArray = createSelector(
  getNotifications,
  collectionToArray
);
