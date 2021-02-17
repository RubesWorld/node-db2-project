const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  create,
};

function get() {
  return db("car-dealer");
}

function getById(id) {
  return db("car-dealer").where("id", id).first();
}

function create(data) {
  return db("car-dealer")
    .insert(data)
    .then(([id]) => {
      return db("car-dealer").where("id", id).first();
    });
}
