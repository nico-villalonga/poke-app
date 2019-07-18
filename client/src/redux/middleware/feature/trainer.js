import { path } from 'ramda';
import { API_ERROR, API_SUCCESS, apiSuccess } from '../../actions/api';
import {
  TRAINER, FETCH_TRAINER,
  CACHE_OR_FETCH_TRAINER, setTrainer,
} from '../../actions/trainer';
import response from '../../../data/trainers';

const trainerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_TRAINER:
      return dispatch(apiSuccess({ data: response.data[payload], feature: TRAINER }));

    case CACHE_OR_FETCH_TRAINER: {
      const trainers = path(['trainers', 'collection'], getState());
      const missing = payload.reduce((acc, curr) => {
        if (!trainers[curr]) {
          acc.push(curr);
        }

        return acc;
      }, []);

      return missing.forEach(id => dispatch(apiSuccess({ data: response.data[id], feature: TRAINER })));
    }

    case `${TRAINER} ${API_SUCCESS}`:
      return next(setTrainer({ data: payload, normalizeKey: 'id' }));

    case `${TRAINER} ${API_ERROR}`:
			return console.log('trainer api error');
  }
};

export default trainerMiddleware;