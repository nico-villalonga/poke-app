import { DATA_NORMALIZED, dataNormalized } from '../data';

describe('test data action creator', () => {
  it('should create a dataNormalized action', () => {
    const feature = 'POKEMON';
    const action = dataNormalized({ feature });

    expect(action.type).toEqual(`${feature} ${DATA_NORMALIZED}`);
    expect(action.meta).toEqual({ feature });
  });
});
