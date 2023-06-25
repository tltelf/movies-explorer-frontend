import { createContext, useState, useEffect } from 'react';

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState(
    JSON.parse(localStorage.getItem('likedCards')) || []
  );

  useEffect(() => {
    const storedLikedCards = localStorage.getItem('likedCards');
    if (storedLikedCards) {
      setLikedCards(JSON.parse(storedLikedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('likedCards', JSON.stringify(likedCards));
  }, [likedCards]);

  const addLikedCard = (card) => {
    setLikedCards((prevLikedCards) => [...prevLikedCards, card]);
  };

  const removeLikedCard = (cardId) => {
    setLikedCards((prevLikedCards) =>
      prevLikedCards.filter((card) => card.id !== cardId)
    );
  };

  return (
    <LikesContext.Provider
      value={{ likedCards, addLikedCard, removeLikedCard }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export { LikesProvider, LikesContext };
