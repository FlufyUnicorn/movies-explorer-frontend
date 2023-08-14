import React, { Suspense } from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import NotFound from "../../pages/NotFound/NotFound";

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