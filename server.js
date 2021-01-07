const express = require("express");
// add routes for api and html
const htmlRoutes = require();
const apiRoutes = require();

const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());