/* eslint-disable no-alert */
/* eslint-disable no-console */

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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

function putBookOnShelf(book) {
  // Make a new div 'book' and fill it with the book's information
  const bookNode = document.createElement('div');
  bookNode.classList.add('book');

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
  if (book.read === 'true' || book.read === true) {
    readNode.textContent = 'You have read this book';
  } else {
    readNode.textContent = "You haven't read this book";
  }
  bookNode.appendChild(readNode);

  const bookshelf = document.querySelector('.bookshelf');
  bookshelf.appendChild(bookNode);
}

// eslint-disable-next-line no-unused-vars
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  putBookOnShelf(myLibrary.at(-1));

  window.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

function fillBookshelf() {
  myLibrary.forEach((book) => putBookOnShelf(book));
}

// Start the application
createDummyBooks();
fillBookshelf();
