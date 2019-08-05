const User = require("../models/User");

    
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    User
    .findAll({})
    .then(function(results) {
      res.json(results);
    });
  },
  findById: function(req, res) {
    User
      .findAll({
        where: {
          email: req.body.email,
        password: req.body.password,
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        originCountry: req.body.originCountry
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ userId: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    User
      .destroy({ 
        where: {userId: req.params.id
        } 
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
