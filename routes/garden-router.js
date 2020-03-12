const gardenRouter = require("express").Router();
const { getGarden, postToGarden, deleteFromGarden } = require("../controllers/garden-controller");

gardenRouter
  .route("/")
  .get(getGarden)
  .post(postToGarden)
  .delete(deleteFromGarden);

module.exports = gardenRouter;
