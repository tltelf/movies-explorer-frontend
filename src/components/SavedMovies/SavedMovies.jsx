import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import { SearchForm } from '../Movies/SearchForm/SearchForm';

export const SavedMovies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList savedMovies={true} />
    </>
  );
};
