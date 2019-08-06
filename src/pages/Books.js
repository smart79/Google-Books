import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookInfo from "../components/BookInfo";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";

class Books extends Component {
  state = {
    books: [],
    search: "",
  };

  // searches the GoogleBooks API storing the data in books array
  searchBooks = searchTerm => {
    API.searchBooks(searchTerm)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
          },
          console.log(res.data.items[3].volumeInfo.imageLinks.thumbnail),
          console.log(res.data.items[3].selfLink)
        )
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // saves book to database
  handleSaveBook = bookData => {
    API.saveBook(bookData)
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Card>
              <h1><strong>(React) Google Books Search</strong></h1>
              <p>Search for and Save Books of Interest</p>
            </Card>

          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>

          </Col>
        </Row>

        {/* SEARCH RESULTS */}
        <Row>
          <Col size="md-12">
            <Card>
              <h1>Search Results</h1>
            </Card>
            {this.state.books.length ? (
              <Card>
                {this.state.books.map(book => (
                  <BookInfo
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "N/A"}
                    src={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                    description={book.volumeInfo.description}

                    handleSaveBook={() => this.handleSaveBook({
                      title: book.volumeInfo.title,
                      src: book.volumeInfo.imageLinks.thumbnail,
                      authors: book.volumeInfo.authors,
                      description: book.volumeInfo.description,
                      link: book.volumeInfo.infoLink
                    })}
                  />
                ))}
              </Card>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Books;
