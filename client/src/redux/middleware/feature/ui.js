import { setNotification } from '../../actions/notification';
import { SHOW_ONLINE, SHOW_OFFLINE, UI, hideModal } from '../../actions/ui';

const UNSELECT = 'UNSELECT';

const uiMiddleware = ({ dispatch }) => next => action => {
  const { type } = action;

  next(action);

  if (type.includes(UNSELECT)) {
    return dispatch(hideModal());
  }

  if (type === SHOW_ONLINE) {
    const type = 'info';
    const message = "You're back on the line";

    return next(setNotification({ type, message, feature: UI, normalizeKey: 'feature' }));
  }

  if (type === SHOW_OFFLINE) {
    const type = 'warning';
    const message = 'Warning, you went offline';

    return next(setNotification({ type, message, feature: UI, normalizeKey: 'feature' }));
  }
};

export default uiMiddleware;
