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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
myLibrary.push(theHobbit);

const lifeAndTimes = new Book(
  'The Life and Times of Scrooge McDuck',
  'Keno Don Rosa',
  266,
  true
);
myLibrary.push(lifeAndTimes);

const onlyAPoorOldMan = new Book('Only a Poor Old Man', 'Carl Barks', 32, true);
myLibrary.push(onlyAPoorOldMan);

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
    bookshelf.appendChild(bookNode);
  });
}

fillBookshelf();
