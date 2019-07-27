import deepFreeze from 'deep-freeze';
import { uiReducer } from '../ui';
import { SHOW_MODAL, HIDE_MODAL } from '../../actions/ui';

const initState = {
  modalVisible: false,
};

deepFreeze(initState);

describe('test ui reducer', () => {
  it('should return initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initState);
  });

  it('should show modal', () => {
    const action = { type: SHOW_MODAL };
    const newState = uiReducer(initState, deepFreeze(action));

    expect(newState.modalVisible).toEqual(true);
  });

  it('should hide modal', () => {
    const prevState = { ...initState, modalVisible: true };
    const action = { type: HIDE_MODAL };
    const newState = uiReducer(deepFreeze(prevState), deepFreeze(action));

    expect(newState.modalVisible).toEqual(false);
  });
});
