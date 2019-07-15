import { assoc, path } from 'ramda';
import { SHOW_MODAL, HIDE_MODAL } from '../actions/ui';

const initState = {
  modalVisible: false,
};

export const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return assoc('modalVisible', true, state);

    case HIDE_MODAL:
      return assoc('modalVisible', false, state);

    default:
      return state;
  }
}

// Feature Selectors
export const getModalVisibility = path(['ui', 'modalVisible']);
