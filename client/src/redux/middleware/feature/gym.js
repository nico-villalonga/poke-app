import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api';
import { GYM, FETCH_GYMS, setGyms } from '../../actions/gym';

const GYMS_URL = 'api/gyms';

const trainerMiddleware = ({ dispatch }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_GYMS:
      return next(apiRequest({ url: GYMS_URL, method: 'GET', feature: GYM }));

    case `${GYM} ${API_SUCCESS}`:
      return next(setGyms({ data: payload, normalizeKey: 'id' }));

    case `${GYM} ${API_ERROR}`:
			return console.log('trainer api error');
  }
};

export default trainerMiddleware;
