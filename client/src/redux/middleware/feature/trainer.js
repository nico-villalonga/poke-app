import { path } from 'ramda';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api';
import { setNotification } from '../../actions/notification';
import {
  TRAINER, FETCH_TRAINER, CACHE_OR_FETCH_TRAINER,
  fetchTrainer, setTrainer,
} from '../../actions/trainer';

const TRAINERS_URL = '/api/trainers';

const trainerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_TRAINER: {
      const url = `${TRAINERS_URL}/${payload}`;
      return next(apiRequest({ url, method: 'GET', feature: TRAINER }));
    }

    case CACHE_OR_FETCH_TRAINER: {
      const trainers = path(['trainers', 'collection'], getState());
      const missing = payload.reduce((acc, curr) => {
        if (!trainers[curr]) {
          acc.push(curr);
        }

        return acc;
      }, []);

      return missing.forEach(id => dispatch(fetchTrainer({ query: id })));
    }

    case `${TRAINER} ${API_SUCCESS}`:
      return next(setTrainer({ data: payload, normalizeKey: 'id' }));

    case `${TRAINER} ${API_ERROR}`: {
      const message = 'Error while fetching trainers';

      console.log('trainer api error', payload.message);
      return next(setNotification({ message, feature: TRAINER, normalizeKey: 'feature' }));
    }
  }
};

export default trainerMiddleware;
