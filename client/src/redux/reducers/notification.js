import { assoc, has, omit } from 'ramda';
import { getNormalizedId } from '../../utils/array';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/notification';

const initState = {};

export const notificationsReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (true) {
    case type.includes(SET_NOTIFICATION): {
      const id = getNormalizedId(payload);
      return has(id, state)
        ? state
        : assoc(id, payload[id], state);
    }

    case type.includes(REMOVE_NOTIFICATION):
      return omit([payload.feature], state);

    default:
      return state;
  }
};
