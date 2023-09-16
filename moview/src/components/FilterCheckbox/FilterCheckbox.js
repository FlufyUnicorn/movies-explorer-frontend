import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className='filter__wrapper'>
      <label className="filter">
        <input
          className="filter__checkbox"
          type="checkbox"
          onChange={props.handleShortFilms}
          checked={props.shortMovies}
        />
        <span className="filter__tumbler"/>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  )
}

export default FilterCheckbox;