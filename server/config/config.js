require("dotenv").config();

module.exports = {
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "authors_haven_test",
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "authors_haven_development",
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
};
