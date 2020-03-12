const knex = require("../db/connection");

exports.fetchWishlist = ({ plant_id }) => {
  if (plant_id) {
    return knex
      .select("*")
      .from("wishlist")
      .where("plant_id", plant_id);
  } else {
    return knex.select("*").from("wishlist");
  }
};

exports.addToWishlist = plant => {
  return knex
    .insert(plant)
    .into("wishlist")
    .returning("*");
};

exports.removeFromWishlist = ({ plant_id }) => {
  return knex
    .delete("*")
    .from("wishlist")
    .where("plant_id", plant_id);
};
