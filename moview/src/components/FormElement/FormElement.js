import React from "react";
import logo from '../../images/logo.svg';
import './FormElement.css';

function FormElement(props) {
  return (
    <div className='form__wrapper'>
      <img className='form__logo' src={logo} alt='Логотип'/>
      <h1 className='form__title'>{props.isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
    </div>
  )
}

export default FormElement;