/* eslint-disable no-param-reassign */

const myLibrary = [];
let bookNumber = 0;

function Book(title, author, pages, read, number) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.number = number;
}

Book.prototype.info = function BookInfo() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function createDummyBooks() {
  // Create some example books to fill the bookshelf
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

  const lifeAndTimes = new Book(
    'The Life and Times of Scrooge McDuck',
    'Keno Don Rosa',
    266,
    true
  );

  const onlyAPoorOldMan = new Book(
    'Only a Poor Old Man',
    'Carl Barks',
    32,
    true
  );

  myLibrary.push(lifeAndTimes);
  myLibrary.push(onlyAPoorOldMan);
  myLibrary.push(theHobbit);
}

function deleteBook(bookNode) {
  bookNode.remove();
  const currentNumber = parseFloat(bookNode.getAttribute('number'));
  const index = myLibrary.findIndex((book) => book.number === currentNumber);
  myLibrary.splice(index, 1);
}

function putBookOnShelf(book) {
  // Make a new div 'book' and fill it with the book's information
  const bookNode = document.createElement('div');
  bookNode.classList.add('book');
  bookNode.setAttribute('number', bookNumber);

  const titleNode = document.createElement('h3');
  titleNode.classList.add('book-title');
  titleNode.textContent = book.title;
  bookNode.appendChild(titleNode);

  const authorNode = document.createElement('p');
  authorNode.classList.add('author');
  authorNode.textContent = book.author;
  bookNode.appendChild(authorNode);

  const pagesNode = document.createElement('p');
  pagesNode.classList.add('pages');
  pagesNode.textContent = book.pages;
  bookNode.appendChild(pagesNode);

  const readNode = document.createElement('p');
  readNode.classList.add('read');
  if (book.read === true) {
    readNode.textContent = 'You have read this book';
  } else {
    readNode.textContent = "You haven't read this book";
  }
  bookNode.appendChild(readNode);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-book');
  deleteButton.textContent = 'Delete book';
  deleteButton.addEventListener('click', () => deleteBook(bookNode));
  bookNode.appendChild(deleteButton);

  const bookshelf = document.querySelector('.bookshelf');
  bookshelf.appendChild(bookNode);

  bookNumber += 1;
}

function fillBookshelf() {
  myLibrary.forEach((book) => {
    book.number = bookNumber;
    putBookOnShelf(book);
  });
}

function handleNewBookSubmit() {
  const form = document.getElementById('new-book');
  form.addEventListener('submit', (e) => {
    // Prevent page change
    e.preventDefault();

    const book = new Book(
      form.title.value,
      form.author.value,
      form.pages.value,
      form.read.value === 'true', // convert string to boolean
      bookNumber
    );
    myLibrary.push(book);
    putBookOnShelf(myLibrary.at(-1));
  });
}

// Start the application
createDummyBooks();
fillBookshelf();
handleNewBookSubmit();
