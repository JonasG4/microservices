const getData = require("./../src/utils/parseCsv2Json");
const axios = require("axios");

class LanguagesModel {
  constructor() {
    this.data = getData();
  }

  async getAllLanguages() {
    return await this.data;
  }

  async getLanguageByCode(languageCode) {
    const languagesResponse = await this.data;

    const language = languagesResponse.filter((language) => {
      return language.code === languageCode;
    });

    return language[0];
  }

  async getLanguageByName(languageName) {
    const languageResponse = await this.data;

    const language = languageResponse.filter((language) => {
      return language.languages.includes(languageName);
    });

    return language[0];
  }

  async getCountriesByLanguageCode(code) {
    const countriesResponse = await axios.get(
      `http://countries:5000/api/v2/countries/language/${code}`
    );
    const countries = await countriesResponse.data.data;
    return countries;
  }

  async getAuthorsByCountry(countryName) {
    const authorsResponse = await axios.get(
      `http://authors:3000/api/v2/authors/country/${countryName}`
    );
    const authors = await authorsResponse.data.data;
    return authors;
  }

  async getBooksByCountry(countryName) {
    const booksResponse = await axios.get(
      `http://books:4000/api/v2/books/country/${countryName}`
    );
    const books = await booksResponse.data.data;
    return books;
  }
}

module.exports = LanguagesModel;
