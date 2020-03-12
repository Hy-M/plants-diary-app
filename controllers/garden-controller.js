const { fetchGarden } = require("../models/garden-model");

exports.getGarden = (req, res, next) => {
  console.log("in garden control");

  fetchGarden()
    .then(garden => {
      console.log(garden);

      res.status(200).send({ garden });
    })
    .catch(err => console.log(err));
};
