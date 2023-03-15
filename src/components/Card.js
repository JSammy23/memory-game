import React, { useState } from 'react'

const Card = ({ title, image, shuffleCards, onCardClick }) => {

  
    
    const handleClick = () => {
      shuffleCards();
      onCardClick(title);
    };

  return (
    <div className='card' onClick={handleClick}>
        <img src={image} alt="Character" className='card-img' />
        <h2 className='title'>{title}</h2>
    </div>
  )
}

export default Card