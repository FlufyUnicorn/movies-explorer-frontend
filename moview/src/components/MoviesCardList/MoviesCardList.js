import React from 'react';

import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";

function MoviesCardList(props) {
  const {pathname: location} = useLocation();
  const [showMovieList, setShowMovieList] = React.useState([]);
  return (
    <section className='movies'>
      <ul className='movies__list'>
        {showMovieList.map(movie => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onDeleteClick={props.onDeleteClick}
            onLikeClick={props.onLikeClick}
          />
        ))}
      </ul>
      {location === '/movies' && showMovieList.length>=5 && showMovieList.length < props.moviesList.length && (
        <button className="movies__button" type="button" >Ещё</button>
      )}

    </section>
  )
}

export default MoviesCardList;