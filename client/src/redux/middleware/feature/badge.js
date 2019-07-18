import { BADGE, FETCH_BADGES, setBadges } from '../../actions/badge';
import { API_ERROR, API_SUCCESS, apiSuccess } from '../../actions/api';
import response from '../../../data/badges';

const badgeMiddleware = ({ dispatch }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_BADGES:
      return dispatch(apiSuccess({ data: response.data, feature: BADGE }));

    case `${BADGE} ${API_SUCCESS}`:
      return next(setBadges({ data: payload }));

    case `${BADGE} ${API_ERROR}`:
			return console.log('trainer api error');
  }
};

export default badgeMiddleware;
