import React, { useEffect, useRef } from 'react';
import './TitileCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitileCards = ({ title, category }) => {
  const cardListRef = useRef();

  const handleWheel = (event) => {  
    event.preventDefault();
    cardListRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const cardList = cardListRef.current;
    cardList.addEventListener('wheel', handleWheel);

    return () => {
      cardList.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const filteredCards = category
    ? cards_data.filter(card => card.category === category)
    : cards_data;

  return (
    <div className='titlecards'>
      <h2 className='titlecards__title'>{title || 'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardListRef}>
        {filteredCards.map((card) => (
          <Link to={`/player/${card.id}`} className='card' key={card.id}>
            <img src={card.image} alt={card.title} className='card__image' />
            <p className='card__title'>{card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitileCards;
