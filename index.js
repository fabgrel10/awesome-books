let books = [{title: "book 1", author: "author 1"},{title: "book 2", author: "author 2"}]
console.log(books);

const addBook = () => {
    let title = document.getElementById('enterTitle').value;
    let author = document.getElementById('enterAuthor').value;
    books.push({title, author});
    console.log(books);
}

const removeBook = (e) => {
    let event = e.target;
    books.filter
}

//addBook();
