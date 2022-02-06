let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.cu32mb5se71zngf9,
    process.env.htsrboqpoz4ii1li,
    process.env.swsbg2gyizk8evzu,
    {
      host: "ble5mmo2o5v9oouq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect: "mysql",
      port: 3306,
    }
  );
}
