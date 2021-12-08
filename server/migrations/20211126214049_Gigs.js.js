exports.up = function (knex) {
  return knex.schema.createTable("gigs", function (table) {
    table.increments("id");
    table.integer("userID").unsigned().notNullable();
    table.string("gigName").notNullable();
    table.string("description").notNullable();
    table.string("category").notNullable();
    table.string("venue").notNullable();
    table.string("address").notNullable();
    table.string("date").notNullable();
    table.string("time").notNullable();
    table
      .foreign("userID")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {};
