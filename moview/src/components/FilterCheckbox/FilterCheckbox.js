import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter__wrapper'>
      <label className="filter">
        <input
          className="filter__checkbox"
          type="checkbox"
        />
        <span className="filter__tumbler"/>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  )
}

export default FilterCheckbox;