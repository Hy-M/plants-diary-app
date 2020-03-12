const { fetchGarden, addToGarden } = require("../models/garden-model");

exports.getGarden = (req, res, next) => {
  fetchGarden()
    .then(garden => {
      console.log(garden);

      res.status(200).send({ garden });
    })
    .catch(err => console.log(err));
};

exports.postToGarden = (req, res, next) => {
  addToGarden(req.body).then(plant => {
    res.status(201).send({ plant });
  });
};
