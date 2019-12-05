import {
  getRandomInt,
  getRandomString,
  getArrayOfStrings,
  startsWith,
  getMatches,
} from '../auxilary.js';

test('getRandomInt generates random integer in bounds', () => {
  const min = 0;
  const max = 2;
  const middle = Math.floor((min + max) / 2);
  const results = [];

  for (let i = 0; i < 30; ++i){
    results.push(getRandomInt(min, max));
  }

  const containsLowerBound = results.indexOf(min) !== -1; 
  const containsUpperBound = results.indexOf(max) !== -1; 
  const containsMiddleValue = results.indexOf(middle) !== -1;

  expect(containsLowerBound).toBe(true);
  expect(containsUpperBound).toBe(true);
  expect(containsMiddleValue).toBe(true);
});

test('getRandomString generates a random non-empty string', () => {
  const oneString = getRandomString();
  const anotherString = getRandomString();
  const yetAnotherString = getRandomString();
  const stringsAreEqual = oneString === anotherString &&
                              anotherString === yetAnotherString &&
                              oneString === yetAnotherString;

  expect(typeof oneString).toBe('string');
  expect(oneString.length).not.toBe(0);
  expect(stringsAreEqual).toBe(false);
});

test('getArrayOfStrings genereates array of strings with given size', () => {
  const arr = getArrayOfStrings(5);

  expect(arr.length).toBe(5);
  expect(typeof arr[0]).toBe('string');
});

test('startsWith returns true is text starts with pattern', () => {
  expect(startsWith('a', 'any text')).toBe(true);
  expect(startsWith('any', 'any text')).toBe(true);
  expect(startsWith('any text with bigger length', 'any text')).toBe(false);
  expect(startsWith('text', 'any text')).toBe(false);
});

test('getMatches returns first 5 matches for pattern by default', () => {
  const words = ['a', 'absence', 'absolute', 'animal', 'anonymous', 'any'];
  const pattern = 'a';
  const defaultMatchesLength = 5;
  const matches = getMatches(pattern, words);

  expect(matches.length).toBe(defaultMatchesLength);
  expect(matches[0]).toEqual(words[0]);
  expect(matches[1]).toEqual(words[1]);
  expect(matches[2]).toEqual(words[2]);
  expect(matches[3]).toEqual(words[3]);
  expect(matches[4]).toEqual(words[4]);
});

test('getMatches returns first N matches for pattern if N is passed', () => {
  const words = ['a', 'absence', 'absolute', 'animal', 'anonymous', 'any'];
  const pattern = 'a';
  const expectedLength = 2;
  const matches = getMatches(pattern, words, expectedLength);

  expect(matches.length).toBe(expectedLength);
  expect(matches[0]).toEqual('a');
  expect(matches[1]).toEqual('absence');
});

test('getMatches returns empty array if no pattern found', () => {
  const words = ['a', 'absence', 'absolute', 'animal', 'anonymous', 'any'];
  const pattern = 'hello';
  const matches = getMatches(pattern, words);

  expect(matches.length).toBe(0);
});