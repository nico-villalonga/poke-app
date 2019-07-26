// action types
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// action creators
export const setNotification = ({ type, message, feature, normalizeKey }) => ({
  type: `${feature} ${SET_NOTIFICATION}`,
  payload: { type, message, feature },
  meta: { feature, normalizeKey },
});

export const removeNotification = ({ feature }) => ({
  type: `${feature} ${REMOVE_NOTIFICATION}`,
  payload: { feature },
  meta: { feature },
});
