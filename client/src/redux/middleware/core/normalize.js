import { arrayWrap } from '../../../utils/array';
import { dataNormalized } from '../../actions/data';

const normalizeMiddleware = ({ dispatch }) => next => action => {
  const { payload, meta, type } = action;

  if (type.includes('SET') && meta.normalizeKey) {
    const { normalizeKey, feature } = meta;
    const dataArray = arrayWrap(payload);
    const data = dataArray.reduce((acc, curr) => {
      acc[curr[normalizeKey]] = curr;
      return acc;
    }, {});

    const newAction = {
      ...action,
      meta: { normalizeKey: null },
      payload: data,
    };

    // notify about the transformation
    dispatch(dataNormalized({ feature }));
    // continue the flow with modified action
    next(newAction);

  } else {
    next(action);
  }
};

export default normalizeMiddleware;
