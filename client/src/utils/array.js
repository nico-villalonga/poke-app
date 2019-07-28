import {
  complement, compose, head, inc, is,
  isEmpty, isNil, keys, map, max,
} from 'ramda';

export const newArrayIds = n => compose(
  map(inc),
  keys
)([...Array(max(0, n))]);

export const arrayWrap = data => is(Array, data) ? data : [data];

export const getNormalizedId = data => head(keys(data));

export const notEmpty = complement(isEmpty);

export const normalizeData = (normalizeKey, data = []) => {
  if (isNil(data) || isEmpty(data)) {
    return {};
  }

  return arrayWrap(data).reduce((acc, curr) => {
    acc[curr[normalizeKey]] = curr;
    return acc;
  }, {});
};
