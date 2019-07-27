import {
  complement, compose, head, inc,
  is, isEmpty, keys, map, reduce,
} from 'ramda';

export const collectionToArray = collection => {
  const fn = (acc = [], curr) => {
    acc.push(collection[curr]);
    return acc;
  };

  return compose(
    reduce(fn, []),
    keys,
  )(collection);
}

export const newArrayIds = n => compose(
  map(inc),
  keys
)([...Array(n)]);

export const arrayWrap = data => is(Array, data) ? data : [data];

export const getNormalizedId = data => head(keys(data));

export const notEmpty = complement(isEmpty);

export const normalizeData = (normalizeKey, data) => {
  return arrayWrap(data).reduce((acc, curr) => {
    acc[curr[normalizeKey]] = curr;
    return acc;
  }, {});
};
