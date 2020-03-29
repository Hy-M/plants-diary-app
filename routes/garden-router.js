const gardenRouter = require("express").Router();
const {
  getGarden,
  postToGarden,
  deleteFromGarden,
  updatePlant
} = require("../controllers/garden-controller");

gardenRouter
  .route("/")
  .get(getGarden)
  .post(postToGarden)
  .delete(deleteFromGarden);

gardenRouter.route("/:plant_id").patch(updatePlant);

module.exports = gardenRouter;
