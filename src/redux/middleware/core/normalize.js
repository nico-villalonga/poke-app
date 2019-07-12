import { dataNormalized } from '../../actions/data';

const normalizeMiddleware = ({ dispatch }) => next => action => {
  const { payload, meta, type } = action;

  if (type.includes('SET') && meta.normalizeKey) {
    // transform the data structure
    const data = { [payload.id]: payload };
    const newAction = {
      ...action,
      meta: { normalizeKey: null },
      payload: data,
    };

    // notify about the transformation
    dispatch(dataNormalized({ feature: meta.feature }));
    // continue the flow with modified action
    next(newAction);

  } else {
    next(action);
  }
};

export default normalizeMiddleware;
