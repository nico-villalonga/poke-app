import { hideModal } from '../../actions/ui';

const UNSELECT = 'UNSELECT';

const uiMiddleware = ({ dispatch }) => next => action => {
  const { type } = action;

  next(action);

  if (type.includes(UNSELECT)) {
    return dispatch(hideModal());
	}
};

export default uiMiddleware;
