const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  //Verify this somehow? Drivers liscense scanner? Icebox's Icebox
  // Only do 21+, validate whether or not they are 18 when they join/enter the site as some sort of basic modal, also need front end logic to say whether or not they are 21 based on the birthday that they enter, and set this value accordingly:
  ofAge: { type: Boolean, default: false },


  //add eventid to this on creation, remove on delete, keep here for archived-- maybe split these properties into current and past events:
  myEvents: [{ type: Schema.Types.ObjectId, ref: 'Events' }],
  //add specific eventid to this on invitation, remove on RSVP of "no":
  invites: [{ type: Schema.Types.ObjectId, ref: 'Events' }],

  userQr: String,

});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
