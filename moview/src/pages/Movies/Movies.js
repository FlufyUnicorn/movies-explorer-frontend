import React from "react";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import SearchForm from "../../components/SearchForm/SearchForm";
import moviesApi from '../../utils/MoviesApi';
import {filterShortMovies, filterMovies, transformMovies} from '../../utils/moviesUtils';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserContext from "../../context/UserContext";

function Movies(props) {
  const currentUser = React.useContext(UserContext);
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

  function handleFilterMovies(movies, query, moviesCheckbox) {
    const moviesList = filterMovies(movies, query, moviesCheckbox);
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
    setFilteredMovies(moviesCheckbox ? filterShortMovies(moviesList) : moviesList);
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
            text: 'Во время запроса произошла ошибка.'
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

  React.useEffect(() => {
    const userQuery = localStorage.getItem(`${currentUser.email} - movieSearch`)
    if (!userQuery) {
      props.setIsLoader(true);
      moviesApi.getMovies()
        .then(movies => {
          setIsAllMovies(movies);
          handleFilterMovies(
            transformMovies(movies),
            userQuery,
            shortMovies
          );
        })
        .catch((e) => {
            props.setIsInfoTooltip({
              isOpen: true,
              successful: false,
              text: 'Во время запроса произошла ошибка.'
            })
            console.log(e)
          }
        )
        .finally(() => props.setIsLoader(false));
    }
  },[])

  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true') {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, [currentUser]);

  return (
    <>
      <Header/>
      <main>
        <SearchForm
          handleShortFilms={handleShortFilms}
          handleSearchSubmit={handleSearchSubmit}
          shortMovies={shortMovies}
        />
        {!NotFound && (
          <MoviesCardList
            moviesList={filteredMovies}
            likedMoviesList={props.likedMoviesList}
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