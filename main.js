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

function addBookToLibrary() {
  const title = prompt('title');
  const author = prompt('author');
  const pages = Number(prompt('number of pages'));
  const read = Boolean(prompt('have you read it?'));

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function fillBookshelf() {
  const bookshelf = document.querySelector('.bookshelf');

  myLibrary.forEach((book) => {
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
    if (book.read === true) {
      readNode.textContent = 'You have read this book';
    } else {
      readNode.textContent = "You haven't read this book";
    }
    bookNode.appendChild(readNode);

    bookshelf.appendChild(bookNode);
  });
}

createDummyBooks();
fillBookshelf();
