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
  logger("Get countries data");
  return res.json(response);
});

router.get("/capital/:name", async (req, res) => {
  // Convertir el objeto en array y filtrar por capital
  const country = model.getCountryByCapital(req.params.name);

  // Si capital no existe, arroja un not found
  if (!country) {
    const response = {
      service: "countries",
      architecture: "microservices",
      status: "404 not found",
      msg: `La capital ${req.params.name} no existe`,
    };
    return res.status(404).send(response);
  }

  //Se obtienen los autores por el pais
  const authors = await model.getAuthorsByCountry(country.name);

  //Un array con solo os nombres de los autores
  const authorsNames = authors.map((author) => {
    return author.author;
  });

  //Se obtienen los libros por el pais de distribucion
  const books = await model.getBooksByCountry(country.name);

  //se obtienen un array de titulos de libros
  const booksTitles = books.map((book) => {
    return book.title;
  });

  const response = {
    service: "countries",
    architecture: "microservices",
    data: {
      country: countryName,
      authors: authorsNames,
      books: booksTitles,
    },
  };

  return res.send(response);
});

router.get("/languages/:code", (req, res) => {
  const countries = model.getCountriesByLanguageCode(req.params.code);

  const response = {
    service: "countries",
    architecture: "microservices",
    length: countries.length,
    data: countries,
  };

  return res.send(response);
});

module.exports = router;
