const mongoose = require("mongoose");
const db = require("../models");

// This file empties the happnen collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/happnen"
);

// const eventsSeed = [
//   {
//    
//   },
//   {
// 
//   }
// ];

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
