const express = require("express"); 
const router = express.Router(); 
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
  logger("Get all book data");
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

  logger("Get book data by title");
  return res.send(response);
});

router.get("/author/:id", (req, res) => {
  const books = model.getBooksByAuthorId(req.params.id);

  const response = {
    service: "books",
    architecture: "microservices",
    lenght: books.length,
    data: books,
  };

  logger("Get books data by author id");
  return res.send(response);
});

router.get("/author-name/:name", async (req, res) => {
  const author = await model.getAuthorByName(req.params.name);

  console.log(author);
  const books = model.getBooksByAuthorId(author.id)


  const response = {
    service: "books",
    architecture: "microservices",
    lenght: books.length,
    data: books,
  };

  logger("Get books data by author name");
  return res.send(response);
})

router.get("/country/:name", (req, res) => {
  const books = model.getBooksByCountry(req.params.name);
  const response = {
    service: "books",
    architecture: "microservices",
    length: books.length,
    data: books,
  };

  logger("Get book data by country");
  return res.send(response);
});

module.exports = router;
