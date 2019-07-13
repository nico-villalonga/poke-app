import { SHOW_MODAL, HIDE_MODAL } from '../actions/ui';

const initState = {
  modalVisible: false,
};

export const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalVisible: true,
      };

      case HIDE_MODAL:
        return {
          ...state,
          modalVisible: false,
        };

    default:
      return state;
  }
}

// Feature Selectors
export const getModalVisibility = ({ ui }) => ui.modalVisible;
