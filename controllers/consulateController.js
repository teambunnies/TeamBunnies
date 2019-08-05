const db = require("../models/Consulates");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Consulate
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Consulate
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}