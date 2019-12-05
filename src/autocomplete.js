import { getMatches } from './auxilary.js';

export default class Autocomplete {
  constructor(words) {
    this.input = document.getElementById('autocomplete-input');
    this.dropdown = document.getElementById('autocomplete-hints');
    this.words = words;
    this.input.addEventListener('keyup', this.autocompleteOnInput.bind(this));
  }

  autocompleteOnInput() {
    if(this.input.value.length > 0) {
      const matches = getMatches(this.input.value, this.words);
      this.populateDropdown(matches);
    } else {
      this.clearDropdown();
    }
  }

  populateDropdown(options) {
    this.clearDropdown();
    for (let i = 0; i < options.length; ++i) {
      const li = this.createDropdownItem(options[i]);
      this.dropdown.appendChild(li);
    }
  }

  handleDDItemClick(event) {
    const selectedText = event.target.innerText;
    this.input.value = selectedText;
    this.clearDropdown();
  }

  createDropdownItem (text) {
    const li = document.createElement('li');
    const innerText = document.createTextNode(text);
    li.appendChild(innerText);
    li.addEventListener('click', this.handleDDItemClick.bind(this));
    return li;
  }

  clearDropdown() {
    this.dropdown.innerHTML = '';
  }
}
