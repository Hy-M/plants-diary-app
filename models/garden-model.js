const knex = require("../db/connection");

exports.fetchGarden = () => {
  return knex.select("*").from("garden");
};

exports.addToGarden = plant => {
  return knex
    .insert(plant)
    .into("garden")
    .returning("*");
};

exports.removeFromGarden = ({ plant_id }) => {
  return knex
    .delete("*")
    .from("garden")
    .where("plant_id", plant_id);
};

exports.patchPlant = ({ plant_id }, reqBody) => {
  return knex
    .update(reqBody, ["notes", "id"])
    .where("plant_id", plant_id)
    .from("garden")
    .returning("*");
};
