import * as index from './index.js';
import * as contact from './contact.js';

console.log(index.Book);
window.onload = () => {
    if (localStorage.length === 0) {
      localStorage.setItem('books', JSON.stringify(Book.books));
    }
    index.Book.displayBooks();
    index.setDate();
  };

const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contactTab = document.getElementById('contact');
//const switchTabs = () => {
//  console.log('called');
//}
//
list.addEventListener('click', () =>     console.log('called'));