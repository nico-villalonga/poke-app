// feature name
export const BADGE = '[Badge]';

// action types
export const FETCH_BADGES = `${BADGE} FETCH_ALL`;
export const SET_BADGES = `${BADGE} SET`;

// action creators
export const fetchBadges = () => ({
  type: FETCH_BADGES,
});

export const setBadges = ({ data, normalizeKey }) => ({
  type: SET_BADGES,
  payload: data,
  meta: { feature: BADGE, normalizeKey },
});
