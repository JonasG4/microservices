const express = require("express"); // importa Express
const router = express.Router(); // crea un nuevo enrutador de Express
const { BooksModel } = require("../../models");

const model = new BooksModel();

const logger = (message) => console.log(`Author Services: ${message}`);

router.get("/", (req, res) => {
  const { from = 0, to = 9999 } = req.query;

  const books = model.getAllBooks(from, to);

  const response = {
    service: "books",
    architecture: "microservices",
    length: books.length,
    data: books,
  };
  logger("Get book data");
  return res.send(response);
});

router.get("/title/:title", (req, res) => {
  const books = model.getBooksByTitle(req.params.title);
  const response = {
    service: "books",
    architecture: "microservices",
    length: books.length,
    data: books,
  };
  return res.send(response);
});

router.get("/author/:id", (req, res) => {
  const books = model.getBooksByAuthorId();

  const response = {
    service: "books",
    architecture: "microservices",
    lenght: books.length,
    data: books,
  };

  return res.send(response);
});

router.get("/country/:name", (req, res) => {
  const books = model.getBooksByCountry(req.params.name);
  const response = {
    service: "books",
    architecture: "microservices",
    length: books.length,
    data: books,
  };

  return res.send(response);
});

router.get("/");

module.exports = router;
