const express = require("express");
const router = express.Router();
const { AuthorModel } = require("../../models/");

//Inicializar constructor
const model = new AuthorModel();

// Creamos una función logger que muestra un mensaje en consola
const logger = (message) => console.log(`Authors Service: ${message}`);

router.get("/", (req, res) => {
  const authors = model.getAllAuthors();

  const response = {
    service: "authors",
    architecture: "microservices",
    data: authors,
  };
  logger("Get all authors data");
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const author = model.getAuthorById(req.params.id);
  const books = await model.getBooksByAuthorId(req.params.id);

  const response = {
    service: "authors",
    architecture: "microservices",
    data: { ...author, books },
  };

  logger("Get author data by Id ");
  return res.send(response);
});

router.get("/author/:name", async (req, res) => {
  const author = model.getAuthorByName(req.params.name);
  const books = await model.getBooksByAuthorId(author.id);

  const response = {
    service: "authors",
    architecture: "microservices",
    data: { ...author, books },
  };

  logger("Get author data by name");
  return res.send(response);
});

router.get("/country/:name", (req, res) => {
  const authors = model.getAuthorsByCountry(req.params.name);

  const response = {
    service: "authors",
    architecture: "microservices",
    length: authors.length,
    data: authors,
  };

  logger("Get author data by country");
  return res.send(response);
});

module.exports = router;
