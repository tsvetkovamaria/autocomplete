import Autocomplete from '../autocomplete.js';

describe('Autocomplete', () => {
  let wrapper;
  beforeEach(()=>{
    document.body.innerHTML =
      `<input type="text" id="autocomplete-input">
      <ul id="autocomplete-hints"></ul>`;

    const words = ['aaa', 'bbb', 'aab'];
    wrapper = new Autocomplete(words);
  })

  test('it creates Autocomplete instance with empty dropdown', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.dropdown.innerHTML).toBeFalsy()
  });

  test('it populates dropdown with matching words on input key change', () => {
    wrapper.input.value = 'a';
    const event = new KeyboardEvent('keyup');
    wrapper.input.dispatchEvent(event);
    expect(wrapper.dropdown.innerHTML).not.toBeFalsy();
    expect(wrapper.dropdown.innerHTML).toContain('aaa');
    expect(wrapper.dropdown.innerHTML).toContain('aab');
    expect(wrapper.dropdown.innerHTML).not.toContain('bbb');
  });

});