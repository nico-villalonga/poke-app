import { TRAINER, FETCH_TRAINER, setTrainer } from '../../actions/trainer';
import { API_ERROR, API_SUCCESS, apiSuccess } from '../../actions/api';
import response from '../../../data/trainers/trainers';

const trainerMiddleware = ({ dispatch }) => (next) => (action) => {
	const { payload, type } = action;

	next(action);

  // eslint-disable-next-line default-case
  switch (type) {
    case FETCH_TRAINER:
      return dispatch(apiSuccess({ data: response.data[payload], feature: TRAINER }));

    case `${TRAINER} ${API_SUCCESS}`:
      return next(setTrainer({ trainer: payload }));

    case `${TRAINER} ${API_ERROR}`:
			return console.log('trainer api error');
  }
};

export default trainerMiddleware;
