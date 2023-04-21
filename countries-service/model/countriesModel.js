const { dataLibrary } = require("../data/data-library");
const axios = require("axios");

class CountriesModel {
  constructor() {
    this.data = dataLibrary.countries;
  }

  getAllCountries() {
    const countries = Object.entries(this.data).map((country) => {
      return { code: country[0], ...country[1] };
    });

    return countries;
  }

  getCountryByCapital(capitalName) {
    // Convertir objeto en un array de objeto
    const countriesArray = Object.entries(this.data).map((country) => {
      return { code: country[0], ...country[1] };
    });
    const countries = countriesArray.filter((country) => {
      return country.capital === capitalName;
    });
    return countries[0];
  }

  getCountriesByLanguageCode(code) {
    //Convertir de objeto a array de objetos
    const countriesArray = Object.entries(this.data).map((country) => {
      return { code: country[0], ...country[1] };
    });

    const countries = countriesArray.filter((country) => {
      return country.languages.includes(code);
    });

    return countries;
  }

  //Async methods
  async getAuthorsByCountry(CountryName) {
    const authorsResponse = await axios.get(
      `http://authors:3000/api/v2/authors/country/${CountryName}`
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

module.exports = CountriesModel;
