import {Link, useLocation} from 'react-router-dom';
import React from "react";
import Navigation from "../Navigation/Navigation";
import burger from '../../images/burger.svg';
import close from '../../images/close.svg'

import './Header.css';

function Header() {
  const {pathname: location} = useLocation()
  const isMainPage = location === '/';

  const [isOpened, setIsOpened] = React.useState(false);

  const handleTogglePopup = () => {
    setIsOpened((open) => !open);
  }

  React.useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  const handleClosePopup = () => {
    setIsOpened(false);
  };

  return (
    <header className={`header ${isMainPage ? 'header_main-page' : ''}`}>
      <Link className='header__logo' to='/'/>
      {
        !isMainPage
          ? <Navigation visible={isOpened} onClose={handleClosePopup}/>
          : (
            <nav className="header__auth">
              <ul className="header__auth-items">
                <li>
                  <Link className="header__auth-item" to="/signup">Регистрация</Link>
                </li>
                <li>
                  <Link className="header__auth-item header__auth-item_highlighted" to="/signin">Войти</Link>
                </li>
              </ul>
            </nav>
          )
      }
      {!isMainPage
      && (
        <img className='burger' src={isOpened ? close : burger} alt='Меню' onClick={handleTogglePopup}/>
      )}
    </header>
  )
}

export default Header;