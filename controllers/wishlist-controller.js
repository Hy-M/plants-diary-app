const { fetchWishlist, addToWishlist, removeFromWishlist } = require("../models/wishlist-model");

exports.getWishlist = (req, res, next) => {
  fetchWishlist(req.body)
    .then(wishlist => {
      res.status(200).send({ wishlist });
    })
    .catch(err => console.log(err));
};

exports.postToWishlist = (req, res, next) => {
  addToWishlist(req.body)
    .then(plant => {
      res.status(201).send({ plant });
    })
    .catch(err => console.log(err));
};

exports.deleteFromWishlist = (req, res, next) => {
  removeFromWishlist(req.body)
    .then(() => {
      res.status(200).send({ msg: "Plant deleted" });
    })
    .catch(err => console.log(err));
};
