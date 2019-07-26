import { BADGE, FETCH_BADGES, SET_BADGES, fetchBadges, setBadges } from '../badge';

describe('test badge action creator', () => {
  it('should create a fetchBadges action', () => {
    const action = fetchBadges();

    expect(action.type).toEqual(FETCH_BADGES);
  });

  it('should create a setBadges action', () => {
    const feature = BADGE;
    const data = { id: 1, name: 'boulder' };
    const normalizeKey = 'id';
    const action = setBadges({ data, normalizeKey });

    expect(action.type).toEqual(SET_BADGES);
    expect(action.payload).toEqual(data);
    expect(action.meta).toEqual({ feature, normalizeKey });
  });
});
