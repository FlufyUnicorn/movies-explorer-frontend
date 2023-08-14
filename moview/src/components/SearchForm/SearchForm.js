import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className='search-form'>
      <div className="search-form__input-container">
        <input className="search-form__input" placeholder="Фильм" required/>
        <button className="search-form__button" type="submit"/>
      </div>
      <FilterCheckbox/>
    </section>
  )
}

export default SearchForm;