import { assocPath, has, includes, prop } from 'ramda';
import { getNormalizedId } from '../../../utils/array';
import { SET_NOTIFICATION, removeNotification } from '../../actions/notification';

const notificationMiddleware = ({ getState }) => next => action => {
  const { payload, type } = action;

  if (includes(SET_NOTIFICATION, type)) {
    const { time = 3000 } = action.meta;
    const feature = getNormalizedId(payload);
    const { count, collection } = prop('notifications', getState());

    // If a notification for that feature already exists then omit new one.
    if (has(feature, collection)) {
      return;
    }

    const newAction = assocPath(['payload', feature, 'number'], count, action);

    next(newAction);
    // remove notification after time.
    setTimeout(() => {
      return next(removeNotification({ feature }));
    }, time);
  } else {
    next(action);
  }
};

export default notificationMiddleware;
