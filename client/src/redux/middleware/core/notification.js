import { has, includes, prop } from 'ramda';
import { getNormalizedId } from '../../../utils/array';
import { SET_NOTIFICATION, removeNotification } from '../../actions/notification';

const notificationMiddleware = ({ getState }) => next => action => {
  const { payload, type } = action;

  if (includes(SET_NOTIFICATION, type)) {
    const { time = 3000 } = action.meta;
    const feature = getNormalizedId(payload);
    const notifications = prop('notifications', getState());

    // If a notification for that feature already exists then omit new one.
    if (has(feature, notifications)) {
      return;
    }

    next(action);
    // remove notification after time.
    setTimeout(() => {
      return next(removeNotification({ feature }));
    }, time);
  } else {
    next(action);
  }
};

export default notificationMiddleware;
