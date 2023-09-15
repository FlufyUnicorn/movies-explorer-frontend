import React from "react";
import {useLocation} from "react-router-dom";

import './MoviesCard.css';

function MoviesCard(props) {
  const {pathname: location} = useLocation();
  const isMoviePage = location === '/movies';
  const [saved, setSaved] = React.useState(true);

  const handleSave = () => {
    setSaved((state) => !state);
  }

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
          <img className='movie__image' src={props.movie.image} alt={props.movie.nameRU}/>
        </a>
        <div className='movie__info'>
          <p className='movie__title'>{props.movie.nameRU}</p>
          {
            isMoviePage && (
              <button className={`movie__button ${saved ? 'movie__button_saved' : ''}`} onClick={handleSave}/>
            )
          }
          {
            !isMoviePage && (
              <button className='movie__button movie__button_delete'/>
            )
          }
        </div>
        <p className='movie__duration'>1ч42м</p>
      </article>
    </li>
  )
}

export default MoviesCard;