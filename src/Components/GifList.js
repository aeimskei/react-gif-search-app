import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

// Then in the GifList function, we'll need to do some conditional rendering based on the returned results
// If results are returned, render the list of GIFs, otherwise, render the NoGif.js component
// This example, gonna use an if-else statement that returns the list of GIFs if the result are greater than zero, else it will return the NoGifs component

const GifList = props => { 

  // then use the map method to map over the array and return a Gif Component for each object in the array
  // store this function in the variable with 'let gifs'
  // inside the map method, the function takes the parameter 'gif' and returns a <Gif /> component

  const results = props.data;
  let gifs;
  if (results.length > 0) {
    gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />);
  } else {
    gifs = <NoGifs />
  }
  
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;

// This component contains the wrapping <ul> element
// that will display our list of GIFs
// via the <Gif /> Component

// GiftList will receive the data form App and be responsible only for how the list of GIFs looks

// Remember in React, props are how components talk to each other
// So, go back to App and give <GifList /> a prop of data and this props needs to pass the good state to the GifList component

// To get the URL of the GIF, we need to access the URL property associated with each object in the array
// pass the url into the GIF component, we used the fixed height property in obj, image, then fixed_height
// <Gif url={gif.images.fixed_height.url} />
// next go over to the Gif.js file

// Next, render the list of gifs by adding a gifs variable inside the unordered list within a JSX expression
// Replace, <Gif /> with {gifs}, line 17

// we need to give a key to each GIF to give unique id


// There's one more small glitch, when the App first loads, or anytime you refresh the App, you see a quick flash of the <NoGifs /> component just before the GIFs load, this happens bc the initial value of the gif state is an empty array, so in the short moment, the data is being fetched, there are 0 results
// So, we can use conditional rendering to add a loading indicator that let's users no the data is loading, we can redner the loader, or the list of GIFs depending ont the state of the App
// Go back to App.js