import React from "react";
import {Link} from "react-router-dom";

import './NotFound.css';

function NotFound() {
  return (
    <section className='not-found'>
      <p className='not-found__error-code'>404</p>
      <h1 className='not-found__error-name'>Страница не найдена</h1>
      <Link to='/' className='not-found__link'>Назад</Link>
    </section>
  )
}

export default NotFound;