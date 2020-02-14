
exports.up = function(knex) {
  return knex.schema.createTable('wishlist', (wishlistTable) => {
      wishlistTable.increments('plant_id').primary();
      wishlistTable.string('name').notNullable();
      wishlistTable.string('image_url');
      wishlistTable.boolean('is_growing').defaultTo(false);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('wishlist');
};
