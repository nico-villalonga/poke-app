// feature name
export const UI = '[Ui]';

// action types
export const SHOW_MODAL = `${UI} SHOW_MODAL`;
export const HIDE_MODAL = `${UI} HIDE_MODAL`;

// action creators
export const showModal = () => ({
  type: SHOW_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
