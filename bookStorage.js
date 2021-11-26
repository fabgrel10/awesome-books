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

  static addBook() {
    if (bookTitle.value === '' || bookAuthor.value === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter a title and author');
      return;
    }
    Book.books.push(new Book(bookTitle.value, bookAuthor.value));
    Book.store(Book.books);
  }

  static displayBooks = () => {
    if (!JSON.parse(localStorage.getItem('books'))) {
      Book.books = [];
    } else {
      Book.books = JSON.parse(localStorage.getItem('books'));
    }

    let html = '';
    Book.books.forEach((book) => {
      html += `<div class="book-div">
                <div class="book-info">
                  <label>"${book.title}" by</label>
                  <label>${book.author}</label>
                </div>
                <div>
                   <button type="button" class="remove-btn" >Remove</button>
                </div>
                </div>`;
    });
    document.querySelector('#book-storage').innerHTML = html;

    const removeBook = document.querySelectorAll('.remove-btn');

    removeBook.forEach((button, index) => {
      button.addEventListener('click', () => {
        Book.books.splice(index, 1);
        Book.store(Book.books);
        Book.displayBooks();
      });
    });
  };
}

function setDate() {
  const date = document.getElementById('set-date');
  // eslint-disable-next-line no-undef
  const { DateTime } = luxon;

  date.innerHTML = DateTime.now().toFormat('LLL dd yyyy, t');
}

addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  Book.addBook();
  Book.displayBooks();
  bookTitle.value = '';
  bookAuthor.value = '';
});

export { Book, setDate, addBookButton };
