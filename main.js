// eslint-disable-next-line import/extensions
import * as BookStorage from './bookStorage.js';

const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contactNav = document.getElementById('contact');
const awesomeBooksTitle = document.getElementById('awesome-books-title');
const bookStorage = document.getElementById('book-storage');
const addForm = document.getElementById('add-form');
const contactTab = document.getElementById('contact-info');

const switchTabs = (e) => {
  switch (e.target.id) {
    case 'list':
      awesomeBooksTitle.style.display = 'none';
      if (bookStorage.children.length === 0) {
        bookStorage.style.border = 'none';
      }
      bookStorage.style.display = 'flex';
      addForm.style.display = 'none';
      contactTab.style.display = 'none';
      break;
    case 'add-new':
      awesomeBooksTitle.style.display = 'none';
      bookStorage.style.display = 'none';
      addForm.style.display = 'flex';
      contactTab.style.display = 'none';
      break;
    case 'contact':
      awesomeBooksTitle.style.display = 'none';
      bookStorage.style.display = 'none';
      addForm.style.display = 'none';
      contactTab.style.display = 'block';
      break;
    default:
      break;
  }
};

list.addEventListener('click', (e) => switchTabs(e));
addNew.addEventListener('click', (e) => switchTabs(e));
contactNav.addEventListener('click', (e) => switchTabs(e));

window.onload = () => {
  if (localStorage.length === 0) {
    localStorage.setItem('books', JSON.stringify(BookStorage.Book.books));
  }

  if (bookStorage.children.length === 0) {
    awesomeBooksTitle.style.display = 'none';
    bookStorage.style.display = 'flex';
    addForm.style.display = 'none';
    contactTab.style.display = 'none';
  }

  BookStorage.Book.displayBooks();
  BookStorage.setDate();
};
