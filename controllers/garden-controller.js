const { fetchGarden } = require('../models/garden-model');

exports.getGarden = (req, res, next) => {
    fetchGarden()
    .then((garden) => {
        res.status(200).send({ garden });
    })
    .catch(err => console.log(err))
};