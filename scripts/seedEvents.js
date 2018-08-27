const mongoose = require("mongoose");
const db = require("../models");

// This file empties the happnen collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/happnen"
);

const eventsSeed = [
  {
    host: "Andy",
    title: "First Party",
    category: 0,
    location: "5295 Woodridge Forest Trail, Atlanta, GA 30327",
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    datetimeStart: 1535803200,
    datetimeEnd: 1535824800,
    qr: "u6T1Ru2AROV7",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "Andy's fun party!!",
    img: ["https://via.placeholder.com/350x200"],
    //An afterthought, for later qr checking functionality via camera:
    userQrs: []

  },
  {
    host: "Brndy",
    title: "Second Party",
    category: 2,
    location: "1600 Pennsylvania Ave",
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    datetimeStart: 1535472000,
    datetimeEnd: 1535490000,
    qr: "0RdfdV0hImtE",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "Brndy's fun party!!",
    img: ["https://via.placeholder.com/300x200"],
    //An afterthought, for later qr checking functionality via camera:
    userQrs: []

  },
  {
    host: "Sandy",
    title: "Third Party",
    category: 3,
    location: "1 AMB Drive Northwest, Atlanta, GA 30313",
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    datetimeStart: 1535536800,
    datetimeEnd: 1567126800,
    qr: "IniVqe50EgZV",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "sandy's fun party!!",
    img: ["https://via.placeholder.com/300x300"],
    //An afterthought, for later qr checking functionality via camera:
    userQrs: []

  },
  {
    host: "Shandy",
    title: "second Party",
    category: 0,
    location: "84 5th St NW, Atlanta, GA 30308",
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    datetimeStart: 1567342800,
    datetimeEnd: 1567476000,
    qr: "D57Y50YPBf8P",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "shandy's fun party!!",
    img: ["https://via.placeholder.com/2700x300"],
    //An afterthought, for later qr checking functionality via camera:
    userQrs: []

  },
  {
    host: "Randy",
    title: "Fifh Party",
    category: 1,
    location: "77 12th Street",
    //Maybe use unix epoch format with a js library to convert to date and time (separate)
    //Also, combined date and time just based on the format; will concat when making the call
    datetimeStart: 1535536800,
    datetimeEnd: 1567126800,
    qr: "LbA4VhB2Z9Cn",
    //add id's here upon invitation by event creator:
    invited: [],
    //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
    //add id's here upon user RSVP
    attending: [],
    description: "sandy's fun party!!",
    img: ["https://via.placeholder.com/300x300"],
    //An afterthought, for later qr checking functionality via camera:
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
