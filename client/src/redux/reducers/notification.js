import { assoc, dissoc } from 'ramda';
import { getNormalizedId } from '../../utils/array';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/notification';

const initState = {};

export const notificationsReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (true) {
    case type.includes(SET_NOTIFICATION): {
      const id = getNormalizedId(payload);
      return assoc(id, payload[id], state);
    }

    case type.includes(REMOVE_NOTIFICATION):
      return dissoc(payload.feature, state);

    default:
      return state;
  }
};
