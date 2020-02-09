
exports.up = function(knex) {
  console.log("creating wishlist table");
  return knex.schema.createTable('wishlist', (wishlistTable) => {
      wishlistTable.increments('plant_id').primary();
      wishlistTable.string('name').notNullable();
      wishlistTable.string('image_url');
      wishlistTable.boolean('is_growing').defaultTo(false);
  })
};

exports.down = function(knex) {
    console.log("dropping wishlist table");
    return knex.schema.dropTable('wishlist');
};
