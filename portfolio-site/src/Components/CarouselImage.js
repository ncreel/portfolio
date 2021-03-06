import React from 'react';

import mbtaarrivals from '../img/mbtaarrivals.png';
import hatsunemicu from '../img/hatsunemicu.png';
import moviesearch from '../img/moviesearch.png';
import christianbooks from '../img/christianbooks.png';

const images = {
  "mbtaarrivals": mbtaarrivals,
  "hatsunemicu": hatsunemicu,
  "moviesearch": moviesearch,
  "christianbooks": christianbooks
}

export default function CarouselImage(props){
  console.log(images[props.src])
  return(
    <img className="carousel-image" src={images[props.src]} alt={props.alt}>
    </img>
  )
}
