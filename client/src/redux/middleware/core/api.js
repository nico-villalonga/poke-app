import axios from 'axios';
import { API_REQUEST, apiError, apiSuccess } from '../../actions/api';

const apiMiddleware = ({ dispatch }) => next => action => {
  const { payload, type } = action;

  next(action);

  if (type.includes(API_REQUEST)) {
    const { feature } = payload;

    axios({ ...payload })
      .then(response => dispatch(apiSuccess({ data: response.data, feature })))
      .catch(error => dispatch(apiError({ error, feature })));
	}
};

export default apiMiddleware;
