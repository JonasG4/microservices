const express = require("express");
const router = express.Router();
const { CountriesModel } = require("../../model");

const model = new CountriesModel();

const logger = (message) => console.log(`Countries Service: ${message}`);

router.get("/", (req, res) => {
  const countries = model.getAllCountries();
  const response = {
    service: "countries",
    architecture: "microservices",
    length: countries.length,
    data: countries,
  };
  logger("Get all countries data");
  return res.json(response);
});

router.get("/capital/:name", async (req, res) => {
  const country = model.getCountryByCapital(req.params.name);

  // Si capital no existe, arroja un not found
  if (!country) {
    const response = {
      service: "countries",
      architecture: "microservices",
      status: "404 not found",
      msg: `La capital ${req.params.name} no existe`,
    };
    logger(`Capital ${req.params.name} not exist`);
    return res.status(404).send(response);
  }

  const authors = await model.getAuthorsByCountry(country.name);
  //Un array con solo os nombres de los autores
  const authorsNames = authors.map((author) => {
    return author.author;
  });

  const books = await model.getBooksByCountry(country.name);
  //se obtienen un array de titulos de libros
  const booksTitles = books.map((book) => {
    return book.title;
  });

  const response = {
    service: "countries",
    architecture: "microservices",
    data: {
      country: country.name,
      authors: authorsNames,
      books: booksTitles,
    },
  };

  logger("Get country data by capital");
  return res.send(response);
});

router.get("/language/:code", (req, res) => {
  const countries = model.getCountriesByLanguageCode(req.params.code);
  const response = {
    service: "countries",
    architecture: "microservices",
    length: countries.length,
    data: countries,
  };

  logger("Get country data by capital");
  return res.send(response);
});

module.exports = router;
