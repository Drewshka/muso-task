exports.up = function (knex) {
  return knex.schema.createTable("gigs", function (table) {
    // table.string("name").notNullable();
    table.increments("id");
    table.integer("userID").unsigned().notNullable();
    table.string("gigName").notNullable();
    table.string("description").notNullable();
    table.string("category").notNullable();
    // table.string("status");
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
    // "category": "Performance",
    // "status": "Open",
    // "venue": "The Rex",
    // "address": "459 Queen St. West, Toronto, ON",
    // "date": "01/01/2021",
    // "time": "7:00pm"
  });
};

exports.down = function (knex) {};
