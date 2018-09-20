const mongoose = require("mongoose");
const db = require("../models");
const moment = require('moment')

// This file empties the happnen collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/happnen"
);

const eventsSeed = [
  {
    host: "Andy",
    eventName: "First Party",
    category: 0,
    location: "5295 Woodridge Forest Trail, Atlanta, GA 30327",
    latitude: 33.89988,
    longitude: -84.420841,
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    startDate: new Date("2018-09-21T14:00:00.000Z"),
    endDate: new Date("2018-09-26T19:00:00.000Z"),
    eventQr: "u6T1Ru2AROV7",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "Andy's fun party!!",
    picUrl: ["https://via.placeholder.com/350x200"],
    //An afterthought, for later eventQr checking functionality via camera:
    userQrs: []

  },
  {
    host: "Brndy",
    eventName: "Second Party",
    category: 2,
    location: "1600 Pennsylvania Ave",
    latitude: 38.897675,
    longitude: -77.036547,
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    startDate: new Date("2018-09-25T20:00:00.000Z"),
    endDate: new Date("2018-09-29T20:00:00.000Z"),
    eventQr: "0RdfdV0hImtE",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "Brndy's fun party!!",
    picUrl: ["https://via.placeholder.com/300x200"],
    //An afterthought, for later eventQr checking functionality via camera:
    userQrs: []

  },
  {
    host: "Sandy",
    eventName: "Third Party",
    category: 2,
    location: "1 AMB Drive Northwest, Atlanta, GA 30313",
    latitude: 33.76,
    longitude: -84.4,
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    startDate: new Date("2018-09-26T18:00:00.000Z"),
    endDate: new Date("2018-09-26T22:00:00.000Z"),
    eventQr: "IniVqe50EgZV",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "sandy's fun party!!",
    picUrl: ["https://via.placeholder.com/300x300"],
    //An afterthought, for later eventQr checking functionality via camera:
    userQrs: []

  },
  {
    host: "Shandy",
    eventName: "second Party",
    category: 0,
    location: "84 5th St NW, Atlanta, GA 30308",
    latitude: 33.776864,
    longitude: -84.39004,
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    startDate: new Date("2018-10-02T08:00:00.000Z"),
    endDate: new Date("2018-10-04T18:00:00.000Z"),
    eventQr: "D57Y50YPBf8P",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "shandy's fun party!!",
    picUrl: ["https://via.placeholder.com/2700x300"],
    //An afterthought, for later eventQr checking functionality via camera:
    userQrs: []

  },
  {
    host: "Randy",
    eventName: "Fifh Party",
    category: 1,
    location: "77 12th Street, Atlanta, GA",
    latitude: 33.784331,
    longitude: -84.385098,
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    startDate: new Date("2018-10-31T18:00:00.000Z"),
    endDate: new Date("2018-11-01T04:00:00.000Z"),
    eventQr: "LbA4VhB2Z9Cn",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "sandy's fun party!!",
    picUrl: ["https://via.placeholder.com/300x300"],
    //An afterthought, for later eventQr checking functionality via camera:
    userQrs: []

  }
]

  db.Events
    .remove({})
    .then(() => db.Events.collection.insertMany(eventsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
