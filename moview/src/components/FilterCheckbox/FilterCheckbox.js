import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox__container">
      <label className="filter-checkbox__label">
        <span className="filter-checkbox__switcher" />
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;