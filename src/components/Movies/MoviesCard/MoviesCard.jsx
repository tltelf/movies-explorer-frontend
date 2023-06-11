import { LikesContext } from '../../../contexts/LikesContext';
import { useEffect, useState, useContext } from 'react';

export const MoviesCard = ({ card, savedMovies }) => {
  const { likedCards, addLikedCard, removeLikedCard } =
    useContext(LikesContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(likedCards.some((likedCard) => likedCard.id === card.id));
  }, [likedCards.length]);

  const handleLike = () => {
    if (isLiked) {
      removeLikedCard(card.id);
    } else {
      addLikedCard(card);
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    localStorage.setItem('likedCards', JSON.stringify(likedCards));
  }, [likedCards]);

  return (
    <li className='movies__cell'>
      <div className='movies__cell-img-container'>
        <img
          className='movies__cell-img'
          src={card.img}
          alt='Изображение фильма'
        />
      </div>
      <h2 className='movies__cell-title'>{card.title}</h2>
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
      <span className='movies__cell-time'>{card.duration}</span>
    </li>
  );
};
