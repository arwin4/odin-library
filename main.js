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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
myLibrary.push(theHobbit);

function addBookToLibrary() {
  const title = prompt('title');
  const author = prompt('author');
  const pages = Number(prompt('number of pages'));
  const read = Boolean(prompt('have you read it?'));

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
