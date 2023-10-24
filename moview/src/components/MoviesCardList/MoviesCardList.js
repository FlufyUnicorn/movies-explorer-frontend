import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import {getLikedMovies} from "../../utils/moviesUtils";
import {devices} from "../../utils/constants";
import useScreenWidth from "../../hooks/useScreenWidth";

import './MoviesCardList.css';

function MoviesCardList(props) {
  const {pathname: location} = useLocation();
  const [showMovieList, setShowMovieList] = React.useState([]);
  const [cardsShowDetails, setCardsShowDetails] = React.useState({ total: 12, more: 3 });
  const [isRender, setIsRender] = React.useState(true);
  const { desktop, tablet, mobile } = devices;
  const screenWidth = useScreenWidth();

  function handleLoadMoreMovies() {
    const start = showMovieList.length;
    const end = start + cardsShowDetails.more;
    const add = props.moviesList.length - start;
    if (add > 0) {
      const newMovies = props.moviesList.slice(start, end);
      setShowMovieList([...showMovieList, ...newMovies]);
    }
  }

  React.useEffect(() => {
    if (location === '/movies') {
      if (screenWidth > desktop.width) {
        setCardsShowDetails(desktop.cards);
      } else if (screenWidth <= desktop.width && screenWidth > mobile.width) {
        setCardsShowDetails(tablet.cards);
      } else {
        setCardsShowDetails(mobile.cards);
      }
      return () => setIsRender(false);
    }
  }, [screenWidth, isRender, desktop, tablet, mobile, location]);

  React.useEffect(() => {
    if (props.moviesList.length) {
      const res = props.moviesList.filter((item, i) => i < cardsShowDetails.total);
      setShowMovieList(res);
    }
  }, [props.moviesList, cardsShowDetails.total]);

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {showMovieList.map(movie => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            onDeleteClick={props.onDeleteClick}
            onLikeClick={props.onLikeClick}
            liked={getLikedMovies(props.likedMoviesList, movie)}
          />
        ))}
      </ul>
      {location === '/movies' && showMovieList.length>=5 && showMovieList.length < props.moviesList.length && (
        <button className="movies__button" type="button" onClick={handleLoadMoreMovies}>Ещё</button>
      )}
    </section>
  )
}

export default MoviesCardList;