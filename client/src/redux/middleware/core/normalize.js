import { always, assoc, evolve } from 'ramda';
import { normalizeData } from '../../../utils/array';
import { dataNormalized } from '../../actions/data';

const normalizeMiddleware = ({ dispatch }) => next => action => {
  const { payload, meta, type } = action;

  if (type.includes('SET') && meta.normalizeKey) {
    const { normalizeKey, feature } = meta;
    const data = normalizeData(normalizeKey, payload);
    const newAction = evolve({
      meta: assoc('normalizeKey', null),
      payload: always(data),
    })(action);

    // notify about the transformation
    dispatch(dataNormalized({ feature }));
    // continue the flow with modified action
    next(newAction);

  } else {
    next(action);
  }
};

export default normalizeMiddleware;
