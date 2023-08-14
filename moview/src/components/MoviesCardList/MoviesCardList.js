import React from 'react';

import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className='movies'>
      {[...Array(8).keys()].map((item) => <MoviesCard key={item}/>)}
      <button className="movies__button" type="button" >Ещё</button>
    </section>
  )
}

export default MoviesCardList;