// feature name
export const UI = '[Ui]';

// action types
export const SHOW_MODAL = `${UI} SHOW_MODAL`;
export const HIDE_MODAL = `${UI} HIDE_MODAL`;
export const SHOW_ONLINE = `${UI} SHOW_ONLINE`;
export const SHOW_OFFLINE = `${UI} SHOW_OFFLINE`;

// action creators
export const showModal = () => ({
  type: SHOW_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const showOnline = () => ({
  type: SHOW_ONLINE,
});

export const showOffline = () => ({
  type: SHOW_OFFLINE,
});
