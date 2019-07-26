import {
  TRAINER, FETCH_TRAINER, CACHE_OR_FETCH_TRAINER, SET_TRAINER, SELECT_TRAINER, UNSELECT_TRAINER,
  fetchTrainer, cacheOrFetchTrainers, setTrainer, selectTrainer, unselectTrainer,
} from '../trainer';

const feature = TRAINER;

describe('test trainer action creator', () => {
  it('should create a fetchTrainer action', () => {
    const query = 1;
    const action = fetchTrainer({ query });

    expect(action.type).toEqual(FETCH_TRAINER);
    expect(action.payload).toEqual(query);
  });

  it('should create a cacheOrFetchTrainers action', () => {
    const ids = [1, 2];
    const action = cacheOrFetchTrainers({ ids });

    expect(action.type).toEqual(CACHE_OR_FETCH_TRAINER);
    expect(action.payload).toEqual(ids);
  });

  it('should create a setTrainer action', () => {
    const data = { id: 1, name: 'Ash Ketchum' };
    const normalizeKey = 'id';
    const action = setTrainer({ data, normalizeKey });

    expect(action.type).toEqual(SET_TRAINER);
    expect(action.payload).toEqual(data);
    expect(action.meta).toEqual({ feature, normalizeKey });
  });

  it('should create a selectTrainer action', () => {
    const id = 1;
    const action = selectTrainer({ id });

    expect(action.type).toEqual(SELECT_TRAINER);
    expect(action.payload).toEqual(id);
  });

  it('should create a unselectTrainer action', () => {
    const action = unselectTrainer();

    expect(action.type).toEqual(UNSELECT_TRAINER);
  });
});
