import Autocomplete from './autocomplete.js';
import {  getArrayOfStrings } from './auxilary.js';

const arraySize = 5000;
const words = getArrayOfStrings(arraySize);
const autocomplete = new Autocomplete(words);
