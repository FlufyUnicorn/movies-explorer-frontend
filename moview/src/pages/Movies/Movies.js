import React from "react";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import SearchForm from "../../components/SearchForm/SearchForm";
import moviesApi from '../../utils/MoviesApi';
import {filterMovies, transformMovies} from '../../utils/moviesUtils';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserContext from "../../context/UserContext";

function Movies(props) {
  const currentUser = React.useContext(UserContext);

  const [activeMovies, setActiveMovies] = React.useState([]);
  const [NotFound, setNotFound] = React.useState(false);
  const [isCheckedShortMovies, setIsCheckedShortMovies] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  function handleShortFilms() {
    setIsCheckedShortMovies(!isCheckedShortMovies);
    localStorage.setItem(`${currentUser.email} - shortMovies`, !isCheckedShortMovies);
  }

  function handleFilter(inputValue, movies) {
    if (inputValue) {
      localStorage.setItem(`${currentUser.email} - movieSearch`, inputValue);
    }
    const filtered = filterMovies(movies, inputValue, isCheckedShortMovies);
    localStorage.setItem(`${currentUser.email} - movies`, JSON.stringify(filtered));

    setActiveMovies(filtered);
    if (filtered.length === 0) {
      props.setIsInfoTooltip({ isOpen: true, successful: false, text: 'Ничего не найдено' })
      setNotFound(true)
    }
    else {
      setNotFound(false)
    }
  }

  function handleSearchSubmit(inputValue) {
    handleFilter(inputValue, allMovies)
  }

  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      moviesApi.getMovies()
        .then((movies) => {
          const transform = transformMovies(movies)
          setAllMovies(transform)
        })
      const movies = JSON.parse(localStorage.getItem(`${currentUser.email} - movies`));
      handleFilter(inputValue, movies)
    }
    else {
      props.setIsLoader(true)
      moviesApi.getMovies()
        .then(movies => {
          const transform = transformMovies(movies)
          setActiveMovies(transform)
          setAllMovies(transform)
          localStorage.setItem(`${currentUser.email} - movies`, JSON.stringify(movies));
        })
        .catch(() => {
            props.setIsInfoTooltip({isOpen: true, successful: false, text: 'Во время запроса произошла ошибка.'})
          }
        )
        .finally(() => props.setIsLoader(false));
    }
  }, []);

  React.useEffect(() => {
    if (allMovies.length!==0)
    handleSearchSubmit(inputValue)
  }, [isCheckedShortMovies])


  React.useEffect(() => {
    localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true' ? setIsCheckedShortMovies(true) : setIsCheckedShortMovies(false);
  }, []);

  return (
    <>
      <Header/>
      <main>
        <SearchForm handleShortFilms={handleShortFilms} handleSearchSubmit={handleSearchSubmit} shortMovies={isCheckedShortMovies} onChangeSearch={setInputValue}/>
        {!NotFound && (
          <MoviesCardList
            moviesList={activeMovies}
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