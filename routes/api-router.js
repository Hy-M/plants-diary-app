const apiRouter = require("express").Router();
const gardenRouter = require("./garden-router");
const wishlistRouter = require("./wishlist-router");
const { getEndpoints } = require("../controllers/endpoints-controller");

apiRouter.get("/", getEndpoints);
apiRouter.use("/garden", gardenRouter);
apiRouter.use("/wishlist", wishlistRouter);

module.exports = apiRouter;
