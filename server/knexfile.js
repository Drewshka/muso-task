// Update with your config settings.

module.exports = {
  //* HEROKU Development
  development: {
    client: "mysql",
    connection: {
      // filename: "./dev.sqlite3",
      port: "3306",
      user: "root",
      password: "rootroot",
      database: "musicians",
      host: "127.0.0.1",
      charset: "utf8",
    },
  },
  //* HEROKU
  production: {
    client: "mysql",
    connection: process.env.JAWSDB_URL,
  },
};

// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// module.exports = {
//   //* HEROKU Development
//   development: {
//     client: "mysql",
//     connection: {
//       // filename: "./dev.sqlite3",
//       port: "3306",
//       user: "root",
//       password: "rootroot",
//       database: "musicians",
//       host: "127.0.0.1",
//       charset: "utf8",
//     },
//   },
//   //* HEROKU
//   production: {
//     client: "mysql",
//     // connection: process.env.JAWSDB_URL,
//     connection: new Sequelize(process.env.JAWSDB_URL),
//   },
// };

// if (process.env.JAWSDB_URL) {
//   sequelize = new sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PW,
//     {
//       host: "ble5mmo2o5v9oouq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }
