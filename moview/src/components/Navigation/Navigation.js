import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation(props) {

  const underlineLink = (nav) => (nav.isActive
    ? 'navigation__link navigation__link_active'
    : 'navigation__link');

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('navigation_visible')) {
      props.onClose()
    }
  }


  return (
    <div className={`navigation ${props.visible ? 'navigation_visible' : ''}`} onClick={handleOverlayClick}>
      <nav className={`navigation__wrapper ${props.visible ? 'navigation__wrapper_visible' : ''}`}>
        <ul className="navigation__items">
          <li className='navigation__item navigation__item_desk'>
            <NavLink className='navigation__link' to="/" onClick={props.onClose}>
              Главная
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink className={underlineLink} to="/movies" onClick={props.onClose}>
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink className={underlineLink} to="/saved-movies" onClick={props.onClose}>
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