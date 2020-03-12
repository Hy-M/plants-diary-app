const knex = require("../db/connection");

exports.fetchWishlist = () => {
  return knex.select("*").from("wishlist");
};
