import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import UserContext from "../../context/UserContext";
import {useLocation} from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";

import './SearchForm.css';

function SearchForm(props) {
  const currentUser = React.useContext(UserContext);
  const location = useLocation();
  const { values, handleChange, isValid, setIsValid } = useFormValidation();
  const [errorQuery, setErrorQuery] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? props.handleSearchSubmit(values.search) : setErrorQuery('Нужно ввести ключевое слово.');
  }

  React.useEffect(() => {
    setErrorQuery('')
  }, [isValid]);


  React.useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem(`${currentUser.email} - movieSearch`)) {
      values.search = localStorage.getItem(`${currentUser.email} - movieSearch`);
      setIsValid(true);
    }
  }, [currentUser]);

  return (
    <section className='search-form'>
      <form className="search-form__input-container" name='search' noValidate onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          name='search'
          placeholder="Фильм"
          required
          type='text'
          onChange={handleChange}
          value={values.search || ''}
        />
        <span className="search-form__error">{errorQuery}</span>
        <button className="search-form__button" type="submit"/>
      </form>
      <FilterCheckbox shortMovies={props.shortMovies} handleShortFilms={props.handleShortFilms}/>
    </section>
  )
}

export default SearchForm;