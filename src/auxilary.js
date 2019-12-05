// Auxilary functions

export const getArrayOfStrings = (size) => {
  let options = [];
  for (let i = 0; i < size; ++i) {
    options.push(getRandomString());
  }
  return options;
};

export const getRandomString = () => {
  const minLength = 1;
  const maxLength = 10;
  const stringSize = getRandomInt(minLength, maxLength);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLastIndex = alphabet.length - 1;

  let resultString = [];
  for (let i = 0; i <= stringSize; i++) {
    const letterIndex = getRandomInt(0, alphabetLastIndex);
    const letter = alphabet[letterIndex];
    resultString.push(letter);
  }
  
  return resultString.join('');
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
};

export const startsWith = (pattern, text) => {
  if (pattern.length > text.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; ++i) {
    if (pattern[i] !== text[i]){
      return false;
    }
  }

  return true;
};

export const getMatches = (pattern, words, size) => {
  const defaultMatchesLength = 5;
  const maxMatchesLength = size || defaultMatchesLength;
  const matches = [];
  for (let i = 0; i < words.length; i++) {
    if (startsWith(pattern, words[i])) {
      matches.push(words[i]);
    }
    if (matches.length === maxMatchesLength) {
      return matches;
    }
  }
  return matches;
};




