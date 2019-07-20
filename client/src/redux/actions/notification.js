// action types
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// action creators
export const setNotification = ({ message, feature, normalizeKey }) => ({
  type: `${feature} ${SET_NOTIFICATION}`,
  payload: { message, feature },
  meta: { feature, normalizeKey },
});

export const removeNotification = ({ id, feature }) => ({
  type: `${feature} ${REMOVE_NOTIFICATION}`,
  payload: { id, feature },
  meta: { feature },
});
