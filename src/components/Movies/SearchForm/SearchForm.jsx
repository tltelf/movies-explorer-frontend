import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import search from '../../../images/search.svg';
import searchButton from '../../../images/search-button.svg';
import { useEffect } from 'react';
export const SearchForm = ({
  checkboxValue,
  handleCheckbox,
  searchText,
  values,
  handleChange,
  errors,
  handleSubmitSearchForm,
  handleBlur,
  errorSearchForm,
  setErrorSearchForm,
  isMoviesPage,
  resetForm,
}) => {
  const handleBlurForm = () => {
    setErrorSearchForm(false);
  };

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <>
      <div className='search'>
        <form
          className='search__form'
          action=''
          method='get'
          name='form'
          onSubmit={handleSubmitSearchForm}
          noValidate
          onBlur={handleBlurForm}
        >
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
              name={isMoviesPage ? 'search' : 'searchLiked'}
              defaultValue={
                (isMoviesPage ? values.search : values.searchLiked) ||
                searchText
              }
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {(errorSearchForm || errors.search) && (
              <div className='tooltip'>
                <span className='tooltip__text'>
                  Нужно ввести ключевое слово
                </span>
              </div>
            )}
          </label>
          <button className='search__form-button' type='submit'>
            <img src={searchButton} alt='Иконка поиска' />
          </button>
          <span className='search__form-decor'></span>
          <FilterCheckbox
            checkboxValue={checkboxValue}
            handleCheckbox={handleCheckbox}
          />
        </form>
        <div className='search__decor'></div>
      </div>
    </>
  );
};
