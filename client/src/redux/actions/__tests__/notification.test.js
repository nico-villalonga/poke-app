import {
  SET_NOTIFICATION, REMOVE_NOTIFICATION,
  setNotification, removeNotification,
} from '../notification';

const feature = 'POKEMON';

describe('test notification action creator', () => {
  it('should create a setNotification action', () => {
    const type = 'info';
    const message = 'the notification message';
    const normalizeKey = 'feature';
    const action = setNotification({ type, message, feature, normalizeKey });

    expect(action.type).toEqual(`${feature} ${SET_NOTIFICATION}`);
    expect(action.payload).toEqual({ type, message, feature });
    expect(action.meta).toEqual({ feature, normalizeKey });
  });

  it('should create a removeNotification action', () => {
    const action = removeNotification({ feature });

    expect(action.type).toEqual(`${feature} ${REMOVE_NOTIFICATION}`);
    expect(action.payload).toEqual({ feature });
    expect(action.meta).toEqual({ feature });
  });
});
