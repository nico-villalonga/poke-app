import { compose, inc, keys, map, reduce } from 'ramda';

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
