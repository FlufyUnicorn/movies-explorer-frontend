import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { filterMovies } from '../../utils/moviesUtils';

import './SavedMovies.css';

function SavedMovies(props) {
  const [activeMovies, setActiveMovies] = React.useState([]);
  const [isCheckedShortMovies, setIsCheckedShortMovies] =React.useState(false);
  const [NotFound, setNotFound] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  function handleSearchSubmit(inputValue) {
    const filtered = filterMovies(props.likedMoviesList, inputValue, isCheckedShortMovies);

    setActiveMovies(filtered);
    setNotFound(filtered.length === 0);
  }

  function handleShortFilms() {
    setIsCheckedShortMovies(!isCheckedShortMovies);
  }

  React.useEffect(() => {
    handleSearchSubmit(inputValue);
  }, [isCheckedShortMovies, props.likedMoviesList]);

  return (
    <>
      <Header/>
      <main className='main'>
        <SearchForm handleSearchSubmit={handleSearchSubmit} handleShortFilms={handleShortFilms} shortMovies={isCheckedShortMovies} onChangeSearch={setInputValue} likedMoviesList={props.likedMoviesList}/>
        {!NotFound && (
          <MoviesCardList moviesList={activeMovies} likedMoviesList={props.likedMoviesList} onDeleteClick={props.onDeleteClick}/>
        )}
        <Footer/>
      </main>
    </>
  )
}

export default SavedMovies;