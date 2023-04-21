const express = require("express");
const router = express.Router();
const { AuthorModel } = require("../../models/");

//Inicializar constructor
const model = new AuthorModel();

// Creamos una función logger que muestra un mensaje en consola
const logger = (message) => console.log(`Authors Service: ${message}`);

// Creamos la ruta para obtener todos los autores
router.get("/", (req, res) => {
  const authors = model.getAllAuthors();

  // Creamos un objeto de respuesta con los datos de los autores
  const response = {
    service: "authors",
    architecture: "microservices",
    data: authors,
  };

  // Enviamos la respuesta
  return res.send(response);
});

// Creamos la ruta para obtener un autor por su id
router.get("/:id", async (req, res) => {
  // Filtramos los autores cuyo id coincide con el que se envía en la petición
  const author = model.getAuthorById(req.params.id);

  // Hacemos una petiticon a la API books para obtener los libros por autor
  const books = await model.getBooksByAuthorId(req.params.id);

  const response = {
    service: "authors",
    architecture: "microservices",
    data: { ...author, books },
  };

  return res.send(response);
});

// Creamos la ruta para obtener autores por su nombre
router.get("/author/:name", async (req, res) => {
  // Filtramos los autores cuyo nombre coincide con el que se envía en la petición
  const author = model.getAuthorByName(req.params.name);

  const books = await model.getBooksByAuthorId(author.id);

  const response = {
    service: "authors",
    architecture: "microservices",
    data: { ...author, books },
  };

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
  return res.send(response);
});

module.exports = router;
