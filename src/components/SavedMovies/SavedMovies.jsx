import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { useEffect } from 'react';
import { filterMovies } from '../../utils/filter';

export const SavedMovies = ({
  likedCards,
  addLikedCard,
  removeLikedCard,
  filteredMovies,
  setFilteredMovies,
  searchText,
  checkboxValue,
  handleCheckbox,
  allMovies,
  isLoading,
  filteredLikedMovies,
  setFilteredLikedMovies,
  isMoviesPage,
  values,
  handleChange,
  errors,
  handleSubmitSearchForm,
  handleBlur,
  errorSearchForm,
  setErrorSearchForm,
  resErrorMovies,
}) => {
  useEffect(() => {
    filterMovies(
      allMovies,
      searchText,
      likedCards,
      setFilteredMovies,
      setFilteredLikedMovies,
      checkboxValue,
      isMoviesPage
    );
  }, []);
  return (
    <>
      <SearchForm
        searchText={searchText}
        checkboxValue={checkboxValue}
        handleCheckbox={handleCheckbox}
        values={values}
        handleChange={handleChange}
        errors={errors}
        handleSubmitSearchForm={handleSubmitSearchForm}
        handleBlur={handleBlur}
        errorSearchForm={errorSearchForm}
        setErrorSearchForm={setErrorSearchForm}
      />
      <MoviesCardList
        savedMovies={true}
        filteredMovies={filteredMovies}
        likedCards={likedCards}
        addLikedCard={addLikedCard}
        removeLikedCard={removeLikedCard}
        isLoading={isLoading}
        searchText={searchText}
        filteredLikedMovies={filteredLikedMovies}
        resErrorMovies={resErrorMovies}
      />
    </>
  );
};
