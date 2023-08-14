import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <div className={`navigation ${isVisible ? 'navigation_visible' : ''}`}>
      <nav className={`navigation__wrapper ${isVisible ? 'navigation__wrapper_visible' : ''}`}>
        <ul className="navigation__items">
          <li className="navigation__item navigation__item_desk">
            <NavLink className='navigation__link' to="/">
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className='navigation__link' to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className='navigation__link' to="/saved-movies">
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <Link className="navigation__link navigation__link_acc" to="/profile">
          Аккаунт
        </Link>
      </nav>
    </div>
  )
}

export default Navigation;