const knex = require("../db/connection");

exports.fetchGarden = () => {
    return knex
    .select("*")
    .from('garden')
}