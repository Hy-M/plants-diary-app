const knex = require("../db/connection");

exports.fetchWishlist = () => {
  return knex.select("*").from("wishlist");
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
