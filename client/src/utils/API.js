import axios from "axios";

export default {
  //SEPARATE WITH SPACES AND COMMENTS (FOR NOW)!!!

  //BASIC LOGIN

  login: function(loginObj) {
    return axios.post("/api/users", loginObj)
  },

  signUp: function (suObj) {
    return axios.post("/api/users", suObj)
  },

 


  
  populateProfile: function () {
    return axios.post("/api/users/populatedata")
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
