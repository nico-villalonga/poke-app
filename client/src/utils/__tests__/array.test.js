import {
  compose, head, isEmpty, keys, last, length,
  type, map, pluck, prop, props, toString, values,
} from 'ramda';
import {
  newArrayIds, arrayWrap,
  getNormalizedId, normalizeData,
} from '../array';

describe('test array utils', () => {
  describe('test newArrayIds', () => {
    it('should produce array of number from 1 through param n', () => {
      const firstSeed = 1;
      const firstArray = newArrayIds(firstSeed);

      expect(type(firstArray)).toEqual('Array');
      expect(length(firstArray)).toEqual(1);
      expect(head(firstArray)).toEqual(1);
      expect(last(firstArray)).toEqual(firstSeed);

      const secondSeed = 9;
      const secondArray = newArrayIds(secondSeed);

      expect(type(secondArray)).toEqual('Array');
      expect(length(secondArray)).toEqual(secondSeed);
      expect(head(secondArray)).toEqual(1);
      expect(last(secondArray)).toEqual(secondSeed);
    });

    it('should produce empty array for param n equals zero or negative', () => {
      const firstSeed = 0;
      const firstArray = newArrayIds(firstSeed);

      expect(type(firstArray)).toEqual('Array');
      expect(isEmpty(firstArray)).toBeTruthy();

      const secondSeed = -1;
      const secondArray = newArrayIds(secondSeed);

      expect(type(secondArray)).toEqual('Array');
      expect(isEmpty(firstArray)).toBeTruthy();
    });
  });

  describe('test arrayWrap', () => {
    it('should wrap any non array value into array', () => {
      const fn = () => {};
      const sym = Symbol('Sym');
      const err = Error();

      expect(arrayWrap('text')).toEqual(['text']);
      expect(arrayWrap(1)).toEqual([1]);
      expect(arrayWrap(true)).toEqual([true]);
      expect(arrayWrap({})).toEqual([{}]);
      expect(arrayWrap(fn)).toEqual([fn]);
      expect(arrayWrap(sym)).toEqual([sym]);
      expect(arrayWrap(err)).toEqual([err]);
      expect(arrayWrap(null)).toEqual([null]);
      expect(arrayWrap()).toEqual([undefined]);
    });

    it('should NOT wrap array value into array', () => {
      const fn = () => {};
      const sym = Symbol('Sym');
      const err = Error();

      expect(arrayWrap([])).toEqual([]);
      expect(arrayWrap([1])).toEqual([1]);
      expect(arrayWrap([true])).toEqual([true]);
      expect(arrayWrap([{}])).toEqual([{}]);
      expect(arrayWrap([fn])).toEqual([fn]);
      expect(arrayWrap([sym])).toEqual([sym]);
      expect(arrayWrap([err])).toEqual([err]);
      expect(arrayWrap([null])).toEqual([null]);
      expect(arrayWrap([undefined])).toEqual([undefined]);
    });
  });

  describe('test getNormalizedId', () => {
    it('should get the first key of a collection', () => {
      const firstCollection = getNormalizedId(['one', 'two', 'three']);

      expect(length(firstCollection)).toEqual(1);
      expect(firstCollection).toEqual('0');

      const secondCollection = getNormalizedId([{ a:'one' }, { b:'two' }, { c:'three' }]);

      expect(length(secondCollection)).toEqual(1);
      expect(secondCollection).toEqual('0');

      const thirdCollection = getNormalizedId({ a: 'one', b: 'two', c:'three' });

      expect(length(thirdCollection)).toEqual(1);
      expect(thirdCollection).toEqual('a');

      const fourthCollection = getNormalizedId({
        a: { 1: 'one' },
        b: { 2: 'two' },
        c: { 3: 'three'},
      });

      expect(length(fourthCollection)).toEqual(1);
      expect(fourthCollection).toEqual('a');
    });
  });

  describe('test normalizeData', () => {
    const normalizeKey = 'id';

    it('should transform a collection to paramKey: { ...value }', () => {
      const firstCollection = { id: 1, letter: 'a' };
      const firstCollectionNormalized = normalizeData(normalizeKey, firstCollection);

      expect(type(firstCollectionNormalized)).toEqual('Object');
      expect(prop(1, firstCollectionNormalized)).toEqual(firstCollection);
      expect(head(values(firstCollectionNormalized))).toEqual(firstCollection);
      expect(keys(firstCollectionNormalized))
        .toEqual(
          compose(
            map(toString),
            props([normalizeKey])
          )(firstCollection)
        );

      const secondCollection = [{ id: 1, letter: 'a' }, { id: 2, letter: 'b' }];
      const secondCollectionNormalized = normalizeData(normalizeKey, secondCollection);

      expect(type(firstCollectionNormalized)).toEqual('Object');
      expect(prop(1, secondCollectionNormalized)).toEqual(head(secondCollection));
      expect(values(secondCollectionNormalized)).toEqual(secondCollection);
      expect(keys(secondCollectionNormalized))
        .toEqual(
          compose(
            map(toString),
            pluck(normalizeKey)
          )(secondCollection)
        );
    });

    it('should handle empty and null case', () => {
      const firstCollection = normalizeData('id', []);

      expect(type(firstCollection)).toEqual('Object');
      expect(firstCollection).toEqual({});

      const secondCollection = normalizeData('id', {});

      expect(type(secondCollection)).toEqual('Object');
      expect(secondCollection).toEqual({});

      const thirdCollection = normalizeData('id', null);

      expect(type(thirdCollection)).toEqual('Object');
      expect(thirdCollection).toEqual({});

      const fourthCollection = normalizeData('id', undefined);

      expect(type(fourthCollection)).toEqual('Object');
      expect(fourthCollection).toEqual({});
    });
  });
});
