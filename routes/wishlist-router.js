const wishlistRouter = require("express").Router();
const {
  getWishlist,
  postToWishlist,
  deleteFromWishlist
} = require("../controllers/wishlist-controller");

wishlistRouter
  .route("/")
  .get(getWishlist)
  .post(postToWishlist)
  .delete(deleteFromWishlist);

module.exports = wishlistRouter;
