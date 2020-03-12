const gardenRouter = require("express").Router();
const { getGarden } = require("../controllers/garden-controller");

gardenRouter.route("/").get(getGarden);

module.exports = gardenRouter;
