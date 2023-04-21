const express = require("express");

const locations = require("../routes/locations");

const app = express();

app.use("/api/v2/languages", locations);


module.exports = app;