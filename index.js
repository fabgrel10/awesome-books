window.onload = () => {
  let books = [];
  const bookTitle = document.getElementById('book-title');
  const bookAuthor = document.getElementById('book-author');
  const addBookButton = document.getElementById('add-book-button');

  const bookStorage = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };

  const displayBooks = () => {
    const booksLocalStorage = JSON.parse(localStorage.getItem('books'));
    books = booksLocalStorage;
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
        const bookIndex = e.target.id;
        books.splice(bookIndex, 1);
        bookStorage(books);
        displayBooks();
      });
    });
  };

  const addBook = (title, author) => {
    const newBook = {
      title,
      author,
    };

    if (bookTitle.value === '' || bookAuthor.value === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter a title and author');
      return;
    }
    books.push(newBook);
    bookStorage(books);
    bookTitle.value = '';
    bookAuthor.value = '';
    displayBooks();
  };

  addBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBook(bookTitle.value, bookAuthor.value);
    displayBooks();
  });

  displayBooks();
};
