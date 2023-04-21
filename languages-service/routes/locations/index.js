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

  logger("Get languages data");
  res.send(response);
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

  logger("Get languages by code");
  res.send(response);
});

router.get("/language/:name", async (req, res) => {
  const language = await model.getLanguageByName(req.params.name);

  // Si capital no existe, arroja un not found
  if (!language) {
    const response = {
      service: "languages",
      architecture: "microservices",
      status: "404 not found",
      msg: `El lenguaje ${req.params.name} no existe`,
    };
    logger(`Language ${req.params.name} not exist`);
    return res.status(404).send(response);
  }

  const countries = await model.getCountriesByLanguageCode(language.code);
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
      languageCode: language.code,
      countries: countriesName,
      authors: authors,
      books: books,
    },
  };

  logger("Get languages by name");
  res.send(response);
});

module.exports = router;
