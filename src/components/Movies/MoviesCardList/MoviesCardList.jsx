import { useState, useEffect, useContext } from 'react';
import { MoviesData } from '../../MoviesData';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { LikesContext } from '../../../contexts/LikesContext';

export const MoviesCardList = ({ savedMovies, screenSize }) => {
  const { likedCards } = useContext(LikesContext);

  const [visibleCards, setVisibleCards] = useState(16);

  const handleLoadMore = () => {
    const showMore =
      screenSize > 1024 ? 4 : screenSize > 768 ? 3 : screenSize > 480 ? 2 : 1;
    setVisibleCards(visibleCards + showMore);
  };

  const allLikedCards = MoviesData.filter((card) =>
    likedCards.some((likedCard) => likedCard.id === card.id)
  );

  const visibleMovies = savedMovies
    ? allLikedCards
    : MoviesData.slice(0, visibleCards);

  useEffect(() => {
    const config = {
      1024: 16,
      768: 12,
      480: 8,
      320: 5,
      default: 3,
    };

    const keys = Object.keys(config).reverse();
    const matchedKey = keys.find((key) => screenSize > parseInt(key, 10));
    const defaultValue = config.default;

    setVisibleCards(config[matchedKey] || defaultValue);
  }, [screenSize]);

  return (
    <section className='movies'>
      <ul className={`movies__list${savedMovies ? ' movies__list_saved' : ''}`}>
        {visibleMovies.map((card) => (
          <MoviesCard key={card.id} card={card} savedMovies={savedMovies} />
        ))}
      </ul>
      <div className='movies__more'>
        {!savedMovies && visibleCards < MoviesData.length && (
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
