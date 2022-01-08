const env = process.env.NODE_ENV || "development";
const configs = require("./knexfile")[env];
const knex = require("knex");
const connection = knex(configs);

module.exports = connection;
