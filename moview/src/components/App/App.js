import React from 'react';
import {useNavigate, Route, Routes, useLocation} from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import NotFound from "../../pages/NotFound/NotFound";
import SavedMovies from "../../pages/SavedMovies/SavedMovies";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute/PotectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import UserContext from "../../context/UserContext";
import mainApi from '../../utils/MainApi.js';

import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = React.useState({isOpen: false, successful: true, text: ''});
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [likedMoviesList, setLikedMoviesList] = React.useState([]);

  function closeInfoTooltip() {
    setIsInfoTooltip({...isInfoTooltip, isOpen: false});
  }

  function handleLogin({email, password}) {
    setIsLoader(true);
    mainApi.login(email, password)
      .then((jwt => {
        if (jwt.token) {
          localStorage.setItem('jwt', jwt.token);
          setLoggedIn(true);
          navigate('/movies');
          }
      }))
      .catch((err) => {
        setIsInfoTooltip({isOpen: true, successful: false, text: err})
      })
      .finally(() => {
        setIsLoader(false)
      })
  }

  function handleRegister({name, email, password}) {
    setIsLoader(true);
    mainApi.register(name, email, password)
      .then(() => {
          handleLogin({ email, password });
      })
      .catch((err) => {
        setIsInfoTooltip({isOpen: true, successful: false, text: err});
      })
      .finally(() => setIsLoader(false));
  }

  function handleUpdateUser({name, email}) {
    setIsLoader(true);
    mainApi.updateUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user);
        setIsInfoTooltip({isOpen: true, successful: true, text: 'Ваши данные успешно изменены.'});
      })
      .catch((err) => {
        setIsInfoTooltip({isOpen: true, successful: false, text: err});
      })
      .finally(() => setIsLoader(false));
  }

  function handleLikeMovie(movie) {
    mainApi.addMovie(movie)
      .then((newMovie) => {
        setLikedMoviesList([newMovie, ...likedMoviesList]);
        setIsInfoTooltip({isOpen: true, successful: true, text: 'Фильм добавлен в избранное'});
      })
      .catch((err) => {
        setIsInfoTooltip({isOpen: true, successful: false, text: err});
      })
  }

  function handleDislikeMovie(movie) {
    const likedMovie = likedMoviesList.find((item) => item.movieId === movie.id || item.movieId === movie.movieId);
    mainApi.deleteMovie(likedMovie._id)
      .then(() => {
        const moviesList = likedMoviesList.filter(m => {
          return (!(movie.id === m.movieId || movie.movieId === m.movieId))
        })
        setLikedMoviesList(moviesList);
        setIsInfoTooltip({isOpen: true, successful: true, text: 'Фильм удален из избранного'});
      })
      .catch((err) => {
        setIsInfoTooltip({isOpen: true, successful: false, text: err});
      })
  }

  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

  React.useEffect(() => {
    console.log('in useEff []')
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoader(true);
      mainApi.getUserInfo()
        .then((user) => {
          if (user) {
            setLoggedIn(true);
            setCurrentUser(user);
            navigate(path);
          }
        })
        .catch((err) => {
          setIsInfoTooltip({isOpen: true, successful: false, text: err})
        })
        .finally(() => {
          setIsLoader(false);
          setLoad(true);
        })
    } else {
      setLoad(true);
    }
  }, [])

  React.useEffect(() => {
    console.log('in useEff loggedIn first')
    if (loggedIn) {
      setIsLoader(true);
      mainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          setIsInfoTooltip({isOpen: true, successful: false, text: err});
        })
        .finally(() => {
          setIsLoader(false);
        })
    }
  }, [loggedIn])

  React.useEffect(() => {
    console.log('in useEff loggedIn last')
    if (loggedIn && currentUser) {
      mainApi.getMovies()
        .then((movies) => {
          const UserMoviesList = movies.filter(m => m.owner === currentUser._id);
          setLikedMoviesList(UserMoviesList);
        })
        .catch((err) => {
          setIsInfoTooltip({isOpen: true, successful: false, text: err});
        });
    }
  }, [loggedIn]);
  return (
    <UserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path='/'
            element={<Main loggedIn={loggedIn}/>}
          />
          <Route
            path='/signup'
            element={<Register handleRegister={handleRegister} loggedIn={loggedIn}/>}
          />
          <Route
            path='/signin'
            element={<Login handleLogin={handleLogin} loggedIn={loggedIn}/>}
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                setIsLoader={setIsLoader}
                setIsInfoTooltip={setIsInfoTooltip}
                likedMoviesList={likedMoviesList}
                onLikeClick={handleLikeMovie}
                onDeleteClick={handleDislikeMovie}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                likedMoviesList={likedMoviesList}
                onDeleteClick={handleDislikeMovie}
                setIsInfoTooltip={setIsInfoTooltip}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                handleProfile={handleUpdateUser}
                handleSignOut={handleSignOut}
              />
            }
          />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Preloader isOpen={isLoader}/>
        <InfoTooltip
          status={isInfoTooltip}
          onClose={closeInfoTooltip}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;