import { useState, useEffect } from 'react';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

export const MoviesCardList = ({
  savedMovies,
  screenSize,
  filteredMovies,
  likedCards,
  addLikedCard,
  removeLikedCard,
  isLoading,
  searchText,
  filteredLikedMovies,
  resErrorMovies,
}) => {
  const [visibleCards, setVisibleCards] = useState(16);

  const handleLoadMore = () => {
    const showMore =
      screenSize > 1024 ? 4 : screenSize > 768 ? 3 : screenSize > 480 ? 2 : 1;
    setVisibleCards(visibleCards + showMore);
  };

  const visibleMovies = savedMovies
    ? filteredLikedMovies
    : filteredMovies.slice(0, visibleCards);

  useEffect(() => {
    const config = {
      1024: 16,
      768: 12,
      480: 8,
      319: 5,
      default: 3,
    };

    const keys = Object.keys(config).reverse();
    const matchedKey = keys.find((key) => screenSize > parseInt(key, 10));
    const defaultValue = config.default;

    setVisibleCards(config[matchedKey] || defaultValue);
  }, [screenSize]);

  return isLoading ? (
    <Preloader />
  ) : resErrorMovies && !savedMovies ? (
    <p className='not-found-movies'>
      Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз.
    </p>
  ) : !searchText && !savedMovies ? null : visibleMovies.length === 0 ? (
    !searchText && savedMovies ? null : (
      <p className='not-found-movies'>Ничего не найдено</p>
    )
  ) : (
    <section className='movies'>
      <ul className={`movies__list${savedMovies ? ' movies__list_saved' : ''}`}>
        {visibleMovies.map((card) => {
          return (
            <MoviesCard
              key={card.movieId ? card.movieId : card.id}
              card={card}
              savedMovies={savedMovies}
              likedCards={likedCards}
              addLikedCard={addLikedCard}
              removeLikedCard={removeLikedCard}
              filteredMovies={filteredMovies}
            />
          );
        })}
      </ul>
      <div className='movies__more'>
        {!savedMovies && visibleCards < filteredMovies.length && (
          <button
            className='movies__more-button'
            onClick={handleLoadMore}
            type='button'
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
};
