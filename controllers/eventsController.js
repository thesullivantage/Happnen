const db = require("../models");

// Defining methods for the eventsController
module.exports = {

    // FIND ALL EVENTS FOR DISPLAYING ON MAP
    findAllEvents: function(req, res) {
      db.Events
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // FIND ONE EVENT TO DISPLAY DETAILS
    findEventById: function(req, res) {
      db.Events
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // CREATE AN EVENT AND ADD TO DB
    createEvent: function(req, res) {
      db.Events
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        
    },

    // EDIT EVENT
    updateEvent: function(req, res) {
      db.Events
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // DELETE EVENT
    removeEvent: function(req, res) {
      db.Events
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
