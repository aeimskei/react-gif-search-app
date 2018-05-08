import React from 'react';

const NoGifs = props => (
  <li className='no-gifs'>
    <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
    <h3>Sorry, no GIFs match your search.</h3>
  </li>
);

export default NoGifs;

// This is a component that returns an icon with the text 'Sorry, no GIFs match your search'
// Let's import this component in GifList.js

// Then in the GifList function, we'll need to do some conditional rendering based on the returned results
// If results are returned, render the list of GIFs, otherwise, render the NoGif.js component