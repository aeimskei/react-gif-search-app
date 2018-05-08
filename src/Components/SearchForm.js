import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  // specific to that component it gets updated by onSearchChange func
  // the searchText is local to the SearchForm Component
  // the type of value of the input isn't really part of the App state
  // but if the App is bigger, you can also use refs to access the value of the input field
  state = {
    searchText: ''
  }
  
  // where User types input value
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  // handles the submit, it's called whne the form is submitted
  // in the 'onSubmit' handler insie the form below in render
      // need to call our func to invoke the data
      // to access the input field value via 'this.state.searchText', we need to pass, on search, change to 'this.query.value'
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  // In React, refs allow you to reference or get direct access to a DOM element (eg. in render() on <input>)
  // the ref attribute takes a callback func that recieves the underlying DOM element as its argument
  // in this case, its the input as the argument, then return 'this.query = input'
  // what this does, it puts reference to the input on the SearchForm class
  // so this callback of (input) is called immediately after the component is mounted to the DOM when the input is rendered onto the page, it returns a refernce to this input which you can access with 'this.query'
  // Now, we can reference our input inside our 'handleSubmit' function above
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}

// User can search for GIFs by searching in the text field
// search result will be returned and displayed in the list of GIFs when you hit the enter key of search icon in the field

// (1) Go back to the App component that fetches the data and updates GIF state when called


// Now, let's make a default list of GIFS rather than having it blank when people come on when the App first loads, that way the page won't look empty and boring.
// Do this by providing the performSearch function a default value for the query parameter in App.js