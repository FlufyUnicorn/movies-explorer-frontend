import React from "react";
import image from '../../images/movie.png';
import {useLocation} from "react-router-dom";

import './MoviesCard.css';

function MoviesCard() {
  const {pathname: location} = useLocation();
  const isMoviePage = location === '/movies';
  const [saved, setSaved] = React.useState(true);

  const handleSave = () => {
    setSaved((state) => !state);
  }
  return (
    <article className='movie'>
      <img className='movie__image' src={image} alt='Обложка фильма'/>
      <div className='movie__info'>
        <p className='movie__title'>33 слова о дизайне</p>
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
  )
}

export default MoviesCard;