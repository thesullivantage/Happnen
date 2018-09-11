import axios from "axios";

export default {
  //SEPARATE WITH SPACES AND COMMENTS (FOR NOW)!!!


  //BASIC LOGIN

  login: function (loginObj) {
    return axios.post("/api/users/login", loginObj)
  },

  signUp: function (suObj) {
    return axios.post("/api/users/signup", suObj)
  },


  // EVENT CREATION

  createEvent: function (eventObj) {
    return axios.post("api/events/create", eventObj)
  },

  autofillusers: function () {
    return axios.post("api/users/autofill")
  },

// Do this on backend (controller)
//   findAndInvite: function (inviteObj) {
// 	return axios.post("api/events/invite", inviteObj)
//   },


  // PROFILE
  updateProfile: function (updateObj) {
    return axios.post("/api/users/update", updateObj)
  },

  populateProfile: function (userObj) {
    return axios.post("/api/users/populatedata", userObj)
  },

  inviteAccept: function () {
    return axios.post("/api/events/yes")
  },

  inviteDeny: function () {
    return axios.post("/api/events/no")
  },

  // inviteCheck: function () {
  //   return axios.post("/api/users/", userObj)
  // },

  // MAP HELPERS

  getEventLocations: function () {
    return axios.get("/api/events")
  },

  getDailyLocations: function () {
    return axios.get("/api/events/daily")
  },

  getWeeklyLocations: function () {
    return axios.get("/api/events/weekly")
  },

  getMonthlyLocations: function () {
    return axios.get("/api/events/monthly")
  },

  // currently not used:
  // deleteExpiredEvents: function () {
  //   return axios.get("/api/events")
  // },

  // CLOUDINARY HELPERS

  savePhoto: function () {
    return axios.get("/api/cloudinary")
  }


  // REF: 

  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
