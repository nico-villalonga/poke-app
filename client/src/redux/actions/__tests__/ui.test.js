import {
  SHOW_MODAL, HIDE_MODAL, SHOW_ONLINE, SHOW_OFFLINE,
  showModal, hideModal, showOnline, showOffline,
} from '../ui';

describe('test ui action creator', () => {
  it('should create a showModal action', () => {
    const action = showModal();

    expect(action.type).toEqual(SHOW_MODAL);
  });

  it('should create a hideModal action', () => {
    const action = hideModal();

    expect(action.type).toEqual(HIDE_MODAL);
  });

  it('should create a showOnline action', () => {
    const action = showOnline();

    expect(action.type).toEqual(SHOW_ONLINE);
  });

  it('should create a showOffline action', () => {
    const action = showOffline();

    expect(action.type).toEqual(SHOW_OFFLINE);
  });
});
