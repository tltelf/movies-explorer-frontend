import { formatDuration } from '../../../utils/formatDuration';

export const MoviesCard = ({
  card,
  savedMovies,
  likedCards,
  addLikedCard,
  removeLikedCard,
}) => {
  const isLiked = likedCards.some(
    (likedCard) => likedCard.owner === card.owner
  );

  const handleLike = () => {
    isLiked ? removeLikedCard(card) : addLikedCard(card);
  };

  return (
    <li className='movies__cell'>
      <div className='movies__cell-img-container'>
        <a
          className='movies__cell-link'
          target='_blank'
          href={card.trailerLink}
          rel='noopener noreferrer'
        >
          <img
            className='movies__cell-img'
            src={
              card.image.url
                ? `https://api.nomoreparties.co/${card.image.url}`
                : `${card.image}`
            }
            alt='Изображение фильма'
          />
        </a>
      </div>
      <h2 className='movies__cell-title'>{card.nameRU}</h2>
      <button
        onClick={handleLike}
        className={`movies__cell-button${
          savedMovies
            ? ' movies__cell-button_remove'
            : `${isLiked ? ' movies__cell-button_active' : ''}`
        }`}
        type='button'
        aria-label={isLiked ? 'Удалить лайк' : 'Поставить лайк'}
      ></button>
      <div className='movies__cell-decor'></div>
      <span className='movies__cell-time'>{formatDuration(card.duration)}</span>
    </li>
  );
};
