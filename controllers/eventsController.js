const db = require("../models");
var NodeGeocoder = require("node-geocoder");

var options = {
	provider: 'locationiq',
	apiKey: '86fe54efc4ddac'
};

var geocoder = NodeGeocoder(options);

let latLong = { latitude: 0, longitude: 0 };

geoConvert = (eventAddress) => geocoder.geocode(eventAddress)
	.then(function (res) {
		// console.log(res[0].latitude);
		// console.log(res[0].longitude);
		lat = res[0].latitude
		long = res[0].longitude
		latLong.latitude = lat;
		latLong.longitude = long;
		return latLong;
	}
	)
	.catch(function (err) {
		console.log(err)
	})



// Defining methods for the eventsController
module.exports = {

	// FIND ALL EVENTS FOR DISPLAYING ON MAP
	findAllEvents: function (req, res) {
		db.Events
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// FIND ONE EVENT TO DISPLAY DETAILS
	findEventById: function (req, res) {
		db.Events
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	Invitation: function (req, res) {
		db.Users
			.find({
				'username': { $in: req.body.people }
			})
			.then(users => {

			})
	},

	// CREATE AN EVENT AND ADD TO DB
	createEvent: function (req, res) {
		let reqCopy = req.body;
		let reqAddress = req.body.location
		geoConvert(reqAddress)
		setTimeout(function () {
			reqCopy = Object.assign({}, reqCopy, latLong)
			db.Events
				.create(reqCopy)
				.then(resDocument => {
					console.log(resDocument)
					db.Users
						.updateMany(
							{ username: { $in: req.body.people } },
							{ $push: { scores: resDocument._id } }
						)
				})
				// res.json(dbModel)
				.catch(err => res.status(422).json(err));
		}, 1000)
	},

	// EDIT EVENT
	updateEvent: function (req, res) {
		db.Events
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// DELETE EVENT
	removeEvent: function (req, res) {
		db.Events
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
