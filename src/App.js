import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  // need to initialize the loading state to prevent glitch of showing error message
  // set the 'constructor' to true by default
  // then in the performSearch func, update the laoding state to false bc at this point, the data has already been fetched
  
  // this constructor is setup to initialize state
  constructor() {
    super();
    this.state = {
      // gifs represents the collection of obj that will
      // change and be updated by components
      gifs: [],
      loading: true
    };
  } 

  // FETCH Version ==================================================
  // setup all of our data fetching inside
  // React's componentDidMount lifecyele method
  // it's called immediately after a component is added
  // to the DOM
  // in the fetch method, define the path to the data url
  // fetch uses promises, after data is return, then
  // convert the data to JSON
  
  // componentDidMount() {
  //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     .then(response => response.json())
  //     .then(responseData => {
        // to acces the data in the array, responseData.data
      //   this.setState({gifs: responseData.data});
      // })
      // when error fetching data, to handle error
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }

  // AXIOS Version ==================================================

  // componentDidMount() {
    // the GET method perform the request with chained then and catch method
    // axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      // get first, then update the state
      // .then(response => {
      //   this.setState({
      //     gifs: response.data.data
      //   });
      // })
      // error handling
      // .catch(error => {
      //   console.log('Error fetching and parsing data', error);
      // });
  // }

  // Then call the performSearch function in the componentDidMount lifecyler method with 'this.performSearch

  componentDidMount() {
    this.performSearch()
  }

    // then in the performSearch func, update the laoding state to false bc at this point, the data has already been fetched
    // No, we can use this loading state to render a loading indicator, if the loading indicator is true or render GifList if it's false, so down to the return statement

  // give a default value to load with GIFs instead of blank
  performSearch = (query = 'cats') => {
    // change URL link to template literal, so that we're able to embed the value of query into the URL using interpolation
    // you can add limi with ampersand limit
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      // get first, then update the state
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      // error handling
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // user ternary operator to evaluate the true and false states of loading inside the 'main-content', a set of () for condiition, then below a ? and :
  // if the loading state is true, while the GIFs are loading, we'll render a paragraph dispalying the text loading.
  // otherwise, render to GifList component

  render() { 
    // test if we're able to access the api data
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <GifList data={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}

// The App Component is aware of the application as a whole
// It initializes and updates the GIF state with the response data
// Also, provide the data in behavior to its child components: <SearchForm /> & <GifList />
// In React, it's best practice to include your data fetching logic within a Container component like App

// Presentational Components should not handle their data fetching bc it tightly couples the data to the view

// This will allow us to have better reusability of presentational components

// (1) Give <GifList /> a prop of data and this props needs to pass the GIF state to the GifList component
// anytime the gifs gets update, the GifList component will reveive an array of object via the state of prop
// (2) Next, we need to map each of the GIF object to a GIF Component to display each GIF
// go to GifList.js, store the data in a constant named results


// What if no GIFs are returned? For example, if some gibberish was typed in the text field, it would be nice to provide some info to the user when no GIFs are returned, go to NoGifs.js