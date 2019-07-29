import { assocPath, lens, path, values, view } from 'ramda';
import { getNotifications, getNotificationsArray } from '../notification';

const state = {
  pokemons: {},
  trainers: {},
  gyms: {},
  badges: {},
  ui: {},
  notifications: {
    count: 0,
    collection: {},
  },
};

const newState = assocPath(
  ['notifications', 'collection', '[Pokemon]'],
  { message: 'message', feature: '[Pokemon]', number: 0 },
  state
);

const notificationsLens = lens(path(['notifications', 'collection']), null);
const notifications = view(notificationsLens);

describe('test notification selectors', () => {
  // Feature selectors

  it('should get notifications collection from state', () => {
    expect(getNotifications(state)).toEqual(notifications(state));
    expect(getNotifications.recomputations()).toEqual(1);

    getNotifications(state);
    expect(getNotifications.recomputations()).toEqual(1);

    expect(getNotifications(newState)).toEqual(notifications(newState));
    expect(getNotifications.recomputations()).toEqual(2);
  });

  it('should getNotificationsArray from state', () => {
    expect(getNotificationsArray.resultFunc(null)).toEqual([]);
    expect(getNotificationsArray.resultFunc(notifications(state))).toEqual([]);

    expect(getNotificationsArray.resultFunc(notifications(newState)))
      .toEqual(values(notifications(newState)));
  });
});
