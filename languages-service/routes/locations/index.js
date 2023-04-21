const express = require("express");
const { LanguagesModel } = require("../../models");
const model = new LanguagesModel();
const router = express.Router();

const logger = (message) => console.log(`Languages Services: ${message}`);

router.get("/", async (req, res) => {
  const languages = await model.getAllLanguages();

  const response = {
    service: "languages",
    architecture: "microservices",
    length: languages.length,
    data: languages,
  };

  res.send(response);
  logger("Entrando a get");
});

router.get("/:code", async (req, res) => {
  const language = await model.getLanguageByCode(req.params.code);

  const countries = await model.getCountriesByLanguageCode(req.params.code);
  const countriesName = countries.map((country) => country.name);

  const authors = [];
  const books = [];

  for (let i = 0; i < countries.length; i++) {
    const authorResponse = await model.getAuthorsByCountry(countries[i].name);
    const booksResponse = await model.getBooksByCountry(countries[i].name);

    for (let j = 0; j < authorResponse.length; j++) {
      authors.push(authorResponse[j]);
    }

    for (let k = 0; k < booksResponse.length; k++) {
      books.push(booksResponse[k].title);
    }
  }

  const response = {
    service: "languages",
    architecture: "microservices",
    data: {
      language: language.languages,
      countries: countriesName,
      authors: authors,
      books: books,
    },
  };

  res.send(response);
});

module.exports = router;
