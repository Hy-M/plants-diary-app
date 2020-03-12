const { fetchGarden, addToGarden, removeFromGarden } = require("../models/garden-model");

exports.getGarden = (req, res, next) => {
  fetchGarden()
    .then(garden => {
      res.status(200).send({ garden });
    })
    .catch(err => console.log(err));
};

exports.postToGarden = (req, res, next) => {
  addToGarden(req.body)
    .then(plant => {
      res.status(201).send({ plant });
    })
    .catch(err => console.log(err));
};

exports.deleteFromGarden = (req, res, next) => {
  removeFromGarden(req.body)
    .then(() => {
      res.status(200).send({ msg: "Plant deleted" });
    })
    .catch(err => console.log(err));
};
