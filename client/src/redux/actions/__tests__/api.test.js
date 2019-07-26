import { POKEMON } from '../pokemon';
import {
  API_REQUEST, API_SUCCESS, API_ERROR,
  apiRequest, apiSuccess, apiError,
} from '../api';

const feature = POKEMON;

describe('test api action creator', () => {
  it('should create an apiRequest action', () => {
    const url = 'fake-url.com';
    const method = 'GET';
    const payload = { url, method, feature, data: {}, headers: {} };
    const action = apiRequest({ url, method, feature });

    expect(action.type).toEqual(`${feature} ${API_REQUEST}`);
    expect(action.payload).toEqual(payload);
  });

  it('should create an apiSuccess action', () => {
    const data = { id: 25, name: 'pikachu' };
    const action = apiSuccess({ data, feature });

    expect(action.type).toEqual(`${feature} ${API_SUCCESS}`);
    expect(action.payload).toEqual(data);
    expect(action.meta).toEqual({ feature });
  });

  it('should create an apiError action', () => {
    const error = { message: 'some error message' };
    const action = apiError({ error, feature });

    expect(action.type).toEqual(`${feature} ${API_ERROR}`);
    expect(action.payload).toEqual(error);
    expect(action.meta).toEqual({ feature });
  });
});
