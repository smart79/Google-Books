// front end api calls to database and google books API

import axios from "axios";
const queryURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

  // call to google books API
  searchBooks: function(searchTerm) {
    return axios.get(queryURL+searchTerm);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
