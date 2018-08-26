const db = require("../models");

// Defining methods for the usersController
module.exports = {

    // FIND ALL USERS
    findAllUsers: function(req, res) {
      db.Users
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // FIND USER BY ID
    findUserById: function(req, res) {
      db.Users
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // CREATE NEW USER
    createUser: function(req, res) {
      db.Users
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // UPDATE USER INFORMATION
    updateUser: function(req, res) {
      db.Users
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // DELETE USER ACCOUNT
    removeUser: function(req, res) {
      db.Users
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
