const express = require("express");
const profiles = require("./routes/users");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");

sequelize.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use("/api/profiles", profiles);

module.exports = app;
