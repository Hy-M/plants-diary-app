exports.up = function(knex) {
  return knex.schema.createTable("garden", gardenTable => {
    gardenTable.increments("plant_id").primary();
    gardenTable.string("name").notNullable();
    gardenTable.date("date_sown");
    gardenTable.date("date_planted");
    gardenTable.string("image_first");
    gardenTable.string("image_second");
    gardenTable.string("image_third");
    gardenTable.string("notes");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("garden");
};
