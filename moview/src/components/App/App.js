import React, { Suspense } from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import NotFound from "../../pages/NotFound/NotFound";
import SavedMovies from "../../pages/SavedMovies/SavedMovies";

import './App.css';
import Register from "../../pages/Register/Register";

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
          path='saved-movies'
          element={(
            <Suspense fallback={<div>Загрузка...</div>}>
              <SavedMovies/>
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