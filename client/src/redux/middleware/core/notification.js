import { getNormalizedId } from '../../../utils/array';
import { SET_NOTIFICATION, removeNotification } from '../../actions/notification';

const notificationMiddleware = () => next => action => {
  const { payload, type } = action;

  next(action);

  if (type.includes(SET_NOTIFICATION)) {
    const { time = 3000 } = action.meta;
    const feature = getNormalizedId(payload);

    // remove notification after time.
    setTimeout(() => {
      return next(removeNotification({ feature }));
    }, time);
  }
};

export default notificationMiddleware;
