/* eslint-disable max-classes-per-file */

const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBookButton = document.getElementById('add-book-button');

class Book {
  static books = [];

  static store(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    if (bookTitle.value === '' || bookAuthor.value === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter a title and author');
      return;
    }
    Book.books.push(this);
    Book.store(Book.books);
  }

  displayBooks = () => {
    const booksLocalStorage = JSON.parse(localStorage.getItem('books'));
    Book.books = booksLocalStorage;
    let html = '';
    booksLocalStorage.forEach((book, index) => {
      html += `<div class="book">
                  <p>${book.title}</p>
                  <p>${book.author}</p>
                  <button type="button" class="removeBtn" id="${index}">Remove</button>
                  <hr />
                </div>`;
    });
    document.querySelector('#book-storage').innerHTML = html;

    const removeBook = document.querySelectorAll('.removeBtn');

    removeBook.forEach((button) => {
      button.addEventListener('click', (e) => {
        const book = new Book(bookTitle.value, bookAuthor.value);
        book.books.splice(e.target.id, 1);
        book.store(Book.books);
        book.displayBooks();
      });
    });
  };
}

addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Book(bookTitle.value, bookAuthor.value);
  book.addBook();
  book.displayBooks();
});

window.onload = () => {
  const book = new Book(bookTitle.value, bookAuthor.value);
  if (localStorage.length === 0) {
      localStorage.setItem('books', JSON.stringify(Book.books));
  }
  //console.log(Book);
  book.displayBooks();
};
