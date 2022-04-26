const express = require("express");
const { resolve, join } = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  "/index",
  express.static(join(resolve(), "src", "public", "index.html"))
);

module.exports = app;
