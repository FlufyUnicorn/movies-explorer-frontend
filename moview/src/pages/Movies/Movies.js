import React from "react";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import SearchForm from "../../components/SearchForm/SearchForm";
import UserContext from "../../context/UserContext";
import moviesApi from '../../utils/MoviesApi';
import {filterShortMovies, filterMovies, transformMovies} from '../../utils/moviesUtils';
import Footer from "../../components/Footer/Footer";

function Movies(props) {
  const currentUser = React.useContext(UserContext)
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [NotFound, setNotFound] = React.useState(false);
  const [shortMovies, setShortMovies] = React.useState(false);
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [isAllMovies, setIsAllMovies] = React.useState([]);

  function handleShortFilms() {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(`${currentUser.email} - shortMovies`, !shortMovies);
  }

  function handleFilterMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    if (moviesList.length === 0) {
      props.setIsInfoTooltip({
        isOpen: true,
        successful: false,
        text: 'Ничего не найдено',
      });
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem(
      `${currentUser.email} - movies`,
      JSON.stringify(moviesList));
  }

  function handleSearchSubmit(inputValue) {
    localStorage.setItem(`${currentUser.email} - movieSearch`, inputValue);
    localStorage.setItem(`${currentUser.email} - shortMovies`, shortMovies);

    if (isAllMovies.length === 0) {
      props.setIsLoader(true);
      moviesApi.getMovies()
        .then(movies => {
          setIsAllMovies(movies);
          handleFilterMovies(
            transformMovies(movies),
            inputValue,
            shortMovies
          );
        })
        .catch(() =>
          props.setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
          })
        )
        .finally(() => props.setIsLoader(false));
    } else {
      handleFilterMovies(isAllMovies, inputValue, shortMovies);
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movies`)
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true'
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);

  return (
    <>
      <main>
        <SearchForm
          handleShortFilms={handleShortFilms}
          handleSearchSubmit={handleSearchSubmit}
          shortMovies={shortMovies}
        />
        {!NotFound && (
          <MoviesCardList
            moviesList={filteredMovies}
            savedMoviesList={props.savedMoviesList}
            onLikeClick={props.onLikeClick}
            onDeleteClick={props.onDeleteClick}
          />
        )}
      </main>
      <Footer/>
    </>
  )
}

export default Movies;