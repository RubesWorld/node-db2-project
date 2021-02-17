//create table
exports.up = function (knex) {
  return knex.schema.createTable("car-dealer", (table) => {
    table.increments(); //builds primary key
    table.text("make").notNullable();
    table.text("model").notNullable();
    table.integer("VIN #").unique().notNullable();
    table.integer("mileage").notNullable();
    table.text("transmission");
    table.text("Title Status");
  });
};

//drop table
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("car-dealer");
};
