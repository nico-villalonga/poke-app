// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

// action creators
export const apiRequest = ({ url, method, feature, data = {}, headers = {} }) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: { url, method, feature, data, headers },
});

export const apiSuccess = ({ data, feature }) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: data,
  meta: { feature },
});

export const apiError = ({ error, feature }) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
