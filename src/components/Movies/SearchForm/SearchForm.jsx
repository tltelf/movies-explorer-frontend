import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import search from '../../../images/search.svg';
import searchButton from '../../../images/search-button.svg';

export const SearchForm = () => {
  return (
    <>
      <div className='search'>
        <form className='search__form' action='' method='get'>
          <label className='search__form-label'>
            <img
              className='search__form-label-icon'
              src={search}
              alt='Иконка поиска'
            />
            <input
              className='search__form-input'
              type='search'
              placeholder='Фильм'
            />
          </label>
          <button className='search__form-button' type='button'>
            <img src={searchButton} alt='Иконка поиска' />
          </button>
          <span className='search__form-decor'></span>
          <FilterCheckbox />
        </form>
        <div className='search__decor'></div>
      </div>
    </>
  );
};
