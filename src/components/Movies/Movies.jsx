import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { SearchForm } from './SearchForm/SearchForm';

export const Movies = ({ screenSize }) => {
  return (
    <>
      <SearchForm />
      <MoviesCardList screenSize={screenSize} />
    </>
  );
};
