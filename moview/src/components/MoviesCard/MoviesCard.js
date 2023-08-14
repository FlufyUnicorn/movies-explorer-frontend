import './MoviesCard.css';
import image from '../../images/movie.png';
import like from '../../images/like.svg';
function MoviesCard() {
  return (
    <article className='movie'>
      <img className='movie__image' src={image} alt='Обложка фильма'/>
      <div className='movie__info'>
        <p className='movie__title'>33 слова о дизайне</p>
        <img className='movie__like' src={like} alt='Переключатель лайка'/>
      </div>
      <p className='movie__duration'>1ч42м</p>
    </article>
  )
}

export default MoviesCard;