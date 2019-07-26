import {
  GYM, FETCH_GYMS, SET_GYMS, SELECT_GYM, UNSELECT_GYM,
  fetchGyms, setGyms, selectGym, unselectGym,
} from '../gym';

const feature = GYM;

describe('test gym action creator', () => {
  it('should create a fetchGyms action', () => {
    const action = fetchGyms();

    expect(action.type).toEqual(FETCH_GYMS);
  });

  it('should create a setGyms action', () => {
    const data = { id: 1, name: 'Pewter' };
    const normalizeKey = 'id';
    const action = setGyms({ data, normalizeKey });

    expect(action.type).toEqual(SET_GYMS);
    expect(action.payload).toEqual(data);
    expect(action.meta).toEqual({ feature, normalizeKey });
  });

  it('should create a selectGym action', () => {
    const id = 1;
    const action = selectGym({ id });

    expect(action.type).toEqual(SELECT_GYM);
    expect(action.payload).toEqual(id);
  });

  it('should create a unselectGym action', () => {
    const action = unselectGym();

    expect(action.type).toEqual(UNSELECT_GYM);
  });
});
