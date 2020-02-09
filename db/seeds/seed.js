const {
    gardenData,
    wishlistData
  } = require('../data/index');

const { formatDates } = require('../utils/utils');

  exports.seed = function(knex) {
    return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const formattedDatesGardenData = formatDates(gardenData);
      return knex('garden').insert(formattedDatesGardenData);
    })
    .then(() => {
      return knex('wishlist').insert(wishlistData);
    })
  };

