const { fetchWishlist } = require("../models/wishlist-model");

exports.getWishlist = (req, res, next) => {
  fetchWishlist()
    .then(wishlist => {
      res.status(200).send({ wishlist });
    })
    .catch(err => console.log(err));
};
