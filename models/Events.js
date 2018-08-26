const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  host: { type: String, required: true },
  title: { type: String, required: true },
  category: { 
    type: Number,
    get: v => Math.round(v),
    set: v => Math.round(v),
    min: 0,
    max: 3,
    required: true },
  location: { type: String, required: true },
  //Maybe use unix epoch format with a js library to convert to date and time (separate)
  //Also, combined date and time just based on the format; will concat when making the call
  datetimeStart: { type: Date, default: Date.now },
  datetimeEnd: { type: Date, default: (Date.now + 3600000) },
  qr: { type: String, required: false },
  //add id's here upon invitation by event creator:
  invited: [ { type: Schema.Types.ObjectId, ref: 'Users' } ],
  //probably disable inviting guests under 21 when we render the suggestions to invite guests, and if it is based on an "on submit" type of deal where they type in the user name, we could add in some error handling to let them know that the person is under 21
  //add id's here upon user RSVP
  attending: [ { type: Schema.Types.ObjectId, ref: 'Users' } ],
  description: { type: String, required: false },
  img: [{type: String}],
    //An afterthought, for later qr checking functionality via camera:
  userQrs: [{ type: Schema.Types.ObjectId, ref: "Users" }]
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
