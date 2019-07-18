import { createSelector } from 'reselect';
import { path } from 'ramda';

// Feature Selectors
export const getModalVisibility = createSelector(
  path(['ui', 'modalVisible']),
  visibility => visibility
);
