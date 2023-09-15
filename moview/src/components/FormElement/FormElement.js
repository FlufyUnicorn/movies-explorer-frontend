import React from "react";
import logo from '../../images/logo.svg';
import './FormElement.css';
import {Link} from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";

function FormElement(props) {
  const {values, errors, isValid, handleChange, updateForm } = useFormValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleSubmit(values);
  }

  React.useEffect(() => {
    updateForm();
  }, [updateForm]);

  return (
    <div className='form__wrapper'>
      <Link to='/' className='form__logo' src={logo} alt='Логотип'/>
      <h1 className='form__title'>{props.isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
      <form className='form' noValidate onSubmit={handleSubmit}>
        {props.isRegister
        && (
          <div className="form__container">
            <label className="form__label">Имя</label>
            <input
              className="form__input"
              id="name"
              name="name"
              type="text"
              placeholder="Виталий"
              onChange={handleChange}
              value={values.name || ''}
              required
            />
            <span className="form__span">{errors.name || ''}</span>
          </div>
        )}
        <div className="form__container">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            id="email"
            name="email"
            type="email"
            placeholder="email@yandex.ru"
            onChange={handleChange}
            value={values.email || ''}
            required
          />
          <span className="form__span">{errors.email || ''}</span>
        </div>
        <div className="form__container">
          <label className="form__label">Пароль</label>
          <input
            className="form__input"
            id="password"
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            value={values.password || ''}
            required
          />
          <span className="form__span">{errors.password || ''}</span>
        </div>
        <div className="form__button-container">
          <button className={`form__button ${props.isRegister ? 'form__button_register' : ''} ${isValid && 'form__button_register_disabled'}`} type="submit"
                  disabled={!isValid}>
            {props.isRegister ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <p className="form__submit-text">
            {props.isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?'}
            <Link to={props.isRegister ? '/signin' : '/signup'}
                  className="form__submit-span">{props.isRegister ? 'Войти' : 'Регистрация'}</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default FormElement;