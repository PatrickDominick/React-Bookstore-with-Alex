import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./navbar";
import BooksWrapper from "./pages/books-wrapper";
import AddBook from "./pages/add-book";


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      booksData: []
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/book/get")
    .then(response => response.json())
    .then(responseData => this.setState({booksData: responseData})) //could be ({ data }) if both were named data
    .catch(error => console.log("Error fetching all books sucka!", error));
  }

  render() {
    return (
      <BrowserRouter>

        <div className='app'>

          <Navbar />

          <Switch>
            <Route exact path = "/" render = {props => <BooksWrapper renderedData={this.state.booksData} {...props}/>} /> 
            <Route path = "/add-book" component = {AddBook} />
          </Switch>

        </div>

      </BrowserRouter>
    );
  }
}
