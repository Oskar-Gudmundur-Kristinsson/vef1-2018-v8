const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;
  const span = document.querySelector('span');
  const button = document.querySelector('item__button');

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);
    span.addEventListener('click',edit);
    button.addEventListener('click',deleteItem);
    // TODO láta hluti í _items virka
    edit()
  }

  function formHandler(e) {
    e.preventDefault();

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {

  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    console.log('meme', 'me', e);
    //e.remove();
    var nnew = document.createElement('input');
  //  nnew.appendChild(e.parentNode);
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    e.parentNode.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
