const gardenRouter = require("express").Router();
const { getGarden, postToGarden } = require("../controllers/garden-controller");

gardenRouter
  .route("/")
  .get(getGarden)
  .post(postToGarden);

module.exports = gardenRouter;
