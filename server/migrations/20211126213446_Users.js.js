exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("country").notNullable();
    table.string("phone").notNullable();
    table.string("email").notNullable();
    table.string("instrument").notNullable();
    table.string("bio").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("gigs").dropTable("users");
};
