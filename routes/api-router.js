const apiRouter = require('express').Router();
const gardenRouter = require('./garden-router');

apiRouter.use('/garden', gardenRouter);

module.exports = apiRouter;