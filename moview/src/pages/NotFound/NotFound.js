import React from "react";
import {useNavigate} from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);

  }
  return (
    <main>
      <section className='not-found'>
        <p className='not-found__error-code'>404</p>
        <h1 className='not-found__error-name'>Страница не найдена</h1>
        <button className='not-found__link' onClick={goBack}>Назад</button>
      </section>
    </main>
  )
}

export default NotFound;