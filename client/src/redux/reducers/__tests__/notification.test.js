import deepFreeze from 'deep-freeze';
import { notificationsReducer } from '../notification';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../../actions/notification';
import { POKEMON } from '../../actions/pokemon';
import { TRAINER } from '../../actions/trainer';

const initState = {
  count: 0,
  collection: {},
};

const pokemonFeature = POKEMON;
const trainerFeature = TRAINER;
const buildNotification = (feature, number) => ({
  [feature]: {
    type: 'info',
    message: 'the notification message',
    feature,
    number,
  }
});

deepFreeze(initState);

describe('test notification reducer', () => {
  it('should return initial state', () => {
    expect(notificationsReducer(undefined, {})).toEqual(initState);
  });

  it('should add notification to collection', () => {
    const pokemonNotification = buildNotification(pokemonFeature, 0);
    const firstAction = {
      type: `${pokemonFeature} ${SET_NOTIFICATION}`,
      payload: pokemonNotification,
      meta: { pokemonFeature },
    };
    const newState = notificationsReducer(initState, deepFreeze(firstAction));

    expect(newState.count).toEqual(1);
    expect(newState.collection).toEqual(pokemonNotification);


    const trainerNotification = buildNotification(trainerFeature, 1);
    const secondAction = {
      type: `${trainerFeature} ${SET_NOTIFICATION}`,
      payload: trainerNotification,
      meta: { trainerFeature },
    };
    const lastState = notificationsReducer(deepFreeze(newState), deepFreeze(secondAction));

    expect(lastState.count).toEqual(2);
    expect(lastState.collection).toEqual({ ...pokemonNotification, ...trainerNotification });
  });

  it('should remove notification from collection', () => {
    const notification = buildNotification(pokemonFeature, 0);
    const prevState = {
      count: 1,
      collection: { ...notification },
    };
    const action = {
      type: `${pokemonFeature} ${REMOVE_NOTIFICATION}`,
      payload: { feature: pokemonFeature },
      meta: { pokemonFeature },
    };

    const newState = notificationsReducer(deepFreeze(prevState), deepFreeze(action));

    expect(newState.count).toEqual(0);
    expect(newState.collection).toEqual({});
  });
});
