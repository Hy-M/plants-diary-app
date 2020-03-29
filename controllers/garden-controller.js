const {
  fetchGarden,
  addToGarden,
  removeFromGarden,
  patchPlant
} = require("../models/garden-model");

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

exports.updatePlant = (req, res, next) => {
  patchPlant(req.params, req.body)
    .then(updatedPlant => {
      res.status(200).send({ plant: updatedPlant });
    })
    .catch(err => console.log(err));
};
