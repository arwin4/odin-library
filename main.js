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

function displayReadStatus(book, bookNode) {
  // Add a node displaying the read status or change it if it already exists
  let readNode;
  if (bookNode.querySelector('.read')) {
    readNode = bookNode.querySelector('.read');
  } else {
    readNode = document.createElement('p');
    readNode.classList.add('read');
  }

  if (book.read === true) {
    readNode.textContent = 'You have read this book';
  } else {
    readNode.textContent = "You haven't read this book";
  }

  const pagesNode = bookNode.querySelector('.pages');
  pagesNode.appendChild(readNode);
}

Book.prototype.toggleRead = function ToggleRead(bookNode) {
  this.read = !this.read;
  displayReadStatus(this, bookNode);
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

function deleteBook(book, bookNode) {
  bookNode.remove();
  const index = myLibrary.findIndex((item) => item.number === book.number);
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

  displayReadStatus(book, bookNode);
  const toggleReadButton = document.createElement('button');
  toggleReadButton.classList.add('read-button');
  toggleReadButton.textContent = 'Toggle read status';
  toggleReadButton.addEventListener('click', () => book.toggleRead(bookNode));
  bookNode.appendChild(toggleReadButton);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-book');
  deleteButton.textContent = 'Delete book';
  deleteButton.addEventListener('click', () => deleteBook(book, bookNode));
  bookNode.appendChild(deleteButton);

  const bookshelf = document.querySelector('.bookshelf');
  bookshelf.appendChild(bookNode);

  bookNumber += 1;
}

function fillBookshelf() {
  createDummyBooks();
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
fillBookshelf();
handleNewBookSubmit();
