import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api';
import { BADGE, FETCH_BADGES, setBadges } from '../../actions/badge';

const BADGES_URL = 'api/badges';

const badgeMiddleware = ({ dispatch }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_BADGES:
        return next(apiRequest({ url: BADGES_URL, method: 'GET', feature: BADGE }));

    case `${BADGE} ${API_SUCCESS}`:
      return next(setBadges({ data: payload, normalizeKey: 'id' }));

    case `${BADGE} ${API_ERROR}`:
			return console.log('trainer api error');
  }
};

export default badgeMiddleware;
