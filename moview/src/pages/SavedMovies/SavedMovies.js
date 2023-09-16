import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import SearchForm from "../../components/SearchForm/SearchForm";
import UserContext from '../../context/UserContext';
import { filterMovies, filterShortMovies } from '../../utils/moviesUtils';

import './SavedMovies.css';

function SavedMovies(props) {
  const currentUser = React.useContext(UserContext);
  const [showedMovies, setShowedMovies] = React.useState(props.likedMoviesList);
  const [filteredMovies, setFilteredMovies] = React.useState(showedMovies);
  const [shortMovies, setShortMovies] =React.useState(false);
  const [NotFound, setNotFound] = React.useState(false);

  function handleSearchSubmit(inputValue) {
    const moviesList = filterMovies(props.likedMoviesList, inputValue, shortMovies);
    if (moviesList.length === 0) {
      setNotFound(true);
      props.setIsInfoTooltip({ isOpen: true, successful: false, text: 'Ничего не найдено.' });
    } else {
      setNotFound(false);
      setFilteredMovies(moviesList);
      setShowedMovies(moviesList);
    }
  }

  function handleShortFilms() {
    if (!shortMovies) {
      setShortMovies(true);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0 ? setNotFound(true) : setNotFound(false);
    } else {
      setShortMovies(false);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, false);
      filteredMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      setShowedMovies(filteredMovies);
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortSavedMovies`) === 'true') {
      setShortMovies(true);
      setShowedMovies(filterShortMovies(props.likedMoviesList));
    } else {
      setShortMovies(false);
      setShowedMovies(props.likedMoviesList);
    }
  }, [props.likedMoviesList, currentUser]);

  React.useEffect(() => {
    setFilteredMovies(props.likedMoviesList);
    props.likedMoviesList.length !== 0 ? setNotFound(false) : setNotFound(true);
  }, [props.likedMoviesList]);

  return (
    <>
      <Header/>
      <main className='main'>
        <SearchForm handleSearchSubmit={handleSearchSubmit} handleShortFilms={handleShortFilms} shortMovies={shortMovies}/>
        {!NotFound && (
          <MoviesCardList moviesList={showedMovies} likedMoviesList={props.likedMoviesList} onDeleteClick={props.onDeleteClick}/>
        )}
        <Footer/>
      </main>
    </>
  )
}

export default SavedMovies;