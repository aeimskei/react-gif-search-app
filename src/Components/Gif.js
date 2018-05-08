import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Gif;

// This component is the presentational component
// containing the template that displays each GIF

// This component is only responsible for rendering an image element wrapped in a list item for each different return from the api
// so, we need to give the <img> tag a source attribute, then set the value to prop url to recive that data passed to it via the url prop
// then, go back to GifList.js