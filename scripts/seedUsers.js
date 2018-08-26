const mongoose = require("mongoose");
const db = require("../models");

// This file empties the happnen collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/happnen"
);

// const usersSeed = [
//   {
//    
//   },
//   {
// 
//   }
// ];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
