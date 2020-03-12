const wishlistRouter = require("express").Router();
const { getWishlist } = require("../controllers/wishlist-controller");

wishlistRouter.route("/").get(getWishlist);

module.exports = wishlistRouter;
