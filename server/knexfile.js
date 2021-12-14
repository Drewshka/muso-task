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
