import React, { Suspense } from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import NotFound from "../../pages/NotFound/NotFound";
import SavedMovies from "../../pages/SavedMovies/SavedMovies";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";

import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route
          path='movies'
          element={(
            <Suspense fallback={<div>Загрузка...</div>}>
              <Movies/>
            </Suspense>
          )}
        />
        <Route
          path='signup'
          element={(
            <Suspense fallback={<div>Загрузка...</div>}>
              <Register/>
            </Suspense>
          )}
        />
        <Route
          path='signin'
          element={(
            <Suspense fallback={<div>Загрузка...</div>}>
              <Login/>
            </Suspense>
          )}
        />
        <Route
          path='saved-movies'
          element={(
            <Suspense fallback={<div>Загрузка...</div>}>
              <SavedMovies/>
            </Suspense>
          )}
        />
        <Route
          path='profile'
          element={(
            <Suspense fallback={<div>Загрузка...</div>}>
              <Profile name={'Анастасия'}/>
            </Suspense>
          )}
        />
        <Route
          path='*'
          element={(
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound/>
            </Suspense>
          )}
        />
      </Routes>
    </div>
  )
}

export default App;