import React from "react";
import {useLocation} from "react-router-dom";
import {parseDuration} from "../../utils/moviesUtils";

import './MoviesCard.css';

function MoviesCard(props) {
  const {pathname: location} = useLocation();
  const isMoviePage = location === '/movies';

  const handleLikeCard = () => {
    props.onLikeClick(props.movie)
  }

  const handleDeleteCard = () => {
    props.onDeleteClick(props.movie)
  }

  return (
    <li className='movie__wrapper'>
      <article className='movie'>
        <a className='movie__trailer-link' target='_blank' rel='noreferrer' href={props.movie.trailerLink}>
          <img className='movie__image' src={props.movie.image} alt={props.movie.nameRU} title={`Описание: ${props.movie.description} /n${props.movie.country} ${props.movie.year}г.`}/>
        </a>
        <div className='movie__info'>
          <p className='movie__title'>{props.movie.nameRU}</p>
          {
            isMoviePage && (
              <button className={`movie__button ${props.liked ? 'movie__button_saved' : ''}`} onClick={props.liked ? handleDeleteCard: handleLikeCard}/>
            )
          }
          {
            !isMoviePage && (
              <button className='movie__button movie__button_delete' onClick={handleDeleteCard}/>
            )
          }
        </div>
        <p className='movie__duration'>{parseDuration(props.movie.duration)}</p>
      </article>
    </li>
  )
}

export default MoviesCard;