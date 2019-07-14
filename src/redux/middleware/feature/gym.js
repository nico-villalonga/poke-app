import { GYM, FETCH_GYM, setGym } from '../../actions/gym';
import { API_ERROR, API_SUCCESS, apiSuccess } from '../../actions/api';
import response from '../../../data/gyms';

const trainerMiddleware = ({ dispatch }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_GYM:
      return dispatch(apiSuccess({ data: response.data[payload], feature: GYM }));

    case `${GYM} ${API_SUCCESS}`:
      return next(setGym({ data: payload, normalizeKey: 'id' }));

    case `${GYM} ${API_ERROR}`:
			return console.log('trainer api error');
  }
};

export default trainerMiddleware;
