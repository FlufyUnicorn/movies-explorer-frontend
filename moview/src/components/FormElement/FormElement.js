import React from "react";
import logo from '../../images/logo.svg';
import './FormElement.css';
import {Link} from "react-router-dom";

function FormElement(props) {
  return (
    <div className='form__wrapper'>
      <Link to='/' className='form__logo' src={logo} alt='Логотип'/>
      <h1 className='form__title'>{props.isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
      <form className='form'>
        {props.isRegister
        && (
          <div className="form__container">
            <label className="form__label">Имя</label>
            <input className="form__input" id="name" type="text" placeholder="Виталий" />
            <span className="form__span" />
          </div>
        )}
        <div className="form__container">
          <label className="form__label">E-mail</label>
          <input className="form__input" id="email" type="email" placeholder="email@yandex.ru" />
          <span className="form__span" />
        </div>
        <div className="form__container">
          <label className="form__label">Пароль</label>
          <input className="form__input" id="password" type="password" placeholder="password" />
          <span className="form__span">Что-то пошло не так...</span>
        </div>
        <div className="form__button-container">
          <button className={`form__button ${props.isRegister ? 'form__button_register' : ''}`} type="submit">
            {props.isRegister ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <p className="form__submit-text">
            {props.isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?'}
            <Link to={props.isRegister ? '/signin': '/signup'} className="form__submit-span">{props.isRegister ? 'Войти' : 'Регистрация'}</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default FormElement;