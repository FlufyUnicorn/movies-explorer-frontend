import { Link, useLocation  } from 'react-router-dom';
import React from "react";
import Navigation from "../Navigation/Navigation";

import './Header.css';

function Header() {
  const location = useLocation().pathname;
  const isMainPage = location === '/';

  const [isOpened, setOpened] = React.useState(false);

  const togglePopup = () => {
    setOpened((state) => !state);
    if (isOpened) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const closePopup = () => {
    setOpened(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`header ${isMainPage ? 'header_main-page' : ''}`}>
      <Link className='header__logo' to='/' title='О проекте'/>
      {
        !isMainPage
          ? <Navigation visible={isOpened} onClose={closePopup} />
        : (
            <nav className="header__auth">
              <ul className="header__auth-items">
                <li>
                  <Link
                    className="header__auth-item"
                    to="/signup"
                  >
                    Регистрация
                  </Link>
                </li>
                <li>
                  <Link
                    className="header__auth-item header__auth-item_highlighted"
                    to="/signin"
                  >
                    Войти
                  </Link>
                </li>
              </ul>
            </nav>
        )
      }
    </header>
  )
}

export default Header;