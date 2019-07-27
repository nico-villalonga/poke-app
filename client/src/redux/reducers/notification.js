import { assoc, compose, dec, dissoc, evolve, inc, max } from 'ramda';
import { getNormalizedId } from '../../utils/array';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/notification';

const initState = {
  count: 0,
  collection: {},
};

export const notificationsReducer = (state = initState, action) => {
  const { payload, type = '' } = action;

  switch (true) {
    case type.includes(SET_NOTIFICATION): {
      const id = getNormalizedId(payload);

      return evolve({
        count: inc,
        collection: assoc(id, payload[id]),
      })(state);
    }

    case type.includes(REMOVE_NOTIFICATION):
      return evolve({
        count: compose(max(0), dec),
        collection: dissoc(payload.feature),
      })(state);

    default:
      return state;
  }
};
