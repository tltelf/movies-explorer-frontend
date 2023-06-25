import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { SearchForm } from './SearchForm/SearchForm';
import { useEffect } from 'react';
import { filterMovies } from '../../utils/filter';

export const Movies = ({
  screenSize,
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
  isMoviesPage,
  filteredLikedMovies,
  setFilteredLikedMovies,
  values,
  handleChange,
  errors,
  handleSubmitSearchForm,
  handleBlur,
  errorSearchForm,
  setErrorSearchForm,
  resErrorMovies,
  setResErrorMovies,
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
    setResErrorMovies(false);
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
        searchText={searchText}
        filteredMovies={filteredMovies}
        likedCards={likedCards}
        screenSize={screenSize}
        addLikedCard={addLikedCard}
        removeLikedCard={removeLikedCard}
        isLoading={isLoading}
        filteredLikedMovies={filteredLikedMovies}
        resErrorMovies={resErrorMovies}
      />
    </>
  );
};
