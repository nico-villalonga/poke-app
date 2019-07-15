import { GYM, FETCH_GYMS, setGyms } from '../../actions/gym';
import { API_ERROR, API_SUCCESS, apiSuccess } from '../../actions/api';
import response from '../../../data/gyms';

const trainerMiddleware = ({ dispatch }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_GYMS:
      return dispatch(apiSuccess({ data: response.data, feature: GYM }));

    case `${GYM} ${API_SUCCESS}`:
      return next(setGyms({ data: payload }));

    case `${GYM} ${API_ERROR}`:
			return console.log('trainer api error');
  }
};

export default trainerMiddleware;
