import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import search from '../../../images/search.svg';
import searchButton from '../../../images/search-button.svg';

export const SearchForm = () => {
  return (
    <>
      <div className='search__container'>
        <form className='search-form' action='' method='get'>
          <label className='search-form__label'>
            <img
              className='search-form__label-icon'
              src={search}
              alt='Иконка поиска'
            />
            <input className='search-form__input' type='search' />
          </label>
          <button className='search-form__button' type='button'>
            <img src={searchButton} alt='Иконка поиска' />
          </button>
          <span className='search-form__decor'></span>
          <FilterCheckbox />
        </form>
        <div className='search__container-decor'></div>
      </div>
    </>
  );
};
