const { dataLibrary } = require("../data/data-library");
const axios = require("axios");

class AuthorModel {
  constructor() {
    this.data = dataLibrary.authors;
  }

  getAllAuthors() {
    return this.data;
  }

  getAuthorById(authorId) {
    const author = this.data.filter((author) => {
      return author.id == authorId;
    });

    return author;
  }

  getAuthorByName(authorName) {
    const author = this.data.filter((author) => {
      return author.author.includes(authorName);
    });
    return author[0];
  }

  getAuthorsByCountry(countryName) {
    const authors = this.data.filter((author) => {
      return author.country.includes(countryName);
    });

    return authors;
  }

  // Async methods
  async getBooksByAuthorId(authorId) {
    const booksResponse = await axios.get(
      `http://books:4000/api/v2/books/author/1`
    );
    const books = await booksResponse.data.data;
    return books;
  }
}

module.exports = AuthorModel;
