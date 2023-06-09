const { dataLibrary } = require("../data/data-library");
const axios = require("axios");

class BookModel {
  constructor() {
    this.data = dataLibrary.books;
  }
  getAllBooks(from = 0, to = 9999) {
    const books = this.data.filter((book) => {
      return book.year >= from && book.year <= to;
    });
    return books;
  }
  getBooksByTitle(bookTitle) {
    const books = this.data.filter((title) => {
      return title.title.includes(bookTitle);
    });
    return books;
  }
  getBooksByAuthorId(authorId) {
    const books = this.data.filter((book) => {
      return book.authorid == authorId;
    });
    return books;
  }

  async getAuthorByName(authorName) {
    const authorsResponse = await axios.get(
      `http://authors:3000/api/v2/authors/author/${authorName}`
    );
    const author = await authorsResponse.data.data;
    return author;
  }

  getBooksByCountry(countryName) {
    const books = this.data.filter((book) => {
      return book.distributedCountries.includes(countryName);
    });
    return books;
  }
}

module.exports = BookModel;
