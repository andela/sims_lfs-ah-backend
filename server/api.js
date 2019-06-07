const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const profiles = require('./routes/users');

sequelize.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use('/api/profiles', profiles);

module.exports = app;
