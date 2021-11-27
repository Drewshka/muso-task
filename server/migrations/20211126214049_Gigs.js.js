exports.up = function (knex) {
  return knex.schema.createTable("gigs", function (table) {
    table.increments("id");
    table.integer("userID").unsigned().notNullable();
    // table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("gigName");
    table.string("description");
    table
      .foreign("userID")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    // "category": "Performance",
    // "status": "Open",
    // "venue": "The Rex",
    // "address": "459 Queen St. West, Toronto, ON",
    // "date": "01/01/2021",
    // "time": "7:00pm"
  });
};

exports.down = function (knex) {};
